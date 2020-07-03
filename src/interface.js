import { Project, Task, PriorityButton } from './objects';
//import { initiateMenu } from './index';

const Interface = () => {
    let formOpen = false;

    function clearTasks(){
        let tasksContainer = document.querySelector('#tasks-container');
        tasksContainer.innerHTML = '';
    }

    function convertTask(task, project){
        let taskContainer = document.createElement('div');
        taskContainer.className = 'task-container';

        let taskProps = document.createElement('div');
        taskProps.className = 'task-props';

        let taskStatus = document.createElement('input');
        taskStatus.setAttribute('type', 'checkbox');
        taskStatus.className = 'task-status';

        let taskName = document.createElement('div');
        taskName.className = 'task-name';
        taskName.innerHTML = task.name;

        let taskDescription = document.createElement('div');
        taskDescription.className = 'task-description';
        taskDescription.innerHTML = task.description;

        let taskPriority = PriorityButton(task.priority);
        
        let taskDueDate = document.createElement('input');
        taskDueDate.setAttribute('type', 'date');
        taskDueDate.value = task.dueDate;
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
        editTask.addEventListener('click', function(e){
            let tasksArray = Array.from(e.target.parentElement.parentElement.parentElement.children).slice(2);
            let indexOfTask = tasksArray.indexOf(e.target.parentElement.parentElement);
            createTask(project, indexOfTask);
        })
        //TODO add edit task event listener. Will bring up form with old values already placed in
        //can get index from index of children of task container
        //use editTask from Task object to change values of task

        taskOptions.appendChild(deleteTask);
        taskOptions.appendChild(editTask);

        taskProps.appendChild(taskStatus);
        taskProps.appendChild(taskName);
        taskProps.appendChild(taskDescription);
        taskProps.appendChild(taskPriority.createButton());
        taskProps.appendChild(taskDueDate);

        taskContainer.appendChild(taskProps);
        taskContainer.appendChild(taskOptions);
        

        return taskContainer;
    }

    function populateInterface(project, projectIndex=undefined){
        clearTasks();

        if(projectIndex !== undefined){
            let projects = JSON.parse(window.localStorage.getItem('projects'));
            projects[projectIndex].taskArray = project.taskArray;
            console.log(projectIndex);
            window.localStorage.setItem('projects', JSON.stringify(projects));
        }

        let tasksContainer = document.querySelector('#tasks-container');
        
        let projectTitle = document.createElement('div');
        projectTitle.id = 'task-title';

        let taskHeader = document.createElement('div');
        taskHeader.id = 'task-header';

        let taskStatus = document.createElement('h3');
        taskHeader.appendChild(taskStatus);

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

        let clearProjectTasks = document.createElement('button');
        clearProjectTasks.id = 'add-task';
        clearProjectTasks.innerHTML = 'Clear Tasks';
        clearProjectTasks.addEventListener('click', function(){
            project.taskArray = [];
            populateInterface(project);
        })

        let addTaskButton = document.createElement('button');
        addTaskButton.id = 'add-task';
        addTaskButton.innerHTML = 'Add Task';
        addTaskButton.addEventListener('click', function(){
            let taskInterface = document.querySelector('#interface');
            if((tasksContainer.clientHeight + 100) > taskInterface.clientHeight){
                alert("Maxiumum number of tasks reached.");
                return false;
            }
            if(projectIndex === undefined){
                createTask(project);
            }
            else if(projectIndex !== undefined){
                createTask(project, undefined, projectIndex);
            }
        })

        let buttons = document.createElement('div');
        buttons.id = 'buttons';
        buttons.appendChild(clearProjectTasks);
        buttons.appendChild(addTaskButton);

        projectTitle.appendChild(projectName);
        projectTitle.appendChild(buttons);
        tasksContainer.appendChild(projectTitle);
        tasksContainer.appendChild(taskHeader);


        for(let task of project.taskArray){
            tasksContainer.appendChild(convertTask(task, project));
        }
    }

    function createTask(project, indexOfEdit = undefined, indexOfProject = undefined){
        if(formOpen === true){
            return false;
        }
        let container = document.querySelector('#container');
        let taskFormContainer = document.createElement('div');
        let taskForm = document.createElement('form');
        taskFormContainer.id = 'task-form-container';
        taskForm.id = 'task-form';
        taskForm.onsubmit = function(){return false};

        let taskName = document.createElement('input');
        taskName.setAttribute('type', 'text');
        taskName.placeholder = 'Name';
        taskName.id = 'task-name';
        taskName.classList.add('form-item');
        if(indexOfEdit !== undefined){
            taskName.value = project.taskArray[indexOfEdit].name;
        }
        taskForm.appendChild(taskName);

        let taskDescription = document.createElement('input');
        taskDescription.setAttribute('type', 'text');
        taskDescription.placeholder = 'Description';
        taskDescription.id = 'task-description';
        taskDescription.classList.add('form-item');
        if(indexOfEdit !== undefined){
            taskDescription.value = project.taskArray[indexOfEdit].description;
        }
        taskForm.appendChild(taskDescription);

        let taskDueDate = document.createElement('input');
        taskDueDate.setAttribute('type', 'date');
        taskDueDate.id = 'task-due-date';
        taskDueDate.classList.add('form-item');
        if(indexOfEdit !== undefined){
            taskDueDate.value = project.taskArray[indexOfEdit].dueDate;
        }
        taskForm.appendChild(taskDueDate);


        let taskPriority = PriorityButton(0);
        if(indexOfEdit !== undefined){
            let selectedTask = project.taskArray[indexOfEdit];
            let priority = selectedTask.priority;
            taskPriority = PriorityButton(priority);
        }
        taskForm.appendChild(taskPriority.createButton());

        let submitTask = document.createElement('input');
        submitTask.setAttribute('type', 'submit');
        submitTask.id = 'add-task-submit';
        submitTask.classList.add('form-item');
        submitTask.innerHTML = 'Add Task';

        submitTask.addEventListener('click', function(){
            if(indexOfEdit === undefined){
                let task = new Task(taskName.value, taskDescription.value, taskPriority.getPriority(), taskDueDate.value);
                project.taskArray.push(task);
                if(indexOfProject !== undefined){
                    populateInterface(project, indexOfProject);
                }
                else if(indexOfProject === undefined){
                    populateInterface(project);
                }
                submitTask.parentElement.parentElement.parentElement.removeChild(submitTask.parentElement.parentElement);
                formOpen = false;
            }
            else if(indexOfEdit !== undefined){
                let selectedTask = project.taskArray[indexOfEdit];
                selectedTask.editTask(taskName.value, taskDescription.value, taskPriority.getPriority(), taskDueDate.value);
                populateInterface(project);
                submitTask.parentElement.parentElement.parentElement.removeChild(submitTask.parentElement.parentElement);
                formOpen = false;
            }
        })

        taskForm.appendChild(submitTask);

        taskFormContainer.appendChild(taskForm);
        container.appendChild(taskFormContainer);
        formOpen = true;
    }
    return { populateInterface };

}

export { Interface };