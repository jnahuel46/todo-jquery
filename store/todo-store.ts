import { createTask, deleteTask } from "@/app/services/servicesTodos";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface Todo {
  userId: number;
  id: number;
  description: string;
  title: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  currentPage: number;
  itemsPerPage: number;
  isLoading: boolean;
  setTodos: (todos: Todo[]) => void;
  addTodo: (todo: Omit<Todo, "id">) => void;
  deleteTodo: (id: number) => Promise<void>;
  setCurrentPage: (page: number) => void;
  getTotalPages: () => number;
  getCurrentPageTodos: () => Todo[];
  setLoading: (loading: boolean) => void;
}

export const useTodoStoreV2 = create<TodoStore>()(
  devtools((set, get) => ({
    todos: [],
    currentPage: 1,
    itemsPerPage: 5,
    isLoading: false,

    setTodos: (todos) => set({ todos }),

    addTodo: async (todo) => {
      await createTask(todo);
      set((state) => ({
        todos: [
          ...state.todos,
          { ...todo, id: Math.max(...state.todos.map((t) => t.id), 0) + 1 },
        ],
      }));
    },

    deleteTodo: async (id) => {
      try {
        // Simulate API call
        await deleteTask(id);
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      } finally {
        set({ isLoading: false });
      }
    },

    setCurrentPage: (page) => set({ currentPage: page }),

    getTotalPages: () => {
      const { todos, itemsPerPage } = get();
      return Math.ceil(todos.length / itemsPerPage);
    },

    getCurrentPageTodos: () => {
      const { todos, currentPage, itemsPerPage } = get();
      const start = (currentPage - 1) * itemsPerPage;
      return todos.slice(start, start + itemsPerPage);
    },

    setLoading: (loading) => set({ isLoading: loading }),
  }))
);
