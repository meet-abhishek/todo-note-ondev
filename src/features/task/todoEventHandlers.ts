import { Task } from "./todoTypes";
import { getTask, saveTask } from "./todoStorage";
import { renderTasks } from "./todoRenderer";

export const tasks: Task[] = getTask();

export function handleTodoForm(event: SubmitEvent) {
  event.preventDefault();
  console.log("Event: ", event);

  const form = event.target;
  if (!(form instanceof HTMLFormElement)) {
    console.error("Form not found");
    return;
  }

  const formData = new FormData(form);
  //FormData CAN ACCESS USING formData.get(key) OR formData.getAll(key) OR formData.entries() OR formData.forEach((value, key) => {})

  console.log("Form Data: ", formData);

  const data = Object.fromEntries(formData.entries());

  console.log("Data: ", data);

  const taskData: Task = {
    id: crypto.randomUUID(),
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
    dueDate: new Date(data.dueDate.toString()),
    priority:
      data.priority === "low" || data.priority === "medium"
        ? data.priority
        : "high",
    tags:
      typeof data.tags === "string" ? data.tags.trim().split(/\s*,\s*/) : [],
  };

  console.log("Task Data: ", taskData);

  try {
    tasks.push(taskData);
    saveTask(tasks);
    form.reset();
    renderTasks();
  } catch (error) {
    console.error("There is error", error);
  }
}

renderTasks();

export function showDescriptionSlider(event: FocusEvent) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    console.error("Target is not on input element");
    return;
  }

  const descriptionSlider =
    document.querySelector<HTMLDivElement>("#descriptionSlider");
  if (descriptionSlider)
    descriptionSlider.classList.add("description-slider-show");

  console.log("Event.Target: ", event.target);
  console.log("Task handle is changing, Target: ", target.value);
}

export function hideDescriptionSlider(event: MouseEvent) {
  const target = event.target;
  if (!(target instanceof Element)) {
    console.error("Event target is null");
    return;
  }

  const descriptionSlider =
    document.querySelector<HTMLDivElement>("#descriptionSlider");
  const todoTitle = document.querySelector<HTMLInputElement>("#todoTitle");
  const dueDate = document.querySelector<HTMLDataElement>("#dueDate");

  if (descriptionSlider && todoTitle && dueDate) {
    if (
      !todoTitle.contains(target) &&
      !descriptionSlider.contains(target) &&
      !dueDate.contains(target)
    )
      descriptionSlider.classList.remove("description-slider-show");
  }
}

