// Objective: Create a modal for adding new category to the todo list.

function getElement<T extends HTMLElement>(selector: string): T | null {
  return document.querySelector(selector);
}

const categoryModal = getElement<HTMLDivElement>("#categoryModal");
const newcategoryInput = getElement<HTMLInputElement>("#categoryModalInput");
const categorySelect = getElement<HTMLSelectElement>("#category");
const addCategoryBtn = getElement<HTMLButtonElement>("#addCategoryBtn");
const close = getElement<HTMLButtonElement>("#closeCategoryModal");


export function newCategory() {
  if (categoryModal) {
    categoryModal.style.display = "flex";
  }
}

export function closeCategoryModal(event: Event) {
  if (categoryModal && event.target instanceof HTMLElement) {
    if (event.target === categoryModal || event.target === close) {
      categoryModal.style.display = "none";
    }
  }
}

close?.addEventListener("click", closeCategoryModal);
window.addEventListener("click", (event) => {
  if (event.target !== categoryModal && event.target !== addCategoryBtn) {
    return;
  }
  closeCategoryModal(event);
});

addCategoryBtn?.addEventListener("click", addCategory);

function addCategory(event: Event) {
  event.preventDefault();
  const category = newcategoryInput?.value.trim();
  if (category) {
    const option = document.createElement("option");
    option.value = category;
    option.text = category;
    categorySelect?.appendChild(option);
    newcategoryInput ? (newcategoryInput.value = "") : null;
  }
}
