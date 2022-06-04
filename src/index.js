import "./style.css";
import { task } from "./task-class";
import { createContent } from "./DOM";

//test
const firstTask = new task("titleaaa", "descriptionaaa", "02-22-22", "prio", "project; m");
const secondTask = new task("bbb", "bbb", "01-03-17", "prio", "project; m");
const thirdTask = new task("ccc", "ccc", "03-12-21", "prio", "project; m");

firstTask.markComplete();
firstTask.toProject("Project: L");

//array

const taskArray = [];

taskArray.push(firstTask, secondTask, thirdTask)

createContent(taskArray)


//add task
function addTask(title, description, dueDate, priority, project) {
  //function that uses task class to add new classes
  const newTask = new task(title, description, dueDate, priority, project);
}

//render

