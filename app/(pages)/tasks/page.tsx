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
  const { todos, totalTasks, loading, fetchTodos, removeTodo } = useTodoStore();
  const [modalOpen, setModalOpen] = useState(false);

  const limit = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [initialFetch, setInitialFetch] = useState(true);

  useEffect(() => {
    if (initialFetch) {
      fetchTodos(3);
      setInitialFetch(false);
    }
  }, [fetchTodos, initialFetch]);

  const paginatedTodos = todos.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  const changePage = (newPage: number) => {
    const totalPages = Math.ceil(totalTasks / limit);
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
      ) : !loading || paginatedTodos.length > 0 ? (
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

      <div className="pt-[30px] gap-[10px] flex justify-between">
        <Button
          title="Previous"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        />
        <Button
          title="Next"
          onClick={() => changePage(currentPage + 1)}
          disabled={todos.length < 6}
        />
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </PagesLayout>
  );
}
