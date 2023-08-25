import {
  closeTaskForm,
  handleHeadlineBtn,
  handleProjectBtn,
  openTaskForm,
} from "./functions";

export function handleBtns() {
  const handleSidabar = document.getElementById("handleSidebar");
  handleSidabar.addEventListener("click", () => {
    handleHeadlineBtn();
  });

  const projectOption = document.getElementById("projectOption");
  projectOption.addEventListener("click", () => {
    handleProjectBtn();
  });

  const plusBtn = document.querySelector(".plus-btn");
  plusBtn.addEventListener("click", () => {
    openTaskForm();
    handleHeadlineBtn();
  });

  const taskFormContainer = document.querySelector(".task-form-container");
  taskFormContainer.addEventListener("click", () => {
    closeTaskForm();
    handleHeadlineBtn();
  });

  const taskForm = document.querySelector("[data-task-form]");
  taskForm.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}
