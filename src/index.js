import { Menu } from './menu';
import { Project, Task } from './objects';

function initiateMenu(){
    const menu = Menu();
    menu.menuButtonFunctionality();
    menu.addProject();
    let defaultProject = new Project('Default Project');
    menu.projects.push(defaultProject);
    menu.updateMenu();
    let menuContent = document.querySelector('#menu-content');
    if(menuContent.children.length > 0){
        menuContent.children[0].children[0].click();
    }
}
initiateMenu();