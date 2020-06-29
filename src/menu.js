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

    function summonProjectForm(){
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
        projectName.setAttribute('required', true);
        projectName.id = 'project-name';
        projectForm.appendChild(projectName);

        let submitProjectButton = document.createElement('input');
        submitProjectButton.setAttribute('type', 'submit');
        submitProjectButton.id = 'submit-project';
        //submitProjectButton.setAttribute('name', 'submit-project');
        submitProjectButton.value = 'Create Project';
        submitProjectButton.addEventListener('click', function(){
            let projectName = document.querySelector(`[name="project-name"]`).value;
            if(!(projectName == '')){
                let addedProject = new Project(projectName)
                addProjectToMenu(addedProject);
                submitProjectButton.parentElement.parentElement.style.display = 'none';
                formOpen = false;
            }
        })
        projectForm.appendChild(submitProjectButton);

        projectFormContainer.appendChild(projectForm);
        container.appendChild(projectFormContainer);
        formOpen = true;
    }

    function addProject(){
        let addProjectButton = document.getElementById('add-project');
        addProjectButton.addEventListener('click', summonProjectForm);
    }




    return {menuButtonFunctionality, addProjectToMenu, addProject};

}

export { Menu };