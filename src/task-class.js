export class Task {
    // constructor(title, description, dueDate, priority, project) {
    //     this.title = title;
    //     this.description = description;
    //     this.dueDate = dueDate;
    //     this.priority = priority;
    //     this.project = project;
    //     this.completed = "no";
    // }
    constructor(title, description, dueDate, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.project = project;
        this.completed = "no";
    }

    markComplete() {
        if (this.completed === "no") {
            return this.completed = "yes";
        }
        if (this.completed === "yes") {
            return this.completed = "no";
        }
    }

    toProject(project) {
        this.project = project;
    }
}