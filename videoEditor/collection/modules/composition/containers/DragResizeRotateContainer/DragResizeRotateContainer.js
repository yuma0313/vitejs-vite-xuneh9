import { h } from "@stencil/core";
import { reaction } from "mobx";
import { InteractiveElement } from "../../utils/InteractiveElement";
import { RendleyStore } from "../../../../store/RendleyStore";
import { WindowStore } from "../../../../store/WindowStore";
import { Engine } from "@rendley/sdk";
import { ApplicationStore } from "../../../../store/ApplicationStore";
export class DragResizeRotateContainer {
    constructor() {
        this.selectedClipId = ApplicationStore.selectedClipId;
        this.pixelRatio = 1;
    }
    componentWillLoad() {
        this.disposeReaction = reaction(() => {
            var _a, _b;
            return ({
                currentTime: RendleyStore.currentTime,
                selectedClipId: ApplicationStore.selectedClipId,
                canvasResolution: WindowStore.canvasResolution,
                videoResolution: RendleyStore.display,
                windowResolution: WindowStore.resolution,
                style: ApplicationStore.selectedClipId != null ? (_a = RendleyStore.styles) === null || _a === void 0 ? void 0 : _a[ApplicationStore.selectedClipId] : null,
                // trigger when text changes
                text: ApplicationStore.selectedClipId != null ? (_b = RendleyStore.clips[ApplicationStore.selectedClipId]) === null || _b === void 0 ? void 0 : _b.text : null,
            });
        }, (payload) => {
            var _a, _b, _c;
            this.selectedClipId = payload.selectedClipId;
            if (this.selectedClipId == null || this.selectedClip == null) {
                (_a = this.interaction) === null || _a === void 0 ? void 0 : _a.hideHandlers();
                return;
            }
            const isSelectedClipVisible = payload.currentTime >= this.selectedClip.getLeftBound() &&
                payload.currentTime <= this.selectedClip.getRightBound();
            if (isSelectedClipVisible) {
                (_b = this.interaction) === null || _b === void 0 ? void 0 : _b.showHandlers();
            }
            else {
                (_c = this.interaction) === null || _c === void 0 ? void 0 : _c.hideHandlers();
                return;
            }
            const [canvasWidth, canvasHeight] = payload.canvasResolution;
            const { width, height } = payload.videoResolution;
            this.pixelRatio = Math.min(canvasWidth / width, canvasHeight / height);
            this.handleUpdate();
        });
    }
    componentDidLoad() {
        if (this.containerRef == null) {
            return;
        }
        this.interaction = new InteractiveElement(this.containerRef, {
            onDrag: this.handleDrag.bind(this),
            onResize: this.handleResize.bind(this),
            onScale: this.handleScale.bind(this),
            onRotate: this.handleRotate.bind(this),
            onUpdate: this.handleUpdate.bind(this),
        });
    }
    disconnectedCallback() {
        var _a, _b;
        (_a = this.disposeReaction) === null || _a === void 0 ? void 0 : _a.call(this);
        (_b = this.interaction) === null || _b === void 0 ? void 0 : _b.destroy();
    }
    get selectedClip() {
        if (this.selectedClipId == null) {
            return null;
        }
        const clip = Engine.getInstance().getClipById(this.selectedClipId);
        if (!(clip === null || clip === void 0 ? void 0 : clip.hasSprite())) {
            return null;
        }
        return clip;
    }
    handleDrag(x, y) {
        var _a, _b;
        if (this.selectedClip == null) {
            return;
        }
        const width = (_a = this.selectedClip) === null || _a === void 0 ? void 0 : _a.style.getWidth();
        const height = (_b = this.selectedClip) === null || _b === void 0 ? void 0 : _b.style.getHeight();
        // scale to match the canvas
        let newX = x / this.pixelRatio;
        let newY = y / this.pixelRatio;
        // span because anchor starts from center
        newX += width / 2;
        newY += height / 2;
        this.selectedClip.style.setPosition(newX, newY);
    }
    handleScale(deltaWidth, deltaHeight) {
        if (this.selectedClip == null) {
            return;
        }
        const initialWidth = this.selectedClip.style.getWidth();
        const initialHeight = this.selectedClip.style.getHeight();
        const [initialScaleX, initialScaleY] = this.selectedClip.style.getScale();
        const newDeltaWidth = deltaWidth / this.pixelRatio;
        const newDeltaHeight = deltaHeight / this.pixelRatio;
        const scaleX = ((initialWidth + newDeltaWidth) * initialScaleX) / initialWidth;
        const scaleY = ((initialHeight + newDeltaHeight) * initialScaleY) / initialHeight;
        this.selectedClip.style.setScale(scaleX, scaleY);
    }
    handleResize(deltaWidth, deltaHeight) {
        if (this.selectedClip == null) {
            return;
        }
        if (this.selectedClip.getType() === "text") {
            return this.handleChangeTextWarp(deltaWidth);
        }
        return this.handleScale(deltaWidth, deltaHeight);
    }
    handleChangeTextWarp(deltaWidth) {
        if (this.selectedClip == null) {
            return;
        }
        const initialWidth = this.selectedClip.style.getWidth();
        const width = initialWidth + deltaWidth * 2;
        this.selectedClip.style.setWordWrapWidth(width);
    }
    handleRotate(rotation) {
        if (this.selectedClip == null) {
            return;
        }
        this.selectedClip.style.setRotation(rotation);
    }
    handleUpdate() {
        var _a, _b;
        if (!((_a = this.selectedClip) === null || _a === void 0 ? void 0 : _a.hasSprite())) {
            return;
        }
        const style = this.selectedClip.style;
        const width = style.getWidth() * this.pixelRatio;
        const height = style.getHeight() * this.pixelRatio;
        const x = style.getPosition()[0] * this.pixelRatio;
        const y = style.getPosition()[1] * this.pixelRatio;
        const rotation = style.getRotation();
        const zIndex = style.getZIndex();
        // interpolate anchor
        const newX = x - width / 2;
        const newY = y - height / 2;
        return (_b = this.interaction) === null || _b === void 0 ? void 0 : _b.updateStyle({
            width: `${width}px`,
            height: `${height}px`,
            position: "absolute",
            top: `0px`,
            left: `0px`,
            transform: `translate(${newX}px, ${newY}px) rotate(${rotation}rad)`,
            transformOrigin: "50% 50%",
            zIndex: `${zIndex}`,
        });
    }
    render() {
        return h("div", { key: 'e2c25c1242de8576eccc2605282d7affd10a6c98', ref: (el) => (this.containerRef = el), class: "absolute" });
    }
    static get is() { return "ve-drag-resize-rotate-container"; }
    static get states() {
        return {
            "selectedClipId": {},
            "pixelRatio": {}
        };
    }
}
