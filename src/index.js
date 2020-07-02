import { Menu } from './menu';
import { Project, Task } from './objects';

const menu = Menu();
menu.menuButtonFunctionality();
menu.addProject();
let allTasks = new Project('All Tasks');
menu.projects.push(allTasks);
menu.updateMenu();