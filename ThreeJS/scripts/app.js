import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { Sizes } from './core/sizes';

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


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, sizes.aspectRatio, 0.1, 1000 );
camera.position.z = 5;




const renderer = new THREE.WebGLRenderer({
	canvas: canvas, 
	antialias: true
});
renderer.setPixelRatio(sizes.pixelRatio);
renderer.setSize( sizes.width, sizes.height );


const controls = new OrbitControls( camera, renderer.domElement );
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
	camera.aspect = sizes.aspectRatio;
	camera.updateProjectionMatrix()
	
	// Update Renderer
	renderer.setPixelRatio(sizes.pixelRatio);
	renderer.setSize(sizes.width, sizes.height);
});


function update( time ) {
	cube.rotation.x = time / 2000;
	cube.rotation.y = time / 1000;

	controls.update();
 
	renderer.render( scene, camera );
}

function render( time ) {
 
}



renderer.setAnimationLoop( update );