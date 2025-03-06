import { Task } from "./todoTypes";

export function saveTask(tasks: Task[]) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function getTask(): Task[] {
  const data = localStorage.getItem("tasks");
  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error("Error parsing data: ", error);
      return [];
    }
  }
  return [];
}
