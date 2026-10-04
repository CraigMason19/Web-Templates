import * as THREE from 'three';

// Can also do WebGPURenderer
// import * as THREE from 'three/webgpu';


export class Renderer {
    constructor(sizes) {
        this.sizes = sizes;
        this.canvas = document.getElementById("experience-canvas");

        this.init();
    }

    init() {      
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas, 
            antialias: true
        });

        this.update();
    }

    resize() {

    }

    update() {
        this.instance.setPixelRatio(this.sizes.pixelRatio);
        this.instance.setSize(this.sizes.width, this.sizes.height);
    }
}