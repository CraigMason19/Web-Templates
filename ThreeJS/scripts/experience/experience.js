// web gl
// import * as THREE from 'three';

// web gpu
import * as THREE from 'three/webgpu';



import { Camera } from '../core/camera';
import { Renderer } from '../core/renderer';
import { Sizes } from '../core/sizes';
 

// Singleton
export class Experience {
    constructor() {
        if (Experience.instance) {
            return Experience.instance;
        }

        Experience.instance = this;

        this.canvasElement = document.getElementById("experience");
        this.sizes = new Sizes();
        this.camera = new Camera(this.sizes);
        this.renderer = new Renderer(this.sizes);

        window.addEventListener("resize", () => {
            this.resize();
        });
    }

    static getInstance() {
        return Experience.instance;
    }

    resize() {
        this.sizes.update();
        this.camera.update();
        this.renderer.update();
    }
}