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

function PriorityButton(priority){

    function incrementPriority(){
        priority++;
        if(priority > 2){
            priority = 0;
        }
        return priority;
    }

    function createButton(){
        let createdButton = document.createElement('button');
        updateButton(createdButton);
        createdButton.id = 'priority-button';
        createdButton.addEventListener('click', function(){
            priority = incrementPriority();
            updateButton(createdButton);
        })
        return createdButton;
}

    function updateButton(button){
        let bgColors = ['green', 'yellow', 'red'];
        let priorityLabels = ['Low', 'Medium', 'High'];
        button.style.backgroundColor = bgColors[priority];
        button.innerHTML = priorityLabels[priority];
    }

    function getPriority(){
        return priority;
    }

    return { createButton, getPriority };

}

export { Project, Task, PriorityButton };