import { Menu } from './menu';
import { Project, Task } from './objects';

const menu = Menu();
menu.menuButtonFunctionality();
let ourProject = new Project('Borpey');
menu.addProjectToMenu(ourProject);
let projectTwo = new Project('Chorpey');
menu.addProjectToMenu(projectTwo);
menu.addProject();