import PagesLayout from "@/components/layouts/PagesLayout";
import { TodoList } from "@/components/organisms/TaskList";
import { TitlePage } from "@/components/atoms/TitlePage";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  description: string;
}

export const getTodos = async (
  page: number,
  limit: number
): Promise<{ tasks: Task[]; total: number }> => {
  const response = await fetch(`${API_URL}?_page=${page}&_limit=${limit}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  const totalCount = parseInt(response.headers.get("x-total-count") || "0", 10);

  const data = await response.json();
  const parsedResponse: Task[] = data.map((el: Task) => ({
    ...el,
    description: el.title,
    title: `Task ${el.id}`,
  }));

  return {
    tasks: parsedResponse,
    total: totalCount,
  };
};

export default async function TasksPage() {
  const { tasks } = await getTodos(1, 3);
  return (
    <PagesLayout>
      <TitlePage title="My Tasks" />
      <TodoList initialTodos={tasks} />
    </PagesLayout>
  );
}
