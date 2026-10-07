import * as THREE from 'three';


const DEFAULT_FOV = 75;
const NEAR = 0.1;
const FAR = 1000;


export class Camera {
    constructor(sizes) {
        this.sizes = sizes;

        this.instance = new THREE.PerspectiveCamera(DEFAULT_FOV, this.sizes.aspectRatio, NEAR, FAR);
        this.instance.position.z = 5;
    }

    update() {
        this.instance.aspect = this.sizes.aspectRatio;
	    this.instance.updateProjectionMatrix()
    }
}