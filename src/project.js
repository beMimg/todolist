const projectContainer = document.querySelector("[data-projects]");

export const projects = [
  {
    id: 1,
    name: "Sss",
  },
  {
    id: 2,
    name: "ll",
  },
];

export function display() {
  projects.forEach((project) => {
    const projectElement = document.createElement("li");
    projectElement.dataset.projectId = project.id;
    projectElement.classList.add("defaultProject");
    projectElement.innerHTML = project.name;

    projectContainer.appendChild(projectElement);
  });
}
