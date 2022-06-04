import "./style.css";
import { task } from "./task-class";
import { createContent } from "./DOM";

//test
const firstTask = new task("aaa", "aaa", "2", "a", "project; m");
const secondTask = new task("bbb", "bbb", "1", "b", "project; m");
const thirdTask = new task("ccc", "ccc", "3", "c", "project; m");



firstTask.markComplete();

firstTask.toProject("Project: L");

console.log(firstTask);
//array
const taskArray = [];

taskArray.push(firstTask, secondTask, thirdTask)

createContent(taskArray)


//task
function addTask(title, description, dueDate, priority, project) {
  //function that uses task class to add new classes
  const newTask = new task(title, description, dueDate, priority, project);
}

//render
