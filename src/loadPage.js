import { handleBtns } from "./handleBtns";
import { display } from "./project";

const projectContainer = document.querySelector("[data-projects]");

export const projects = [];

export function display() {
  clearElement(projectContainer);
  projects.forEach((project) => {
    const projectElement = document.createElement("li");
    projectElement.dataset.projectId = project.id;
    projectElement.classList.add("defaultProject");
    projectElement.innerHTML = project.name;

    projectContainer.appendChild(projectElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function loadPage() {
  handleBtns();
  display();
}
