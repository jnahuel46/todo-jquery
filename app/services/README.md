# Services Todos Documentation

## Overview
This file contains the services for handling CRUD operations on tasks using the JSONPlaceholder API.

## API Endpoints
Base URL: `https://jsonplaceholder.typicode.com`

## Implemented Services

### getTasks
- **Purpose**: Get all tasks
- **Method**: GET
- **Endpoint**: `/todos`
- **Return**: Promise<Todo[]>

### createTask
- **Purpose**: Create a new task
- **Method**: POST
- **Endpoint**: `/todos`
- **Parameters**: Todo (without id)
- **Return**: Promise<Todo>

### deleteTask
- **Purpose**: Delete an existing task
- **Method**: DELETE
- **Endpoint**: `/todos/:id`
- **Parameters**: id (number)
- **Return**: Promise<void>

## Error Handling
- Implements try/catch for error management
- Returns descriptive error messages
