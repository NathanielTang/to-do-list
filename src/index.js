import "./style.css";
import { Task } from "./task-class";
import { render, createContent, createSidebar, taskInput } from "./DOM";
import { Project, addProjectBtn, closePopup } from "./project";
import { getToday } from "./date";

//test
const firstTask = new Task(
  "Read",
  "Continue reading book from chapter ...",
  "02-22-22",
  "Reading"
);
const secondTask = new Task("Gym", "LEG DAY. Hamstring curls; Bulgarian Split Squats (drop set), Romanian Deadlifts, Leg press, Calf Raises", "06-14-22", "Health");
const thirdTask = new Task(
  "Meditate",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque voluptatibus error ratione, laborum autem ex tempora fugit. Assumenda dicta ratione vero optio fuga! Officia, odit exercitationem. Expedita culpa, nostrum sunt amet accusamus maxime vitae nulla et recusandae aperiam doloremque eius ab velit tempore quae, illum voluptas deleniti. Cum explicabo perferendis possimus dolore hic nisi deserunt impedit nam maiores autem.",
  "06-14-22",
  "Health"
);
console.log(secondTask.project, firstTask.project, thirdTask.project)
const defaultProject = new Project("All");
const firstProject = new Project("Reading");
const secondProject = new Project("Health");
// const thirdProject = new Project("project: d");

firstTask.markComplete();

//array

const taskArray = [];
const projectArray = [];

taskArray.push(firstTask, secondTask, thirdTask);
projectArray.push(defaultProject);
projectArray.push(firstProject, secondProject);

render(taskArray);
createSidebar(projectArray);

//add task
export function addTask(
  title = "New task",
  description,
  dueDate,
  project = "All"
) {
  if (dueDate === "") {
    const today = getToday();
    console.log(today);
    const newTask = new Task(title, description, today, project);
    taskArray.push(newTask);
  } else {
    const newTask = new Task(title, description, dueDate, project);
    taskArray.push(newTask);
  }

  render(taskArray);
  
 

  checkProjectExists(project);
}
//add project

export function addProject(name) {
  const newProject = new Project(name);
  projectArray.push(newProject);
  //dom stuff
  createSidebar(projectArray);
}

//render

export function switchToProject() {
  const name = this.textContent;
  render(taskArray, name);
}

function checkProjectExists(project) {
  let check = "a";
  projectArray.forEach((Project) => {
    if (Project.name === project) {
      check = "b";
      return;
    }
  });

  if (check === "a") {
    addProject(project);
  }
}
