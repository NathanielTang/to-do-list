import {addProject} from './index.js' 

export class Project {
    constructor(name) {
        this.name = name
    }
}


const addProjectBtn = (() => {

const btn = document.getElementById('addProject')

btn.addEventListener('click', addProject)

})();


// function addProject(name) {
//     console.log('hello project')
//     const newProject = new Project(name);
    
//     //dom stuff
// }