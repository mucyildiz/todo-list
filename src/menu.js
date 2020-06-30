import { Project, Task } from './objects';


const Menu = () => {
    let formOpen = false;

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

    function addProjectToMenu(addedProject){
        let menuContent = document.getElementById('menu-content');

        let projectDiv = document.createElement('div');
        projectDiv.className = 'menu-project';

        let projectOptions = document.createElement('div');
        projectOptions.className = 'menu-project-options';

        let projectTitle = document.createElement('h4');
        projectTitle.className = 'menu-project-title';
        projectTitle.innerHTML = addedProject.name;
        projectDiv.appendChild(projectTitle);

        let projectEdit = document.createElement('img');
        projectEdit.className = 'menu-project-edit';
        projectEdit.src = 'styling/images/edit.png';
        projectEdit.addEventListener('click', function(){
            editProject(projectEdit);
        });
        projectOptions.appendChild(projectEdit);

        let projectDelete = document.createElement('img');
        projectDelete.className = 'menu-project-del';
        projectDelete.src = 'styling/images/trash.png';
        projectDelete.addEventListener('click', function(e){
            e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
        })
        projectOptions.appendChild(projectDelete);

        projectDiv.appendChild(projectOptions);
        menuContent.appendChild(projectDiv);
        formOpen = false;
    }

    //isCreate is boolean (if false, then it's edit)
    function summonProjectForm(isCreate, editedProject = undefined){
        if(formOpen === true){
            return;
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
                submitForm(isCreate, editedProject);
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
        addProjectButton.addEventListener('click', summonProjectForm(true));
    }

    function editProject(editedProject){
        summonProjectForm(false, editedProject);
    }

    function submitForm(isCreate, editedProject = undefined){
        let submitProjectButton = document.getElementById('submit-project');
        let projectName = document.querySelector('#project-name').value;
        if(isCreate){
            if(!(projectName == '')){
                let addedProject = new Project(projectName)
                addProjectToMenu(addedProject);
                submitProjectButton.parentElement.parentElement.parentElement.removeChild(submitProjectButton.parentElement.parentElement);
            }
        }
        else{
            let editedProjectName = editedProject.parentElement.parentElement.childNodes[0];
            console.log(editedProjectName);
            editedProjectName.innerHTML = projectName;
            submitProjectButton.parentElement.parentElement.parentElement.removeChild(submitProjectButton.parentElement.parentElement);
        }
        formOpen = false;
    }



    return {menuButtonFunctionality, addProjectToMenu, addProject};

}

export { Menu };