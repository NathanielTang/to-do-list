import { switchToProject, addTask } from "./index.js";

const content = document.getElementById("content");

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
    completedSpot.classList.add('checkbox')
    const titleSpot = document.createElement("p");
    const descriptionSpot = document.createElement("textarea");
    descriptionSpot.classList.add('description');
    descriptionSpot.setAttribute("rows", "3");
    descriptionSpot.setAttribute("cols", "100");


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

    descriptionSpot.addEventListener('focusout', ()=> {
        element.description = descriptionSpot.value;
    })

    const appendChildArray = [];
    appendChildArray.push(
      completedSpot,
      titleSpot,
      dueDateSpot,
      prioritySpot
    );
    appendChildArray.forEach((element) => {
      taskDiv.appendChild(element);
    });
    taskDiv.appendChild(descriptionSpot)
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
  sidebar.innerHTML = "";
  array.forEach((element) => {
    const projectDiv = document.createElement("div");
    projectDiv.textContent = element.name;
    projectDiv.classList.add("project");

    sidebar.appendChild(projectDiv);

    projectDiv.addEventListener("click", switchToProject);
  });
}


//task input
    //put this at the end of the render function so that the input is at the bottom 

export function taskInput() {
    const taskInputText = document.createElement('p');
    taskInputText.textContent = "Add a New Task";

    const inputDiv = document.createElement('div');
    inputDiv.classList.add('task', 'inputDiv');
    content.appendChild(inputDiv);

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', "text");
    titleInput.id = "titleInput";

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', "text");
    descriptionInput.id = "descriptionInput";
    
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', "date");
    dateInput.id = "dateInput";

    const projectInput = document.createElement('input');
    projectInput.setAttribute('type', "text");
    projectInput.id = "projectInput";

    const inputBtn = document.createElement('button');
    inputBtn.id = "inputBtn";
    inputBtn.textContent = 'Add Task';
    inputBtn.addEventListener('click', () => {
        addTask(titleInput.value, descriptionInput.value, dateInput.value, projectInput.value)
    })

    inputDiv.appendChild(taskInputText);
    inputDiv.appendChild(titleInput);
    inputDiv.appendChild(descriptionInput);
    inputDiv.appendChild(dateInput);
    inputDiv.appendChild(projectInput);
    inputDiv.appendChild(inputBtn);
}

