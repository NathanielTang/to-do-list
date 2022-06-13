import "./style.css";
import { Task } from "./task-class";
import { render, createContent, createSidebar, taskInput } from "./DOM";
import { Project, addProjectBtn , closePopup} from "./project";
import { getToday } from "./date";

//test
const firstTask = new Task(
  "titleaaa",
  "descriptionaaa",
  "02-22-22",
  "prio",
  "project: m"
);
const secondTask = new Task("bbb", "bbb", "01-03-17", "prio", "project: 2");
const thirdTask = new Task("ccc", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque voluptatibus error ratione, laborum autem ex tempora fugit. Assumenda dicta ratione vero optio fuga! Officia, odit exercitationem. Expedita culpa, nostrum sunt amet accusamus maxime vitae nulla et recusandae aperiam doloremque eius ab velit tempore quae, illum voluptas deleniti. Cum explicabo perferendis possimus dolore hic nisi deserunt impedit nam maiores autem.", "03-12-21", "prio", "project: d");

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
export function addTask(title = "New task", description, dueDate, project = "all") {
  //function that uses task class to add new classes
  if (dueDate === "" ) {
      const today = getToday();
      console.log(today)
  const newTask = new Task(title, description, today, project); 
  taskArray.push(newTask);
  } else {
      const newTask = new Task(title, description, dueDate, project);
  taskArray.push(newTask);
    }

 

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

export function switchToProject() {
  const name = this.textContent;
  render(taskArray, name);
}


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