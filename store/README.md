# Documentation of Stores

## 1. Cart Store (useCartStore)

### General Description

This store manages the shopping cart state of the application using Zustand. It allows managing products, calculating totals, and maintaining a persistent cart state.

# Data Structure

## 1. CartProduct (Product of the Cart)

- **id**: Unique identifier of the product
- **name**: Product name
- **price**: Product price
- **image**: Product image (using StaticImageData from Next.js)

## 2. Store State

### Main Properties

- **products**: Array of products in the cart
- **total**: Sum of the prices of the products

### Initial Products

Two predefined products:

- Product 1 (id: 1)

  - Name: "Producto 1"
  - Price: 9.99
  - Image: pienso_1

- Product 2 (id: 2)
  - Name: "Producto 2"
  - Price: 19.99
  - Image: pienso_2

### Main Functions

- **addProduct**:
  - Adds a new product to the cart
  - Keeps the existing products and adds the new one
- **removeProduct**:
  - Deletes a specific product by ID
  - Filters the products array
- **calculateTotal**:
  - Calculates the total sum of prices
  - Uses reduce to accumulate the prices
- **resetCart**:
  - Restores the cart to its initial state
  - Restores the predefined products
  - Recalculates the total

## 2. Todo Store (useTodoStoreV2)

### General Description

This store manages the management of tasks (todos) with pagination and loading states, also using Zustand.

### Data Structure

## 1. Todo (Task)

- **userId**: User ID
- **id**: Task ID
- **description**: Task description
- **title**: Task title
- **completed**: Completed state

## 2. Store State

- **todos**: Array of tasks
- **currentPage**: Current page
- **itemsPerPage**: Elements per page (5)
- **isLoading**: Loading state

### Main Functions

- **setTodos**:
  - Updates the complete list of tasks
- **addTodo**:
  - Creates a new task
  - Integrates with external service (createTask)
  - Generates an automatic ID
- **deleteTodo**:
  - Deletes a task by ID
  - Integrates with external service (deleteTask)
- **setCurrentPage**:
  - Updates the current page
- **getTotalPages**:
  - Calculates the total number of pages
- **getCurrentPageTodos**:
  - Gets the tasks of the current page

### Pagination Functions

- **setCurrentPage**: Updates the current page
- **getTotalPages**: Calculates the total number of pages
- **getCurrentPageTodos**: Gets the tasks of the current page

### Additional Features

- Implements devtools for debugging
- Handles loading states
- Integrated pagination
- Integrates with external services
- Automatic calculation of pages
- Uses Middleware
  Both stores use the devtools middleware of Zustand to facilitate debugging and development.

This documentation provides an overview of how both stores are structured and function in the application. Each has its specific purpose and handles different aspects of the application's business logic.
