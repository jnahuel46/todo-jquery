"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import CommonCard from "@/components/CommonCard";
import PagesLayout from "@/components/PagesLayout";
import { TitlePage } from "@/components/TitlePage";
import { TaskItem } from "@/components/TaskItem";
import Loader from "@/components/Loader";
import { useTodoStore } from "@/store/todoStore";
import { Modal } from "@/components/Modal";

export default function TasksPage() {
  const { todos, loading, fetchTodos, removeTodo } = useTodoStore();
  const [modalOpen, setModalOpen] = useState(false);

  const limit = 5; // Número máximo de tareas por página
  const [currentPage, setCurrentPage] = useState(1);
  const [initialFetch, setInitialFetch] = useState(true);

  useEffect(() => {
    if (initialFetch) {
      fetchTodos(3); // Puedes ajustar este número según tus necesidades
      setInitialFetch(false);
    }
  }, [fetchTodos, initialFetch]);

  const paginatedTodos = todos.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  const totalTasks = todos.length; // Total de tareas actuales
  const totalPages = Math.ceil(totalTasks / limit); // Calcular el total de páginas

  const changePage = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleDelete = async (id: number) => {
    await removeTodo(id); // Llama a la función de eliminación del store
  };

  return (
    <PagesLayout>
      <TitlePage title="My Tasks" />

      {loading ? (
        <CommonCard>
          <Loader />
        </CommonCard>
      ) : paginatedTodos.length > 0 ? (
        paginatedTodos.map((task) => (
          <CommonCard key={task.id}>
            <TaskItem task={task} onDelete={handleDelete} />
          </CommonCard>
        ))
      ) : (
        <CommonCard>
          <div>No tasks available.</div>
        </CommonCard>
      )}

      <div className="pt-[30px]">
        <Button title="Add Task" onClick={() => setModalOpen(true)} />
      </div>

      <div className="pt-[30px] flex justify-between items-center">
        <Button
          title="Previous"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        />
        <span className="flex-1 text-center mx-2">
          Page {currentPage} of {totalPages === 0 ? 1 : totalPages}
        </span>
        <Button
          title="Next"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </PagesLayout>
  );
}
