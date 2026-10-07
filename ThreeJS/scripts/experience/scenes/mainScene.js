import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { randomColor } from '../../core/utils';
import { BaseScene } from '../scenes/baseScene';


export class MainScene extends BaseScene {
    constructor() {
        super();
        

        this.controls = new OrbitControls(this.experience.camera.instance, this.experience.renderer.instance.domElement );
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.update();

        const geometry = new THREE.BoxGeometry( 2, 2, 2 );

        const material = new THREE.MeshBasicMaterial( { color: 0xfFF } );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add( this.cube );
    }

    resize() {}

    onEnter() {
        console.log(this)
        document.addEventListener('keydown', (event) => {
            if (event.key === 'c' || event.key === 'C') {
                this.cube.material.color.setHex(randomColor());
            }
        });
    }

    onExit() {}

    update(time) { 
        this.cube.rotation.x = time / 2000;
        this.cube.rotation.y = time / 1000;

        this.controls.update();
    }

    render(time) { 
        this.experience.renderer.instance.render(this.scene, this.experience.camera.instance);
    }

    loop(time) 
    { 
        this.update(time);
        this.render(time);
    }
}