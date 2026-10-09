import * as THREE from 'three';

import { Experience } from '../experience';


export class BaseScene {
    constructor() {
        this.experience = new Experience();
        this.scene = new THREE.Scene();
    }

    resize() {}

    onEnter() {}

    onExit() {}

    update(time) {}

    render(time) {}

    run() {}
}