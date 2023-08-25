const projectContainer = document.querySelector("[data-projects]");
const projectForm = document.querySelector("[data-new-project-form");
const projectInput = document.querySelector("[data-new-project-input]");
const deleteProject = document.querySelector("[data-delete-project");
const tasksContainer = document.querySelector("[data-tasks-container]");
const taskProjectTitle = document.querySelector("[data-task-project-title]");
const tasksRemaining = document.querySelector("[data-tasks-remaining]");
const allTasks = document.querySelector("[data-all-tasks]");
const taskTemplate = document.querySelector("#task-template");

const LOCAL_STORAGE_PROJECT_KEY = "task.projects";
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = "task.selectedProjectId";
let projects =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
let selectedProjectId = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
);

deleteProject.addEventListener("click", (e) => {
  projects = projects.filter((project) => project.id !== selectedProjectId);
  selectedProjectId = null;
  saveAndDisplay();
});

projectContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedProjectId = e.target.dataset.projectId;
    saveAndDisplay();
  }
});

projectForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const projectName = projectInput.value;
  if (projectName == null || projectName === " ") return;
  const project = createProject(projectName);
  projects.push(project);
  saveAndDisplay();
  projectForm.reset();
});

function createProject(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
}

export function display() {
  clearElement(projectContainer);
  displayProjects();
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  if (selectedProjectId == null) {
    tasksContainer.style.display = "none";
  } else {
    tasksContainer.style.display = "";
  }
  taskProjectTitle.innerHTML = selectedProject.name;
  projectRemainingTasks(selectedProject);
  clearElement(allTasks);
  displayTasks(selectedProject);
}

function displayTasks(selectedProject) {
  selectedProject.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector("input");
    checkbox.id = task.id;
    checkbox.checked = task.complete;
    const label = taskElement.querySelector("label");
    label.htmlFor = task.id;
    label.append(task.name);
    const priority = taskElement.querySelector(".priority");
    priority.append(task.priority);
    const dueDate = taskElement.querySelector(".dueDate");
    dueDate.append(task.dueDate);
    allTasks.appendChild(taskElement);
  });
}

function projectRemainingTasks(selectedProject) {
  const incompleteTasksCount = selectedProject.tasks.filter(
    (task) => !task.complete
  ).length;
  const taskString = incompleteTasksCount === 1 ? "task" : "tasks";
  tasksRemaining.innerHTML = `${incompleteTasksCount} ${taskString} remaining
  `;
}

function displayProjects() {
  projects.forEach((project) => {
    const projectElement = document.createElement("li");
    projectElement.dataset.projectId = project.id;
    projectElement.classList.add("defaultProject");
    projectElement.innerHTML = project.name;
    if (project.id === selectedProjectId) {
      projectElement.classList.add("active-project");
    }

    projectContainer.appendChild(projectElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
  localStorage.setItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
    selectedProjectId
  );
}

function saveAndDisplay() {
  save();
  display();
}
