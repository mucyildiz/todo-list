import { Project, Task, PriorityButton } from './objects';
import { Menu } from './menu';



const Interface = () => {

    function clearTasks(){
        let tasksContainer = document.querySelector('#tasks-container');
        tasksContainer.innerHTML = '';
    }

    function convertTask(task, project){
        let taskContainer = document.createElement('div');
        taskContainer.className = 'task-container';

        let taskProps = document.createElement('div');
        taskProps.className = 'task-props';

        let taskName = document.createElement('div');
        taskName.className = 'task-name';
        taskName.innerHTML = task.name;

        let taskDescription = document.createElement('div');
        taskDescription.className = 'task-description';
        taskDescription.innerHTML = task.description;

        //priority here
        let taskPriority = PriorityButton(task.priority);
        

        let taskDueDate = document.createElement('input');
        taskDueDate.setAttribute('type', 'date');
        taskDueDate.className = 'task-duedate';

        let taskOptions = document.createElement('div');
        taskOptions.className = 'task-options';

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

        let editTask = document.createElement('img');
        editTask.src = 'styling/images/edit.png';
        editTask.className = 'menu-project-edit';
        taskOptions.appendChild(deleteTask);
        taskOptions.appendChild(editTask);

        taskProps.appendChild(taskName);
        taskProps.appendChild(taskDescription);
        taskProps.appendChild(taskPriority.createButton());
        taskProps.appendChild(taskDueDate);

        taskContainer.appendChild(taskProps);
        taskContainer.appendChild(taskOptions);
        

        return taskContainer;
    }

    function populateInterface(project){
        console.log(project);
        clearTasks();

        let tasksContainer = document.querySelector('#tasks-container');
        
        let projectTitle = document.createElement('div');
        projectTitle.id = 'task-title';

        let taskHeader = document.createElement('div');
        taskHeader.id = 'task-header';

        let taskTitle = document.createElement('h3');
        taskTitle.innerHTML = 'Task';
        taskHeader.appendChild(taskTitle);

        let taskDesc = document.createElement('h3');
        taskDesc.innerHTML = "Description";
        taskHeader.appendChild(taskDesc);

        let taskPriority = document.createElement('h3');
        taskPriority.innerHTML = "Priority";
        taskHeader.appendChild(taskPriority);

        let taskDue = document.createElement('h3');
        taskDue.innerHTML = 'Due Date';
        taskHeader.appendChild(taskDue);


        let projectName = document.createElement('h2');
        projectName.innerHTML = project.name;
        projectName.id = 'interface-project-name';

        let addTaskButton = document.createElement('button');
        addTaskButton.id = 'add-task';
        addTaskButton.innerHTML = 'Add Task';
        addTaskButton.addEventListener('click', function(){
            createTask(project);
        })

        projectTitle.appendChild(projectName);
        projectTitle.appendChild(addTaskButton);
        tasksContainer.appendChild(projectTitle);
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
        
        //priority here
        let taskPriority = PriorityButton(0);
        taskForm.appendChild(taskPriority.createButton());

        let taskDueDate = document.createElement('input');
        taskDueDate.setAttribute('type', 'date');
        taskDueDate.id = 'task-due-date';
        taskForm.appendChild(taskDueDate);

        let submitTask = document.createElement('button');
        submitTask.id = 'add-task-submit';
        submitTask.innerHTML = 'Add Task';

        submitTask.addEventListener('click', function(){
            let task = new Task(taskName.value, taskDescription.value, taskPriority.getPriority(), taskDueDate.value);
            project.taskArray.push(task);
            populateInterface(project);
            submitTask.parentElement.parentElement.parentElement.removeChild(submitTask.parentElement.parentElement);
        })

        taskForm.appendChild(submitTask);

        taskFormContainer.appendChild(taskForm);
        container.appendChild(taskFormContainer);
    }
    return { populateInterface };

}

export { Interface };