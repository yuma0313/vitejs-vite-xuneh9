import Moveable from "moveable";
import { COMPOSITION_CONTAINER_ID } from "../../../config/config";
import { getShadowRoot } from "../../../utils/dom/getShadowRoot";
export class InteractiveElement {
    constructor(element, listeners) {
        this.moveable = null;
        this.element = element;
        this.listeners = listeners;
        this.init();
    }
    init() {
        var _a, _b;
        const compositionContainer = getShadowRoot().getElementById(COMPOSITION_CONTAINER_ID);
        if (!compositionContainer) {
            return;
        }
        this.moveable = new Moveable(compositionContainer, {
            target: this.element,
            className: "visibility-hidden-important",
            draggable: true,
            resizable: true,
            rotatable: true,
            keepRatio: true,
            scalable: true,
            throttleResize: 0,
            throttleDrag: 0,
            throttleRotate: 0,
            throttleScale: 0,
            origin: false,
        });
        (_b = (_a = this.listeners) === null || _a === void 0 ? void 0 : _a.onUpdate) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.moveable.on("drag", (event) => {
            var _a, _b, _c, _d;
            const { translate: [x, y], } = event;
            (_b = (_a = this.listeners) === null || _a === void 0 ? void 0 : _a.onDrag) === null || _b === void 0 ? void 0 : _b.call(_a, x, y);
            (_d = (_c = this.listeners) === null || _c === void 0 ? void 0 : _c.onUpdate) === null || _d === void 0 ? void 0 : _d.call(_c);
        });
        this.moveable.on("resize", (event) => {
            var _a, _b, _c, _d, _e, _f, _g;
            const [deltaWidth, deltaHeight] = event.delta;
            const [directionX, directionY] = event.direction;
            directionX;
            if (directionY != 0 && ((_a = this.listeners) === null || _a === void 0 ? void 0 : _a.onScale) != null) {
                (_c = (_b = this.listeners) === null || _b === void 0 ? void 0 : _b.onScale) === null || _c === void 0 ? void 0 : _c.call(_b, deltaWidth, deltaHeight);
            }
            else {
                (_e = (_d = this.listeners) === null || _d === void 0 ? void 0 : _d.onResize) === null || _e === void 0 ? void 0 : _e.call(_d, deltaWidth, deltaHeight);
            }
            (_g = (_f = this.listeners) === null || _f === void 0 ? void 0 : _f.onUpdate) === null || _g === void 0 ? void 0 : _g.call(_f);
        });
        this.moveable.on("rotate", (event) => {
            var _a, _b, _c, _d;
            const rotation = event.rotation * (Math.PI / 180);
            (_b = (_a = this.listeners) === null || _a === void 0 ? void 0 : _a.onRotate) === null || _b === void 0 ? void 0 : _b.call(_a, rotation);
            (_d = (_c = this.listeners) === null || _c === void 0 ? void 0 : _c.onUpdate) === null || _d === void 0 ? void 0 : _d.call(_c);
        });
        this.moveable.on("dragEnd", () => { var _a; return (_a = this.listeners) === null || _a === void 0 ? void 0 : _a.dragEnd; });
        this.moveable.on("scaleEnd", () => { var _a; return (_a = this.listeners) === null || _a === void 0 ? void 0 : _a.scaleEnd; });
        this.moveable.on("rotateEnd", () => { var _a; return (_a = this.listeners) === null || _a === void 0 ? void 0 : _a.rotateEnd; });
        this.moveable.on("resizeEnd", () => { var _a; return (_a = this.listeners) === null || _a === void 0 ? void 0 : _a.resizeEnd; });
    }
    showHandlers() {
        if (this.moveable == null) {
            return;
        }
        this.moveable.className = "visibility-visible-important";
        this.element.style.display = "block";
    }
    hideHandlers() {
        if (this.moveable == null) {
            return;
        }
        this.moveable.className = "visibility-hidden-important";
        this.element.style.display = "none";
    }
    destroy() {
        if (this.moveable != null) {
            this.moveable.destroy();
        }
    }
    updateStyle(style) {
        var _a;
        Object.assign(this.element.style, style);
        (_a = this.moveable) === null || _a === void 0 ? void 0 : _a.updateRect();
    }
}
