import { Menu } from './menu';
import { Project, Task } from './objects';

function initiateMenu(){
    const menu = Menu();
    menu.menuButtonFunctionality();
    menu.addProject();
    let allTasks = new Project('All Tasks');
    menu.projects.push(allTasks);
    menu.updateMenu();
    let tasksContainer = document.querySelector('#tasks-container');
    if(menu.projects[0].taskArray.length === 0){
        tasksContainer.style.display = 'none';
    }
    return { menu };
}


initiateMenu();

export { initiateMenu };