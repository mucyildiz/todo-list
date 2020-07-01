import { Project, Task } from './objects';

const Interface = () => {

    function clearTasks(){
        let tasksContainer = document.querySelector('#tasks-container');
        tasksContainer.innerHTML = '';
    }

    function convertTask(task, project){
        let taskContainer = document.createElement('div');
        taskContainer.className = 'task-container';

        let taskName = document.createElement('div');
        taskName.className = 'task-name';
        taskName.innerHTML = task.name;

        let taskDescription = document.createElement('div');
        taskDescription.className = 'task-description';
        taskDescription.innerHTML = task.description;

        let taskPriority = document.createElement('div');
        taskPriority.className = 'task-priority';
        taskPriority.innerHTML = task.priority;

        let deleteTask = document.createElement('img');
        deleteTask.src = 'styling/images/trash.png';
        deleteTask.className = 'menu-project-del';
        deleteTask.addEventListener('click', function(e){
            let tasksContainer = document.querySelector('#tasks-container');
            let tasksArray = Array.from(tasksContainer.children);
            let taskIndex = (tasksArray.indexOf(e.target.parentElement) - 1);
            project.taskArray.splice(taskIndex, 1);
            populateInterface(project);
        })
        taskContainer.appendChild(deleteTask);

        let taskDueDate = document.createElement('div');
        taskDueDate.className = 'task-duedate';

        taskContainer.appendChild(taskName);
        taskContainer.appendChild(taskDescription);
        taskContainer.appendChild(taskPriority);
        taskContainer.appendChild(taskDueDate);

        return taskContainer;
    }

    function populateInterface(project){
        console.log(project);
        clearTasks();

        let tasksContainer = document.querySelector('#tasks-container');
        
        let taskHeader = document.createElement('div');
        taskHeader.id = 'task-header';

        let projectName = document.createElement('h2');
        projectName.innerHTML = project.name;
        projectName.id = 'interface-project-name';

        let addTaskButton = document.createElement('button');
        addTaskButton.id = 'add-task';
        addTaskButton.innerHTML = 'Add Task';
        addTaskButton.addEventListener('click', function(){
            createTask(project);
        })

        taskHeader.appendChild(projectName);
        taskHeader.appendChild(addTaskButton);
        tasksContainer.appendChild(taskHeader);

        for(let task of project.taskArray){
            tasksContainer.appendChild(convertTask(task, project));
        }
    }

    function createTask(project){
        let container = document.querySelector('#container');
        let taskFormContainer = document.createElement('div');
        let taskForm = document.createElement('form');
        taskFormContainer.id = 'task-form-container';
        taskForm.id = 'task-form';
        taskForm.onsubmit = function(){return false};

        let taskName = document.createElement('input');
        taskName.setAttribute('type', 'text');
        taskName.id = 'task-name';
        taskForm.appendChild(taskName);

        let taskDescription = document.createElement('input');
        taskDescription.setAttribute('type', 'text');
        taskDescription.id = 'task-description';
        taskForm.appendChild(taskDescription);

        let taskPriority = document.createElement('input');
        taskPriority.id = 'task-priority';
        taskPriority.setAttribute('type', 'number');
        taskForm.appendChild(taskPriority);

        let taskDueDate = document.createElement('div');
        taskDueDate.setAttribute('type', 'date');
        taskDueDate.id = 'task-due-date';
        taskForm.appendChild(taskDueDate);

        let submitTask = document.createElement('button');
        submitTask.id = 'add-task';
        submitTask.innerHTML = 'Add Task';



        submitTask.addEventListener('click', function(){
            let task = new Task(taskName.value, taskDescription.value, taskPriority.value, taskDueDate.value);
            project.taskArray.push(task);
            populateInterface(project);
        })

        taskForm.appendChild(submitTask);

        taskFormContainer.appendChild(taskForm);
        container.appendChild(taskFormContainer);


    }

    return { populateInterface };

}

export { Interface };