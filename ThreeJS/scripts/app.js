import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { Sizes } from './core/sizes';
import { Camera } from './core/camera';

document.addEventListener('keydown', function(event) {
	if (event.key === 'd' || event.key === 'D') {
		document.querySelectorAll('*').forEach(el => {
			el.classList.toggle('show-borders');
		});
	}
});








const canvas = document.getElementById("experience-canvas")
console.log(canvas)

const sizes = new Sizes();


const camera = new Camera(sizes);

const scene = new THREE.Scene();





const renderer = new THREE.WebGLRenderer({
	canvas: canvas, 
	antialias: true
});
renderer.setPixelRatio(sizes.pixelRatio);
renderer.setSize( sizes.width, sizes.height );


const controls = new OrbitControls(camera.instance, renderer.domElement );
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.update();



// document.body.appendChild( renderer.domElement );







const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xfFF } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );






window.addEventListener("resize", () => {
	// Update Camera
	camera.update();

	
	// Update Renderer
	renderer.setPixelRatio(sizes.pixelRatio);
	renderer.setSize(sizes.width, sizes.height);
});


function update( time ) {
	cube.rotation.x = time / 2000;
	cube.rotation.y = time / 1000;

	controls.update();
 
	renderer.render( scene, camera.instance );
}

function render( time ) {
 
}



renderer.setAnimationLoop( update );