import { Menu } from './menu';
import { Project, Task } from './objects';

const menu = Menu();
menu.menuButtonFunctionality();
let allProject = new Project('All Tasks');
menu.addProjectToMenu(allProject, true);
menu.addProject();
for(let i=0; i<21; i++){
    let project = new Project(i.toString());
    menu.addProjectToMenu(project);
}