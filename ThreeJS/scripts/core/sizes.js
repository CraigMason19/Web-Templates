export class Sizes {
    constructor() {
        this.init();
    }

    init() {
        this.resize()

        window.addEventListener("resize", () => {
            this.resize();
        });
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.aspectRatio = this.width / this.height;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    }
}