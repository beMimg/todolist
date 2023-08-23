import { handleHeadlineBtn } from "./functions";

export function handleBtns() {
  const handleSidabar = document.getElementById("handleSidebar");
  handleSidabar.addEventListener("click", () => {
    handleHeadlineBtn();
  });
}
