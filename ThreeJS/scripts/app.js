import { Experience } from './experience/experience';

import { MainScene } from './experience/scenes/mainScene';


document.addEventListener('keydown', (event) => {
	if (event.key === 'd' || event.key === 'D') {
		document.querySelectorAll('*').forEach(el => {
			el.classList.toggle('show-borders');
		});
	}
});



// Will need to be in a scene manager class
const mainScene = new MainScene();

mainScene.onEnter()
mainScene.run();