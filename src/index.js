import "./styles/homepage.css";
import "./styles/mainContent.css";
import "./styles/addForm.css";

import { loadPage } from "./modules/loadPage";

loadPage();

document.getElementById("dueDate").min = new Date().toISOString().split("T")[0];
document.getElementById("dueDate").value = new Date()
  .toISOString()
  .split("T")[0];
