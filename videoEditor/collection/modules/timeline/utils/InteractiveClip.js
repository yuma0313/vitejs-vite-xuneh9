import Moveable from "moveable";
export var ResizeDirectionEnum;
(function (ResizeDirectionEnum) {
    ResizeDirectionEnum[ResizeDirectionEnum["LEFT"] = -1] = "LEFT";
    ResizeDirectionEnum[ResizeDirectionEnum["RIGHT"] = 1] = "RIGHT";
})(ResizeDirectionEnum || (ResizeDirectionEnum = {}));
class InteractiveClip {
    constructor(element, containerElement, options) {
        this.element = element;
        this.containerElement = containerElement;
        this.options = options;
        this.moveable = null;
    }
    mount(event, options) {
        var _a;
        if (this.moveable != null) {
            this.destroy();
        }
        this.moveable = new Moveable(this.containerElement, {
            target: this.element,
            className: "clip__moveable",
            draggable: true,
            resizable: (_a = options === null || options === void 0 ? void 0 : options.isResizeEnabled) !== null && _a !== void 0 ? _a : true,
            snappable: true,
            snapDirections: { top: true, left: true, bottom: true, right: true },
            elementGuidelines: options === null || options === void 0 ? void 0 : options.elementGuidelines,
            isDisplaySnapDigit: false,
            throttleResize: 0,
            throttleDrag: 0,
            origin: false,
            renderDirections: ["e", "w"],
        });
        this.moveable.on("click", () => {
            var _a, _b;
            (_b = (_a = this.options).onClick) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
        this.moveable.on("resizeStart", (event) => {
            var _a, _b;
            (_b = (_a = this.options).onResizeStart) === null || _b === void 0 ? void 0 : _b.call(_a, event.clientX);
        });
        this.moveable.on("resize", (event) => {
            var _a, _b, _c;
            const directionX = (_a = event.direction) === null || _a === void 0 ? void 0 : _a[0];
            const direction = directionX === -1 ? ResizeDirectionEnum.LEFT : ResizeDirectionEnum.RIGHT;
            (_c = (_b = this.options).onResize) === null || _c === void 0 ? void 0 : _c.call(_b, event.clientX, direction);
        });
        this.moveable.on("resizeEnd", (payload) => {
            var _a, _b, _c, _d, _e;
            const lastEvent = payload.lastEvent;
            if (lastEvent == null) {
                return;
            }
            const directionX = (_a = lastEvent.direction) === null || _a === void 0 ? void 0 : _a[0];
            if (directionX == null) {
                return;
            }
            const direction = directionX === -1 ? ResizeDirectionEnum.LEFT : ResizeDirectionEnum.RIGHT;
            const distance = (_c = (_b = lastEvent.dist) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : 0;
            (_e = (_d = this.options).onResizeEnd) === null || _e === void 0 ? void 0 : _e.call(_d, direction, distance);
        });
        let isDragging = false;
        this.moveable.on("dragEnd", (event) => {
            var _a, _b, _c;
            if (((_a = event.lastEvent) === null || _a === void 0 ? void 0 : _a.translate) == null) {
                return;
            }
            (_c = (_b = this.options).onDragEnd) === null || _c === void 0 ? void 0 : _c.call(_b, event.clientX, event.clientY);
            isDragging = false;
        });
        this.moveable.on("drag", (event) => {
            var _a, _b, _c, _d;
            // dragStart triggers before onClick
            // and this workaround makes sure the event has actually been dragged and not clicked
            if (!isDragging) {
                (_b = (_a = this.options).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, event.clientX, event.clientY);
                isDragging = true;
            }
            (_d = (_c = this.options).onDrag) === null || _d === void 0 ? void 0 : _d.call(_c, event.clientX, event.clientY);
        });
        if (event != null) {
            this.moveable.dragStart(event, event.target);
        }
    }
    destroy() {
        var _a;
        (_a = this.moveable) === null || _a === void 0 ? void 0 : _a.destroy();
        this.moveable = null;
    }
}
export { InteractiveClip };
