// app/tasks/page.tsx
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

const getTodos = async (page: number, limit: number): Promise<{ tasks: Task[]; total: number }> => {
  try {
    const response = await fetch(`${API_URL}?_page=${page}&_limit=${limit}`);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const totalCountHeader = response.headers.get("x-total-count");
    if (!totalCountHeader) {
      throw new Error("Total count header not found");
    }
    const totalCount = parseInt(totalCountHeader, 10);
    if (isNaN(totalCount)) {
      throw new Error("Total count is not a valid number");
    }

    const data = await response.json();
    const parsedResponse: Task[] = data.map((el: Task) => ({
      ...el,
      description: el.title,
      title: `Tarea ${el.id}`,
    }));

    return {
      tasks: parsedResponse,
      total: totalCount,
    };
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    throw new Error("Unable to fetch tasks. Please try again later.");
  }
};

const TasksPage = async () => {
  let tasks: Task[] = [];
  let error: string | undefined;

  try {
    const { tasks: fetchedTasks } = await getTodos(1, 3);
    tasks = fetchedTasks;
  } catch (err) {
    error = `${err} Unable to fetch tasks. Please try again later.`;
  }

  return (
    <PagesLayout>
      <TitlePage title="Mis tareas" />
      {error ? <p>{error}</p> : <TodoList initialTodos={tasks} />}
    </PagesLayout>
  );
};

export default TasksPage;
