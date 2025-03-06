import { getTask } from "./todoStorage";
import { editTask } from "./todoEditForm";
import { deleteTask } from "./todoEditForm";
// import { Task } from "./todoTypes";

export function renderTasks() {
  console.log("Rendering tasks...");

  const tasks = getTask();
  console.log("Tasks: ", tasks);

  const ul = document.createElement("ul");

  tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.id = "taskDiv";

    const todoTitle = document.createElement("li");
    todoTitle.textContent = task.todoTitle;
    todoTitle.id = "resultTodoTitle";
    todoTitle.addEventListener("click", () => {
      propertyDiv.classList.toggle("showPropertyDiv");
    });

    const dueDate = document.createElement("span");
    dueDate.textContent = task.dueDate
      ? new Date(task.dueDate).toDateString()
      : null;
    dueDate.id = "resultDueDate";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "editBtn";
    editBtn.id = task.id;
    editBtn.addEventListener("click", editTask);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.id = task.id;
    deleteBtn.addEventListener("click", deleteTask);

    const propertyDiv = document.createElement("div");
    propertyDiv.className = "propertyDiv";
    console.log("Property Div: ", propertyDiv);

    const description = document.createElement("p");
    description.textContent = task.description || null;

    const category = document.createElement("p");
    category.textContent = task.category || null;

    const priority = document.createElement("span");
    priority.textContent = task.priority || null;

    const tags = document.createElement("span");
    tags.textContent = Array.isArray(task.tags)
      ? task.tags.join(", ")
      : task.tags || null;

    propertyDiv.appendChild(description);
    propertyDiv.appendChild(category);

    propertyDiv.appendChild(priority);
    propertyDiv.appendChild(tags);

    todoTitle.appendChild(dueDate);
    todoTitle.appendChild(editBtn);
    todoTitle.appendChild(deleteBtn);

    taskDiv.appendChild(todoTitle);
    taskDiv.appendChild(propertyDiv);
    ul.appendChild(taskDiv);
  });

  const todoContainer =
    document.querySelector<HTMLDivElement>("#todoContainer");
  if (todoContainer) {
    todoContainer.innerHTML = "";
    todoContainer.appendChild(ul);
  }
}
