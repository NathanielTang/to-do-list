import { switchToProject } from "./index.js";

export function render(array, project = "all") {
  if (project === "all") {
    createContent(array);
  } else {
    const projectArray = [];
    array.forEach((element) => {
      if (element.project === project) {
        projectArray.push(element);
      }
      createContent(projectArray);
    });
  }
}

//content
export function createContent(array) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  array.forEach((element) => {
    const title = element.title;
    const description = element.description;
    const dueDate = element.dueDate;
    const priority = element.priority;
    const completed = element.completed;

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    content.appendChild(taskDiv);

    const completedSpot = document.createElement("input");
    completedSpot.setAttribute("type", "checkbox");
    const titleSpot = document.createElement("p");
    const descriptionSpot = document.createElement("p");
    const dueDateSpot = document.createElement("p");
    const prioritySpot = document.createElement("p");

    if (completed === "yes") {
      completedSpot.checked = true;
    }

    completedSpot.addEventListener("click", () => {
      if (completed === "yes") {
        element.completed = "no";
      }
      if (completed === "no") {
        element.completed = "yes";
      }
    });

    const appendChildArray = [];
    appendChildArray.push(
      completedSpot,
      titleSpot,
      descriptionSpot,
      dueDateSpot,
      prioritySpot
    );
    appendChildArray.forEach((element) => {
      taskDiv.appendChild(element);
    });

    titleSpot.textContent = title;
    descriptionSpot.textContent = description;
    dueDateSpot.textContent = dueDate;

    console.log(title, description, dueDate, priority, completed);
  });
}

//sidebar

export function createSidebar(array) {
  //array of the projects used to create sidebar. Add eventlistener to each div that calls on the
  // switchToProject() function.
  const sidebar = document.getElementById("sidebar-content");
  array.forEach((element) => {
    const projectDiv = document.createElement("div");
    projectDiv.textContent = element.name;
    projectDiv.classList.add("project");

    sidebar.appendChild(projectDiv);

    projectDiv.addEventListener("click", switchToProject);
  });
}
