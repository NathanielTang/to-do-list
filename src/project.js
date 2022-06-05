export class Project {
    constructor(name) {
        this.name = name
    }
}


export const addProjectBtn = (() => {

const btn = document.getElementById('addProject')

btn.addEventListener('click', addProject)

function addProject() {
    console.log('hello project')
    //dom stuff
}

})

