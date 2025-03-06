# Todo-Note Web App Documentation

## Overview
The **Todo-Note Web App** is a Vanilla TypeScript project. It provides a structured way to add, edit, delete, and categorize tasks, with future plans for a note-taking feature. The app is designed to be scalable, maintainable, and adheres to best coding practices. The web app is developed for skill demonstration in **JavaScript/TypeScript.**

## Features
- **Task Management**: Add, edit, and delete tasks with titles, descriptions, categories, priorities, tags, and due dates.
- **Local Storage Integration**: Tasks are saved in the browser’s local storage.
- **Category Management**: Users can create new task categories dynamically.
- **UI Enhancements**: Interactive elements such as sliders for descriptions and modal pop-ups for categories.
- **Planned Features**: A fully integrated note-taking system in future updates still not functional.

## Technical Stack
- **Language**: TypeScript
- **Framework/Tooling**: Vite for fast development
- **Storage**: Local Storage (No database integration)

## Development Approach
### 1. Project Initialization
- Started with Vite and TypeScript setup to enable a fast and efficient development environment.
- Defined a modular structure, ensuring maintainability and scalability.

### 2. TypeScript Implementation
- Used **TypeScript interfaces** to define task structures, ensuring type safety.
- Implemented event handlers with strict type definitions for forms and UI elements.

### 3. Modular Code Architecture
- **Event Handlers**: Managed form submission and interactions in `todoEventHandlers.ts`.
- **Storage Management**: Implemented `getTask()` and `saveTask()` in `todoStorage.ts`.
- **UI Rendering**: Created dynamic task rendering logic in `todoRenderer.ts`.
- **Task Editing**: Developed an inline editing system in `todoEditForm.ts`.
- **Category Management**: Built a modal system for adding new categories.

### 4. Best Practices Followed
- **Separation of Concerns**: Organized code into different modules for better readability and maintainability.
- **Error Handling**: Implemented error handling mechanisms to avoid unexpected crashes.
- **Consistent Coding Style**: Followed TypeScript and JavaScript best practices, ensuring clarity and efficiency.

## How It Works
1. **Adding a Task**
   - Users enter a task title and optionally provide a description, due date, category, priority, and tags.
   - On form submission, the task is stored in local storage and displayed dynamically.

2. **Editing a Task**
   - Users can click the "Edit" button to modify a task.
   - The updated task information is saved and re-rendered.

3. **Deleting a Task**
   - Clicking the "Delete" button removes the task from local storage and the UI.

4. **Managing Categories**
   - Users can create new categories via a modal input field.

## Future Enhancements
- **Note-Taking Feature**: A fully developed note management system.
- **Database Integration**: Migrating from local storage to a backend database for persistent data management.
- **User Authentication**: Implementing authentication to allow multiple users to manage tasks separately.

## Notes on Bugs
- **Typescript Interface**: It uses an interface type that includes multiple types, such as strings, dates, and arrays. The FormData API returns strings for all input elements. The developer needs to convert them to the proper types depending on the type defined. 
- **Rendering by CreateElement**
- **Need improvement, optimization on CSS specificity & structure**

## Conclusion
The **Todo-Note Web App** is a well-structured TypeScript project. It follows best coding practices.