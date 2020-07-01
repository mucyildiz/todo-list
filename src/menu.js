import { Project, Task } from './objects';
import { Interface } from './interface';


const Menu = () => {
    let formOpen = false;
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

    //put in isAll because there will be a default project that contains every task;
    function addProjectToMenu(addedProject, isAllCategory = false){
        let menuContent = document.getElementById('menu-content');

        let projectDiv = document.createElement('div');
        projectDiv.className = 'menu-project';

        let projectOptions = document.createElement('div');
        projectOptions.className = 'menu-project-options';

        let projectTitle = document.createElement('h4');
        projectTitle.className = 'menu-project-title';
        projectTitle.innerHTML = addedProject.name;
        projectTitle.addEventListener('click', function(){
            taskInterface.populateInterface(addedProject);
        })
        projectDiv.appendChild(projectTitle);

        let projectEdit = document.createElement('img');
        projectEdit.className = 'menu-project-edit';
        projectEdit.src = 'styling/images/edit.png';
        projectEdit.addEventListener('click', function(){
            editProject(projectEdit, addedProject);
        });
        projectOptions.appendChild(projectEdit);

        let projectDelete = document.createElement('img');
        projectDelete.className = 'menu-project-del';
        projectDelete.src = 'styling/images/trash.png';
        projectDelete.addEventListener('click', function(e){
            e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
        })
        projectOptions.appendChild(projectDelete);

        if(!isAllCategory){
            projectDiv.appendChild(projectOptions);
        }
        else if(isAllCategory){
            projectDiv.classList.add('all-projects');
        }
        menuContent.appendChild(projectDiv);
        formOpen = false;
    }

    //isCreate is boolean (if false, then it's edit)
    function summonProjectForm(isCreate, editedProject = undefined, editedProjectObject = undefined){
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
            projectName.value = editedProject.parentElement.parentElement.childNodes[0].innerHTML;
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
                submitForm(isCreate, editedProject, editedProjectObject);
            });
        }
        projectName.addEventListener('keyup', function(e){
            if (event.keyCode === 13) {
                event.preventDefault();
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
        summonProjectForm(false, editedProject, editedProjectObject);
    }

    function submitForm(isCreate, editedProject = undefined, editedProjectObject = undefined){
        let submitProjectButton = document.getElementById('submit-project');
        let projectName = document.querySelector('#project-name').value;
        if(isCreate){
            if(!(projectName.trim() == '')){
                let addedProject = new Project(projectName)
                addProjectToMenu(addedProject);
                submitProjectButton.parentElement.parentElement.parentElement.removeChild(submitProjectButton.parentElement.parentElement);
            }
        }
        else{
            if(!projectName.trim() == ''){
                let editedProjectName = editedProject.parentElement.parentElement.childNodes[0];
                editedProjectName.innerHTML = projectName;
                editedProjectObject.name = projectName;
                taskInterface.populateInterface(editedProjectObject);
                submitProjectButton.parentElement.parentElement.parentElement.removeChild(submitProjectButton.parentElement.parentElement);
            }
        }
        formOpen = false;
    }



    return {menuButtonFunctionality, addProjectToMenu, addProject};

}

export { Menu };