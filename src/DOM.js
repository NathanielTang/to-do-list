export function createContent(array) {
    const content = document.getElementById('content')
   
   array.forEach((element) => {
    const title = element.title;
    const description = element.description;
    const dueDate = element.dueDate;
    const priority = element.priority;
    const completed = element.completed;

    console.log(title, description, dueDate, priority, completed)
   });
    
}