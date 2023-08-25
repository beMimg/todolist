import { setMinAndValueToDueDate } from "./functions";
import { handleBtns } from "./handleBtns";
import { display } from "./project";

export function loadPage() {
  handleBtns();
  display();
  setMinAndValueToDueDate();
}
