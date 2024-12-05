import Moveable from "moveable";
class InteractivePlayhead {
    constructor(element, containerElement, listeners) {
        this.element = element;
        this.containerElement = containerElement;
        this.listeners = listeners;
    }
    mount() {
        this.moveable = new Moveable(this.containerElement, {
            target: this.element,
            className: "playhead__moveable",
            draggable: true,
            resizable: false,
            throttleResize: 0,
            throttleDrag: 0,
            origin: false,
            renderDirections: ["e", "w"],
        });
        this.moveable.on("drag", (event) => {
            var _a, _b;
            const [deltaX] = event.delta;
            (_b = (_a = this.listeners).onDrag) === null || _b === void 0 ? void 0 : _b.call(_a, deltaX);
        });
        this.moveable.on("dragEnd", () => {
            var _a, _b;
            (_b = (_a = this.listeners).onDragEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
    }
    dragStart(event) {
        var _a;
        (_a = this.moveable) === null || _a === void 0 ? void 0 : _a.dragStart(event, event.target);
    }
}
export { InteractivePlayhead };
