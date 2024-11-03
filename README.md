# Next-Template

This project is a task management application developed with Next.js, allowing users to perform CRUD operations on a task list. The application employs both server-side rendering (SSR) and client-side rendering (CSR) and is organized following the Atomic Design approach.

#### Data Handling Clarification
Data fetching is performed with real information from an external URL, which serves as an example for receiving data. All other CRUD actions (create, update, delete) trigger corresponding endpoints; however, the final state of tasks is managed using Zustand. This allows the application to handle local state more efficiently without relying on continuous API calls, maintaining a seamless user experience.

## Technologies Used

### Next.js
A React framework that combines SSR and CSR, optimizing performance and providing a smooth user experience. Next.js was chosen for its ability to improve SEO through SSR, and its native features such as API routing and built-in CSS support, which simplifies initial setup and increases development speed.

### React
A JavaScript library for building interactive and high-performance user interfaces. React enables the use of reusable and scalable components, which perfectly aligns with the Atomic Design approach, structuring the application into reusable elements at different levels.

### Zustand
A minimalist state management library for React. Its simple and flexible implementation allows precise state control without complications. It was chosen over alternatives like Redux for its ease of use and lower overhead, making it ideal for applications that require global state but aren't extremely complex.

### Tailwind CSS
A utility-first CSS framework that enables styling through predefined classes, achieving responsive and highly customized designs. We chose Tailwind CSS to leverage its speed in creating interfaces, its modular structure, and its efficiency in reducing CSS file sizes.

### Axios
A JavaScript HTTP client that facilitates interaction with REST APIs, offering clear syntax for handling promises and errors. Axios enables simple HTTP request configuration and was selected for its good support of request cancellation, error handling, and interceptor capabilities.

### Zod
A TypeScript schema validation library. Zod allows defining and validating input data in forms and API responses, ensuring that only valid data enters the application. Zod was chosen for its seamless integration with TypeScript and for facilitating the creation of complex validations in a declarative manner.

### Atomic Design
A design approach that organizes interface components in a hierarchy (atoms, molecules, organisms, etc.) to create a more organized and maintainable architecture. By following this model, the application achieves more structured, scalable, and reusable code.

## Application Features

The task application includes custom form validations and robust error handling, providing clear error messages and notifications to users when failures occur in task creation, editing, or deletion. Creation, update, and deletion operations are protected with detailed error handling, ensuring that any API or client errors are effectively communicated to the user.

## Additional Features

- Maintenance screen of undeveloped features
- Form validations with Zod and custom errors
- Shopping cart with Zustand
- Side menu in icon menu
- Search bar (mocked)
- Profile modal (mocked)
- Unit testing with Jest
- Hallowen theme selector

## Prerequisites

- Node.js - Recommended version: v16 or higher

## Local Installation and Execution

To run the application in your local environment:

1. Clone the repository:
```bash
git clone https://github.com/jnahuel46/todo-jquery
```

2. Navigate to the project directory:
```bash
cd next-template
```

3. Install dependencies:
```bash
npm install
```

4. Run the application in development mode:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

## Deployment

The application is deployed on Vercel **https://todo-jquery-i9ttqebki-jeremias-muriettes-projects.vercel.app/details**.

## API Endpoints

The application uses an API based on https://jsonplaceholder.typicode.com/todos for task management. Here are the detailed endpoints:

### GET /todos

**Description**: Retrieves a list of tasks with pagination support.

**Parameters**:
- page: Page number (e.g., 1)
- limit: Number of tasks per page (e.g., 10)

**Request Example**:
```javascript
fetchTasks(1, 10);
```

**Response**:
- 200 OK: Returns an object with an array of tasks and the total number of tasks:
```json
{
  "tasks": [
    { "userId": 1, "id": 1, "title": "Task 1", "completed": false, "description": "Task 1" },
    ...
  ],
  "total": 200
}
```

### POST /todos

**Description**: Creates a new task.

**Request Parameters**:
- title: Task title
- completed: Task status (true or false)

**Request Example**:
```javascript
createTask({ title: "New task", completed: false });
```

**Response**:
- 201 Created: Returns the created task
- Validation: Form data is validated using Zod to ensure the title is not empty and the status is boolean.

### DELETE /todos/:id

**Description**: Deletes a specific task.

**URL Parameters**:
- id: ID of the task to delete

**Request Example**:
```javascript
deleteTask(1);
```

**Response**:
- 204 No Content: Indicates the task was successfully deleted

## Component Structure and Atomic Design

The application follows the Single Responsibility principle and uses the Atomic Design system for component organization, with the following levels:

- **Atoms**: Smallest, basic components like buttons and labels.
- **Molecules**: Components that combine atoms, like the TaskItem component.
- **Organisms**: More complex components that group molecules, like TaskList.
- **Templates**: General layouts that structure pages.
- **Pages**: Complete screens rendered at specific routes.

## Rendering Notes

- **Server-Side Rendering (SSR)**: Used to load the initial task list on the server side, optimizing performance and improving search engine indexing.
- **Client-Side Rendering (CSR)**: Used for task update and deletion operations on the client, providing a faster and more responsive user experience.