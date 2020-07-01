function Project(name){
    this.name = name;
    this.taskArray = [];
    this.editName = function(newName){
        this.name = newName;
    }
    this.addTask = function(task){
        this.taskArray.push(task);
    }
}

function Task(name, description, priority, dueDate){
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;

    this.editTask = function(newName, newDescription, newPriority, newDueDate){
        this.name = newName;
        this.description = newDescription;
        this.priority = newPriority;
        this.dueDate = newDueDate;
    }
}

export { Project, Task };