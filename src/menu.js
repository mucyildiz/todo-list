import { Project, Task } from './objects';

export function menuButtonFunctionality(){
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
