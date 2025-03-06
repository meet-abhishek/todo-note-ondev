import {
  handleTodoForm,
  showDescriptionSlider,
  hideDescriptionSlider
} from "./features/task/todoEventHandlers";
import {
  handleNoteChange,
  tempMsg,
} from "./features/note/noteService";
import { newCategory } from "./features/task/todoCategoryModal";

console.log("app is opened");

const noteForm = document.querySelector<HTMLFormElement>("#noteForm");
const noteInput = document.getElementById("noteInput");
const noteBtn = document.getElementById("noteBtn") as HTMLButtonElement | null;
const noteOpenBtn = document.getElementById("noteOpenBtn");

const todoForm = document.getElementById("todoForm") as HTMLFormElement | null;
const todoInput = document.getElementById(
  "todoTitle"
) as HTMLInputElement | null;
// const todoBtn = document.getElementById("todoBtn") as HTMLButtonElement | null;
const newCategoryBtn = document.getElementById(
  "newCategoryBtn"
) as HTMLButtonElement | null;

noteForm?.addEventListener("click", tempMsg);
noteInput?.addEventListener("input", handleNoteChange);
noteBtn?.addEventListener("click", tempMsg);
noteOpenBtn?.addEventListener("click", tempMsg);

todoForm?.addEventListener("submit", handleTodoForm);
todoInput?.addEventListener("focus", showDescriptionSlider);
// todoBtn?.addEventListener("click", addTask);
newCategoryBtn?.addEventListener("click", newCategory);

console.log("app is running");


document.addEventListener("click", hideDescriptionSlider)


// localStorage.clear();
