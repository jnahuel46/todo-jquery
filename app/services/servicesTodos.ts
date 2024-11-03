import { Task } from "@/components/molecules/TaskItem";
import axios from "axios";

export const API_URL = "https://jsonplaceholder.typicode.com/todos";

interface TaskResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  description: string;
}

// Function to fetch tasks with pagination and error handling
export const fetchTasks = async (
  page: number,
  limit: number
): Promise<{ tasks: Task[]; total: number }> => {
  try {
    const response = await axios.get(
      `${API_URL}?_page=${page}&_limit=${limit}`
    );
    const totalCount = parseInt(response.headers["x-total-count"] || "0", 10);
    const parsedResponse: TaskResponse[] = response.data.map(
      (el: { title: string; id: number }) => ({
        ...el,
        description: el.title,
        title: `Tarea ${el.id}`,
      })
    );
    return {
      tasks: parsedResponse,
      total: totalCount,
    };
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw new Error("Failed to fetch tasks.");
  }
};

// Function to create a new task with error handling
export const createTask = async (task: {
  title: string;
  completed: boolean;
}) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw new Error("Failed to create task.");
  }
};

// Function to delete a task by ID with error handling
export const deleteTask = async (id: number) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw new Error("Failed to delete task.");
  }
};
