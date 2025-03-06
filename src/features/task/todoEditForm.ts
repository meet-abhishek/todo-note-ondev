import { tasks } from "./todoEventHandlers";
import { renderTasks } from "./todoRenderer";
import { saveTask } from "./todoStorage";
import { Task } from "./todoTypes";

export function editTask(event: Event) {
  event.preventDefault();
  event.stopPropagation();
  const button = event.target as HTMLButtonElement;
  console.log("Edit Clicked: ", button.id);

  const task = tasks.find((task) => task.id === button.id);
  console.log("Task: ", task);
  if (!task) {
    console.error("Task not found");
    return;
  }

  const formCotainer = document.getElementById("formTodoContainer");

  const formDiv = document.createElement("div");

  const anEditTitle = document.createElement("div");
  anEditTitle.textContent = "Edit Task";
  anEditTitle.id = "anEditTitle";

  const form = document.createElement("form");
  form.id = "todoForm";
  form.addEventListener("submit", save);

  const todoId = document.createElement("input");
  todoId.id = "todoId";
  todoId.type = "text";
  todoId.name = "todoId";
  todoId.readOnly = true;
  todoId.value = task.id;

  const todoTitle = document.createElement("input");
  todoTitle.id = "todoTitle";
  todoTitle.type = "text";
  todoTitle.name = "todoTitle";
  todoTitle.value = task.todoTitle || "";

  const description = document.createElement("textarea");
  description.className = "description-tags";
  description.name = "description";
  description.value = task.description || "";

  const category = document.createElement("select");
  category.name = "category";
  category.value = task.category || "";
  const optionsCategory = [
    { value: "Work", text: "Work" },
    { value: "Personal", text: "Personl" },
    { value: "Other", text: "Other" },
  ];
  optionsCategory.forEach((opt) => {
    const optionCat = document.createElement("option");
    optionCat.value = opt.value;
    optionCat.textContent = opt.text;
    category.appendChild(optionCat);
  });

  console.log("Due Date: ", task.dueDate);

  const dueDate = document.createElement("input");
  dueDate.type = "date";
  dueDate.name = "dueDate";
  dueDate.value = task.dueDate
    ? new Date(task.dueDate).toISOString().split("T")[0]
    : "";

  const priority = document.createElement("select");
  priority.name = "priority";
  priority.value = task.priority || "";
  const optionsPriority = [
    { value: "low", text: "Low" },
    { value: "medium", text: "Medium" },
    { value: "high", text: "High" },
  ];
  optionsPriority.forEach((opt) => {
    const optionPri = document.createElement("option");
    optionPri.value = opt.value;
    optionPri.textContent = opt.text;
    priority.appendChild(optionPri);
  });

  const tags = document.createElement("input");
  tags.type = "text";
  tags.name = "tags";
  tags.value = Array.isArray(task.tags)
    ? task.tags.join(", ")
    : task.tags || "";

  const saveBtn = document.createElement("button");
  saveBtn.type = "submit";
  saveBtn.textContent = "Save";

  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", cancel);

  form.appendChild(anEditTitle);
  form.appendChild(todoId);
  form.appendChild(todoTitle);
  form.appendChild(description);
  form.appendChild(category);
  form.appendChild(dueDate);
  form.appendChild(priority);
  form.appendChild(tags);
  form.appendChild(saveBtn);
  form.appendChild(cancelBtn);

  formDiv.appendChild(form);
  formCotainer?.appendChild(formDiv);

  console.log("From Edit Button Clicked: ", formDiv);
}

function save(event: SubmitEvent) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  console.log("From Edit Save Form formData: ", formData);

  const data = Object.fromEntries(formData.entries());
  console.log("From Edit Save Form Data: ", formData);

  const taskData: Task = {
    id: data.todoId ? String(data.todoId) : "",
    todoTitle:
      typeof data.todoTitle === "string"
        ? data.todoTitle
        : String(data.todoTitle),
    description:
      typeof data.description === "string"
        ? data.description
        : String(data.description),
    category:
      typeof data.category === "string" ? data.category : String(data.category),
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    dueDate:
      typeof data.dueDate === "string" && !isNaN(Date.parse(data.dueDate))
        ? new Date(data.dueDate)
        : undefined,
    priority: data.priority as "low" | "medium" | "high",
    tags: Array.isArray(data.tags)
      ? data.tags
      : typeof data.tags === "string"
      ? data.tags.trim().split("/[s,]+/")
      : [],
  };

  tasks.forEach((task, index) => {
    if (task.id === taskData.id) {
      tasks[index] = taskData;
    }
  });

  saveTask(tasks);
  renderTasks();

  form.parentElement?.remove();
}

function cancel(event: Event) {
  event.preventDefault();
  const button = event.target as HTMLButtonElement;
  const formDiv = button.closest("div");
  formDiv?.remove();
}

export function deleteTask(event: Event) {
  const button = event?.target as HTMLButtonElement;
  const buttonId = button.id;

  const index = tasks.findIndex((task) => task.id === buttonId);

  if (index === -1) {
    console.error("Task not found");
    return;
  }
  tasks.splice(index, 1);

  saveTask(tasks);
  renderTasks();
}
