// services/taskService.ts
import { Task } from "@/components/molecules/TaskItem";
import axios from "axios";

export const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Define the Task interface
interface TaskResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  description: string; // Include the new property
}

// Function to fetch tasks with pagination
export const fetchTasks = async (
  page: number,
  limit: number
): Promise<{ tasks: Task[]; total: number }> => {
  const response = await axios.get(`${API_URL}?_page=${page}&_limit=${limit}`);
  const totalCount = parseInt(response.headers["x-total-count"] || "0", 5);
  console.log(response);
  // Map the response data to include the description
  const parsedResponse: TaskResponse[] = response.data.map(
    (el: { title: string; id: number }) => ({
      ...el,
      description: el.title,
      title: `Task ${el.id}`,
    })
  );
  return {
    tasks: parsedResponse,
    total: totalCount, // Return the total of pages
  };
};

// Function to create a new task
export const createTask = async (task: {
  title: string;
  completed: boolean;
}) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

// Function to delete a task by ID
export const deleteTask = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
