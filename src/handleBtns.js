import { handleHeadlineBtn, handleProjectBtn } from "./functions";

export function handleBtns() {
  const handleSidabar = document.getElementById("handleSidebar");
  handleSidabar.addEventListener("click", () => {
    handleHeadlineBtn();
  });

  const projectOption = document.getElementById("projectOption");
  projectOption.addEventListener("click", () => {
    handleProjectBtn();
  });
}
