import "./style.css";
import { Task } from "./task-class";
import { render, createContent, createSidebar } from "./DOM";
import { Project, addProjectBtn } from "./project";

//test
const firstTask = new Task(
  "titleaaa",
  "descriptionaaa",
  "02-22-22",
  "prio",
  "project: m"
);
const secondTask = new Task("bbb", "bbb", "01-03-17", "prio", "project: 2");
const thirdTask = new Task("ccc", "ccc", "03-12-21", "prio", "project: d");

const defaultProject = new Project("all");
const firstProject = new Project("project: m");
const secondProject = new Project("project: 2");
const thirdProject = new Project("project: d");

firstTask.markComplete();

//array

const taskArray = [];
const projectArray = [];

taskArray.push(firstTask, secondTask, thirdTask);
projectArray.push(defaultProject);
projectArray.push(firstProject, secondProject, thirdProject);

render(taskArray);
createSidebar(projectArray);

//add task
function addTask(title, description, dueDate, priority, project) {
  //function that uses task class to add new classes
  const newTask = new Task(title, description, dueDate, priority, project);
  taskArray.push(newTask);

  render(taskArray);
  //render
  //add new input
}
//add project

export function addProject() {
  console.log("hello project");
  const projectName = window.prompt('Enter project name', 'New Project')
  //learn how to do popup thing from video
  const newProject = new Project(projectName);
  projectArray.push(newProject);
  //dom stuff
  createSidebar(projectArray);
}

//render

export function switchToProject() {
  const name = this.textContent;
  console.log(name);
  render(taskArray, name);
}
