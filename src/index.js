import { Menu } from './menu';
import { Project, Task } from './objects';

function initiateMenu(){
    const menu = Menu();
    menu.menuButtonFunctionality();
    menu.addProject();
    let menuContent = document.querySelector('#menu-content');
    if(menuContent.children.length > 0){
        menuContent.children[0].children[0].click();
    }
}
initiateMenu();