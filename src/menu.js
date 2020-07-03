import { Project, Task } from './objects';
import { Interface } from './interface';


const Menu = () => {
    let formOpen = false;
    let projects = [];
    let defaultProject = new Project('Default Project');
    projects.push(defaultProject);
    if(typeof(Storage) !== 'undefined'){
        projects = (JSON.parse(window.localStorage.getItem('projects')));
    }
    updateMenu();
    const taskInterface = Interface();

    function menuButtonFunctionality(){
        let menuButton = document.getElementById('hamburger-menu');
        menuButton.addEventListener('click', function () {
            let menu = document.getElementById('menu')
            if(menu.style.display === 'none'){
                menu.style.display = 'block';
            }
            else{
                menu.style.display = 'none';
            }
        })
    }

    function clearMenuContent(){
        let menuContent = document.getElementById('menu-content');
        menuContent.innerHTML = '';
    }

    function convertProjectObject(project, isAllCategory = false){
        let tasksContainer = document.querySelector('#tasks-container');
        let menuContent = document.getElementById('menu-content');

        let projectDiv = document.createElement('div');
        projectDiv.className = 'menu-project';

        let projectOptions = document.createElement('div');
        projectOptions.className = 'menu-project-options';

        let projectTitle = document.createElement('h4');
        projectTitle.className = 'menu-project-title';
        projectTitle.innerHTML = project.name;
        projectTitle.addEventListener('click', function(e){
            let projectsArray = Array.from(e.target.parentElement.parentElement.children);
            let projectIndex = projectsArray.indexOf(e.target.parentElement);
            console.log(projectIndex);
            tasksContainer.style.display = 'block';
            taskInterface.populateInterface(project, projectIndex);
        })
        projectDiv.appendChild(projectTitle);

        let projectEdit = document.createElement('img');
        projectEdit.className = 'menu-project-edit';
        projectEdit.src = 'styling/images/edit.png';
        projectEdit.addEventListener('click', function(){
            editProject(projectEdit, project);
        });
        projectOptions.appendChild(projectEdit);

        let projectDelete = document.createElement('img');
        projectDelete.className = 'menu-project-del';
        projectDelete.src = 'styling/images/trash.png';
        projectDelete.addEventListener('click', function(e){
            let menuProjects = Array.from(menuContent.children);
            let projectIndex = menuProjects.indexOf(e.target.parentElement.parentElement);
            projects.splice(projectIndex, 1);
            window.localStorage.setItem('projects', JSON.stringify(projects));
            updateMenu();
            
        })
        projectOptions.appendChild(projectDelete);

        if(!isAllCategory){
            projectDiv.appendChild(projectOptions);
        }
        else if(isAllCategory){
            projectDiv.classList.add('all-projects');
        }

        return projectDiv;
    }

    function updateMenu(){
        window.localStorage.setItem('projects', JSON.stringify(projects));
        let menuContent = document.getElementById('menu-content');
        clearMenuContent();
        for(let project of projects){
            menuContent.appendChild(convertProjectObject(project));
        }
        formOpen = false;

    }

    //isCreate is boolean (if false, then it's edit)
    function summonProjectForm(isCreate, editedProjectObject = undefined){
        if(formOpen === true){
            return;
        }

        let menuContent = document.getElementById('menu-content');
        let projectsHeight = 0;
        if(isCreate){
            for(let project of menuContent.children){
                projectsHeight += project.clientHeight;
                //did - 25 because technically we could add another one but it went out of the screen
                if(projectsHeight > menuContent.clientHeight - 25){
                    alert('Max number of projects reached.');
                    return false;
                } 
            }
        }

        let container = document.querySelector('#container');

        let projectFormContainer = document.createElement('div');
        projectFormContainer.id = 'project-form-container';

        let projectForm = document.createElement('form');
        projectForm.id = 'project-form';
        projectForm.onsubmit = function(){return false};

        let projectName = document.createElement('input');
        projectName.setAttribute('type', 'text');
        projectName.setAttribute('name', 'project-name');
        projectName.setAttribute('required', isCreate);
        projectName.id = 'project-name';
        if(isCreate){
            projectName.placeholder = 'Project Name';
        }
        else if (!isCreate){
            projectName.value = editedProjectObject.name;
            projectName.placeholder = 'New Name';
        }
        
        projectForm.appendChild(projectName);

        let submitProjectButton = document.createElement('input');
        submitProjectButton.setAttribute('type', 'button');
        submitProjectButton.id = 'submit-project';
        //submitProjectButton.setAttribute('name', 'submit-project');
        if(isCreate){
            submitProjectButton.value = 'Create Project';
            submitProjectButton.addEventListener('click', function(){
                submitForm(isCreate);
            });
        }
        else if(!isCreate){
            submitProjectButton.value = 'Change Name';
            submitProjectButton.addEventListener('click', function(){
                submitForm(isCreate, editedProjectObject);
            });
        }
        projectName.addEventListener('keyup', function(e){
            if (e.keyCode === 13) {
                e.preventDefault();
                submitProjectButton.click();
            }
        })
        projectForm.appendChild(submitProjectButton);

        projectFormContainer.appendChild(projectForm);
        container.appendChild(projectFormContainer);
        formOpen = true;
    }

    function addProject(){
        let addProjectButton = document.getElementById('add-project');
        addProjectButton.addEventListener('click', function(){summonProjectForm(true)});
    }

    function editProject(editedProject, editedProjectObject){
        summonProjectForm(false, editedProjectObject);
    }

    function submitForm(isCreate, editedProjectObject = undefined){
        let submitProjectButton = document.getElementById('submit-project');
        let projectName = document.querySelector('#project-name').value;
        if(isCreate){
            if(!(projectName.trim() == '')){
                let addedProject = new Project(projectName);
                projects.push(addedProject);
                window.localStorage.setItem('projects', JSON.stringify(projects));
                updateMenu();
                submitProjectButton.parentElement.parentElement.parentElement.removeChild(submitProjectButton.parentElement.parentElement);
            }
        }
        else{
            if(!projectName.trim() == ''){
                editedProjectObject.name = projectName;
                window.localStorage.setItem('projects', JSON.stringify(projects));
                updateMenu();
                submitProjectButton.parentElement.parentElement.parentElement.removeChild(submitProjectButton.parentElement.parentElement);
            }
        }
        formOpen = false;
    }



    return {menuButtonFunctionality, addProject, projects, updateMenu};

}

export { Menu };