import React from "react";

export interface Task {
  userId: number;
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
}

export const TaskItem = ({ task, onDelete }: TaskItemProps) => {
  const handleDelete = async () => {
    try {
      await onDelete(task.id);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold text-[#555555] mb-1 dark:text-neutral100">{task.title}</h3>
        <p className="text-sm text-gray-500 dark:text-neutral100">{task.description}</p>
      </div>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={handleDelete}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.09375 2.25H6.1875V1.6875C6.1875 0.75702 6.94452 0 7.875 0H10.125C11.0555 0 11.8125 0.75702 11.8125 1.6875V2.25H14.9062C15.6817 2.25 16.3125 2.88084 16.3125 3.65625V5.625C16.3125 5.93564 16.0606 6.1875 15.75 6.1875H15.4426L14.9566 16.3928C14.9137 17.294 14.1733 18 13.2711 18H4.72894C3.82665 18 3.08626 17.294 3.04337 16.3928L2.55741 6.1875H2.25C1.93936 6.1875 1.6875 5.93564 1.6875 5.625V3.65625C1.6875 2.88084 2.31834 2.25 3.09375 2.25ZM10.6875 1.6875C10.6875 1.37735 10.4351 1.125 10.125 1.125H7.875C7.56485 1.125 7.3125 1.37735 7.3125 1.6875V2.25H10.6875V1.6875ZM15.1875 3.65625C15.1875 3.50118 15.0613 3.375 14.9062 3.375H3.09375C2.93868 3.375 2.8125 3.50118 2.8125 3.65625V5.0625C2.98586 5.0625 14.4692 5.0625 15.1875 5.0625V3.65625ZM4.16711 16.3393C4.18141 16.6397 4.42821 16.875 4.72894 16.875H13.2711C13.5718 16.875 13.8186 16.6397 13.8329 16.3393L14.3163 6.1875H3.68367L4.16711 16.3393Z"
            fill="#B3B3B3"
          />
          <path
            d="M9 15.75C8.68936 15.75 8.4375 15.4981 8.4375 15.1875V7.875C8.4375 7.56436 8.68936 7.3125 9 7.3125C9.31064 7.3125 9.5625 7.56436 9.5625 7.875V15.1875C9.5625 15.4981 9.31068 15.75 9 15.75Z"
            fill="#B3B3B3"
          />
          <path
            d="M6.1875 15.75C5.87686 15.75 5.625 15.4981 5.625 15.1875V7.875C5.625 7.56436 5.87686 7.3125 6.1875 7.3125C6.49814 7.3125 6.75 7.56436 6.75 7.875V15.1875C6.75 15.4981 6.49818 15.75 6.1875 15.75Z"
            fill="#B3B3B3"
          />
          <path
            d="M11.8125 15.75C11.5019 15.75 11.25 15.4981 11.25 15.1875V7.875C11.25 7.56436 11.5019 7.3125 11.8125 7.3125C12.1231 7.3125 12.375 7.56436 12.375 7.875V15.1875C12.375 15.4981 12.1232 15.75 11.8125 15.75Z"
            fill="#B3B3B3"
          />
        </svg>
      </button>
    </div>
  );
};
