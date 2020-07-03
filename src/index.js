import { Menu } from './menu';
import { Project, Task } from './objects';

function initiateMenu(){
    const menu = Menu();
    menu.menuButtonFunctionality();
    menu.addProject();
    let defaultProject = new Project('Default Project');
    menu.projects.push(defaultProject);
    menu.updateMenu();
    let tasksContainer = document.querySelector('#tasks-container');
    if(menu.projects[0].taskArray.length === 0){
        tasksContainer.style.display = 'none';
    }
}
initiateMenu();