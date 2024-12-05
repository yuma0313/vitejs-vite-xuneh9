import { Engine } from "@rendley/sdk";
import { ApplicationStore } from "../../../store/ApplicationStore";
export class SelectionWatcher {
    constructor() {
        this.element = null;
        this.isDragging = false;
        this.onMouseDown = () => {
            this.isDragging = true;
        };
        this.onMouseUp = (event) => {
            if (this.isDragging && this.element) {
                const [cursorX, cursorY] = this.getPositionFromEvent(event);
                const selectedClipId = Engine.getInstance().getDisplay().getClipIdByCursorPosition(cursorX, cursorY);
                ApplicationStore.setSelectedClipId(selectedClipId);
                this.isDragging = false;
            }
        };
    }
    static getInstance() {
        if (!SelectionWatcher.instance) {
            SelectionWatcher.instance = new SelectionWatcher();
        }
        return SelectionWatcher.instance;
    }
    init(element) {
        if (this.element) {
            this.element.removeEventListener("mousedown", this.onMouseDown);
            this.element.removeEventListener("mouseup", this.onMouseUp);
        }
        this.element = element;
        if (this.element) {
            this.element.addEventListener("mousedown", this.onMouseDown);
            this.element.addEventListener("mouseup", this.onMouseUp);
        }
    }
    destroy() {
        if (this.element) {
            this.element.removeEventListener("mousedown", this.onMouseDown);
            this.element.removeEventListener("mouseup", this.onMouseUp);
        }
        SelectionWatcher.instance = null; // Allow garbage collection
    }
    getPositionFromEvent(event) {
        if (!this.element)
            return [0, 0];
        const { offsetX, offsetY } = event;
        const ratio = Math.min(this.element.clientWidth / this.element.width, this.element.clientHeight / this.element.height);
        return [offsetX / ratio, offsetY / ratio];
    }
}
SelectionWatcher.instance = null;
