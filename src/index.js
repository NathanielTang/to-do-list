import "./style.css";
import { Task } from "./task-class";
import { render, createContent, createSidebar, taskInput } from "./DOM";
import { Project, addProjectBtn , closePopup} from "./project";
import { dddd } from "./input-logic";

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
export function addTask(title, description, dueDate, project) {
  //function that uses task class to add new classes
  const newTask = new Task(title, description, dueDate, project);
  taskArray.push(newTask);

  render(taskArray);
  //add new input
  taskInput();
  
checkProjectExists(project)
  
}
//add project

export function addProject(name) {
  const newProject = new Project(name);
  projectArray.push(newProject);
  //dom stuff
  createSidebar(projectArray);
}

//render
function test(project) {
    const testing = checkProjectExists(project)
    console.log('does it exist' + testing)
}
export function switchToProject() {
  const name = this.textContent;
  console.log(name);
  render(taskArray, name);
}

// function checkProjectExists(project) {
//     projectArray.forEach(Project => {
//         console.log('a' + Project, 'b' + Project.name, 'c' + project)
//         if (Project.name === project) {
//             console.log('fired')
//             return true
//         } 
//       })
// }
function checkProjectExists(project) {
    let check = 'a';
    projectArray.forEach(Project => {
        if (Project.name === project) {
            check = 'b'
            return
        } 
      })

    if (check === 'a') {
        addProject(project)
    }
}

taskInput();