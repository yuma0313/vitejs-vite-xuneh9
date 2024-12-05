import { makeAutoObservable } from "mobx";
class ContextMenuStoreInstance {
    constructor() {
        this.position = null;
        this.options = [];
        makeAutoObservable(this);
    }
    show(x, y, options) {
        this.position = { x, y };
        this.options = options;
    }
    hide() {
        this.position = null;
    }
    reset() {
        this.position = null;
        this.options = [];
    }
}
const ContextMenuStore = new ContextMenuStoreInstance();
export { ContextMenuStore };
