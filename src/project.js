const projectForm = document.querySelector("[data-new-project-form");

projectForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const projectInput = document.querySelector("[data-new-project-input]").value;
  if (projectInput == null || projectInput === " ") return;
  const project = createProject(projectInput);
  projects.push(project);
  display();
  projectForm.reset();
});

function createProject(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
}
