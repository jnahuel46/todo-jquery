import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { fetchTasks, createTask, deleteTask } from "@/app/services/servicesTodos";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  description: string;
  userId: number;
}

interface TodoStore {
  todos: Task[];
  loading: boolean;
  totalTasks: number;
  fetchTodos: (limit?: number) => Promise<void>;
  addTodo: (task: Task) => Promise<void>;
  removeTodo: (id: number) => Promise<void>;
}

export const useTodoStore = create<TodoStore>()(
  devtools((set) => ({
    todos: [],
    loading: true,
    totalTasks: 0,
    fetchTodos: async (limit = 3) => {
      set({ loading: true });
      try {
        const { tasks, total } = await fetchTasks(1, limit); // Solo traemos la primera página
        set({ todos: tasks, totalTasks: total }); // Guardamos todas las tareas
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        set({ loading: false });
      }
    },
    addTodo: async (task) => {
      console.log(task)
      await createTask(task);
      set((state) => ({
        todos: [...state.todos, task],
        totalTasks: state.totalTasks + 1,
      }));
    },
    removeTodo: async (id) => {
      await deleteTask(id);
      set((state) => ({
        todos: state.todos.filter((task) => task.id !== id),
        totalTasks: state.totalTasks - 1,
      }));
    },
  }))
);
