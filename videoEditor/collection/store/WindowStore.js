import { makeAutoObservable } from "mobx";
class WindowStoreInstance {
    constructor() {
        this.resolution = [window.innerWidth, window.innerHeight];
        this.canvasResolution = [0, 0];
        makeAutoObservable(this);
    }
    setResolution(resolution) {
        this.resolution = resolution;
    }
    setCanvasResolution(resolution) {
        this.canvasResolution = resolution;
    }
    reset() {
        this.resolution = [window.innerWidth, window.innerHeight];
        this.canvasResolution = [0, 0];
    }
}
const WindowStore = new WindowStoreInstance();
export { WindowStore };
