export function createContent(array) {
    const content = document.getElementById('content')
   
   array.forEach((element) => {
    const title = element.title;
    const description = element.description;
    const dueDate = element.dueDate;
    const priority = element.priority;
    const completed = element.completed;

    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task')
    content.appendChild(taskDiv)

    const completedSpot = document.createElement('input');
    completedSpot.setAttribute("type", "checkbox");
    const titleSpot = document.createElement('p');
    const descriptionSpot = document.createElement('p');
    const dueDateSpot = document.createElement('p');
    const prioritySpot = document.createElement('p');
    
    
    const appendChildArray = [];
    appendChildArray.push(completedSpot, titleSpot, descriptionSpot, dueDateSpot, prioritySpot )
    appendChildArray.forEach((element) => {
        taskDiv.appendChild(element)
    })

    titleSpot.textContent = title;
    descriptionSpot.textContent = description;
    dueDateSpot.textContent = dueDate;


    console.log(title, description, dueDate, priority, completed)
   });
    
}

// var checkbox = document.createElement('input');
// checkbox.type = "checkbox";
// checkbox.name = "name";
// checkbox.value = "value";
// checkbox.id = "id";

// var label = document.createElement('label')
// label.htmlFor = "id";
// label.appendChild(document.createTextNode('text for label after checkbox'));

// container.appendChild(checkbox);
// container.appendChild(label);