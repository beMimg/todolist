# todolist

TodoList App Readme
This TodoList app is a simple web-based application that allows you to create and manage tasks organized by projects. You can create multiple projects, each with its own list of tasks. Tasks can have names, priorities, due dates, and completion status. This readme file will provide you with an overview of how to use the app and understand its code structure.

![Screenshot from 2023-09-05 23-31-25](https://github.com/beMimg/todolist/assets/126000960/cde8522d-5c1f-4542-ac55-fe3278e09848)


Features
Create and manage multiple projects.
Add tasks to specific projects.
Assign task names, priorities, and due dates.
Mark tasks as complete or incomplete.
Edit task properties.
Delete projects and tasks.
Persist data using local storage.
Getting Started


Usage
Adding a Project
Enter a project name in the "Create a New Project" input field.
Click the "Create Project" button or press Enter.
Your new project will appear in the list on the left.
Selecting a Project
Click on a project in the list on the left to select it.
The selected project's name will be displayed at the top of the main content area.
Adding a Task
With a project selected, enter a task name, select a priority, and specify a due date in the form at the top of the main content area.
Click the "Add Task" button or press Enter.
The task will be added to the project's task list.
Editing a Task
To edit a task, click the "Edit" button next to the task.
Update the task name, priority, or due date in the edit form.
Click the "Save" button to save your changes.
Marking a Task as Complete
Check the checkbox next to a task to mark it as complete.
Uncheck the checkbox to mark it as incomplete.
Deleting a Project
Click the "Delete current project" button to delete the currently selected project.
This action will also delete all tasks associated with the project.
Deleting Completed Tasks
Click the "Delete Completed Tasks" button to delete all completed tasks in the selected project.
Viewing All Tasks
Click the "All Tasks" button to display all tasks in the selected project, including completed tasks.
Code Structure
The TodoList app is built using HTML, CSS, and JavaScript. Here's an overview of the code structure:

index.html: The main HTML file that defines the app's structure and layout.
style.css: The CSS file that provides styling for the app.
functions.js: The JavaScript file that contains the app's functionality.
task-template: The HTML template used to create task elements dynamically.
The JavaScript code is organized into functions and event listeners to handle various interactions with the app.

Local Storage
The app uses local storage to persist project and task data. Data is stored in the browser's local storage, allowing you to access your projects and tasks even after refreshing or closing the browser.

License
This TodoList app is open-source and available under the MIT License. You are free to use, modify, and distribute it as per the terms of the license.

Happy task management!
