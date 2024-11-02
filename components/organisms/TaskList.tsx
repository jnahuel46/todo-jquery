"use client";
import { useEffect, useState } from "react";
import { Task, TaskItem } from "../molecules/TaskItem";
import { useTodoStoreV2 } from "@/store/todo-store";
import { Button } from "../atoms/Button";
import CommonCard from "../layouts/CommonCard";
import Loader from "../atoms/Loader";
import { Modal } from "../molecules/Modal";
import { Paginator } from "../molecules/Paginator";

interface TodoListProps {
  initialTodos: Task[];
}

export function TodoList({ initialTodos }: TodoListProps) {
  const {
    setTodos,
    deleteTodo,
    currentPage,
    setCurrentPage,
    getTotalPages,
    getCurrentPageTodos,
    isLoading,
  } = useTodoStoreV2();

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setTodos(initialTodos);
  }, [initialTodos, setTodos]);

  const currentTodos = getCurrentPageTodos();
  const totalPages = getTotalPages();

  const changePage = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
  };

  return (
    <div>
      {isLoading ? (
        <CommonCard>
          <Loader />
        </CommonCard>
      ) : currentTodos.length > 0 ? (
        currentTodos.map((task) => (
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
      <Paginator
        handlePage={changePage}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
