export function handleHeadlineBtn() {
  const sidebar = document.getElementById("sidebar");
  const main = document.querySelector("main");

  if (sidebar.style.width === "0px") {
    sidebar.style.width = "190px";
    main.style.marginLeft = "190px";
  } else {
    sidebar.style.width = "0px";
    main.style.marginLeft = "0px";
  }
}

export function handleProjectBtn() {
  const projectFormContainer = document.getElementById("projectFormContainer");
  if (projectFormContainer.style.visibility === "visible") {
    projectFormContainer.style.visibility = "hidden";
    projectFormContainer.style.opacity = "0";
    projectFormContainer.style.height = "0px";
  } else {
    projectFormContainer.style.visibility = "visible";
    projectFormContainer.style.opacity = "1";
    projectFormContainer.style.height = "100px";
  }
}

export function openTaskForm() {
  const taskFormContainer = document.querySelector(".task-form-container");
  taskFormContainer.style.visibility = "visible";
  taskFormContainer.style.opacity = "1";
}

export function closeTaskForm() {
  const taskFormContainer = document.querySelector(".task-form-container");
  taskFormContainer.style.visibility = "hidden";
  taskFormContainer.style.opacity = "0";
}

export function setMinAndValueToDueDate() {
  document.getElementById("dueDate").min = new Date()
    .toISOString()
    .split("T")[0];
  document.getElementById("dueDate").value = new Date()
    .toISOString()
    .split("T")[0];
}

export function formatDate(variable) {
  var date = new Date(variable);

  var year = date.toLocaleString("default", { year: "numeric" });
  var month = date.toLocaleString("default", { month: "2-digit" });
  var day = date.toLocaleString("default", { day: "2-digit" });

  return day + "-" + month + "-" + year;
}

export function openEditForm() {
  const taskFormContainer = document.querySelector(".edit-task-form-container");
  taskFormContainer.style.visibility = "visible";
  taskFormContainer.style.opacity = "1";
}

export function closeEditForm() {
  const taskFormContainer = document.querySelector(".edit-task-form-container");
  taskFormContainer.style.visibility = "hidden";
  taskFormContainer.style.opacity = "0";
}
