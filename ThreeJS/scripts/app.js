import { Experience } from './experience/experience';

import { MainScene } from './experience/scenes/mainScene';


document.addEventListener('keydown', (event) => {
	if (event.key === 'd' || event.key === 'D') {
		document.querySelectorAll('*').forEach(el => {
			el.classList.toggle('show-borders');
		});
	}
});



const experience = new Experience();
const mainScene = new MainScene();

// Will need to be in a scene manager class
mainScene.onEnter()

experience.renderer.instance.setAnimationLoop((time) => {
	mainScene.loop(time);
});