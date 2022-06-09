import {addProject} from './index.js' 

export class Project {
    constructor(name) {
        this.name = name
    }
}

const popup = document.getElementById('project-input-div');
const overlay = document.getElementById('overlay');

export function openPopup() {
    popup.classList.add('active')
}


const addProjectBtn = (() => {

const btn = document.getElementById('addProject')

btn.addEventListener('click', addProject)
btn.addEventListener('click', openPopup)

})();




