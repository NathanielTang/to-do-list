import './style.css';
import { task } from './task-class';


const test = document.createElement('p');
test.textContent = "hello, world"
test.classList.add('test')
document.body.appendChild(test)


const firstTask = new task ('aaa', 'aaa', '2', 'a', 'project; m')
console.log(firstTask)

firstTask.markComplete();
firstTask.toProject('Project: L')

console.log(firstTask)
