# Components Directory - Atomic Design Structure

## 1. Atoms
Most basic and reusable components.

### Button/
- Base reusable button
- Variants: primary, secondary
- Props: onClick, disabled, children

### Input/
- Basic input field
- Basic validation
- State management: focus, error

### Loading/
- Spinner de carga
- Simple visual indicator
- Basic animation

## 2. Molecules
Combinations of atoms that form more complex components.

### TodoItem/
- Combina Button y texto
- Displays individual task information
- Actions: delete

### PaginationControl/
- Conjunto de botones de navegación
- Current page indicator
- Previous/next controls

### SearchBar/
- Input con botón de búsqueda
- Filtering functionality
- Visual feedback

## 3. Organisms
More complex sections formed by molecules.

### TodoList/
- Complete list of TodoItems
- Global state management
- Integration with store

### TodoForm/
- Complete form to create tasks
- Complex validation
- Submission handling

### Pagination/
- Complete pagination system
- Navigation logic
- Integration with todo list

## 4. Layout (Templates)
Structures that organize components.

### Header/
- Main navigation
- Logo
- Top menu

### Footer/
- Contact information
- Important links
- Copyright

### MainLayout/
- Main app structure
- Content organization
- Spacing management

## General Features

### Design Patterns
- Functional components
- Typed props (TypeScript)
- Tailwind CSS for styles

### Conventions
- Names: PascalCase
- One component per file
- Inline documentation

### Integration
- Global state management with Zustand
- Loading state handling
- Respuesta a eventos