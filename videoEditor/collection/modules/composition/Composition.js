import { h } from "@stencil/core";
import { autorun } from "mobx";
import { CANVAS_ID, COMPOSITION_CONTAINER_ID } from "../../config/config";
import { RendleyStore } from "../../store/RendleyStore";
import { WindowStore } from "../../store/WindowStore";
import { calculateAspectRatioFit } from "../../utils/math/calculateAspectRatioFit";
import { SelectionWatcher } from "./utils/CompositionSelectionWatcher";
import { ApplicationStore } from "../../store/ApplicationStore";
import { getCanvasElement } from "../../utils/dom/getCanvasElement";
export class Composition {
    constructor() {
        this.onCanvasContainerResize = (entries) => {
            for (const entry of entries) {
                if (entry.target === this.canvasContainerElement) {
                    const { width, height } = entry.contentRect;
                    this.setCanvasSize(this.calculateWidthForComposition());
                    WindowStore.setCanvasResolution([width, height]);
                }
            }
        };
        this.onCanvasMutations = () => {
            this.initializeCanvas();
        };
        this.handleMouseDown = () => {
            ApplicationStore.setSelectedClipId(null);
        };
        this.displayWidth = RendleyStore.display.width;
        this.displayHeight = RendleyStore.display.height;
        this.updateTimestamp = RendleyStore.updateTimestamp;
    }
    componentWillLoad() {
        this.disposeAutorun = autorun(() => {
            this.displayWidth = RendleyStore.display.width;
            this.displayHeight = RendleyStore.display.height;
            this.updateTimestamp = RendleyStore.updateTimestamp;
        });
    }
    componentDidLoad() {
        if (this.canvasContainerElement) {
            this.setupObservers();
            this.initializeCanvas();
        }
    }
    disconnectedCallback() {
        var _a;
        this.cleanupObservers();
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    handleCanvasResize() {
        this.updateCanvasSize();
    }
    setupObservers() {
        if (!this.canvasContainerElement) {
            return;
        }
        this.canvasResizeObserver = new ResizeObserver(this.onCanvasContainerResize);
        this.canvasResizeObserver.observe(this.canvasContainerElement);
        this.canvasMutationObserver = new MutationObserver(this.onCanvasMutations);
        this.canvasMutationObserver.observe(this.canvasContainerElement, { childList: true, subtree: true });
    }
    cleanupObservers() {
        var _a, _b;
        (_a = this.canvasResizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        (_b = this.canvasMutationObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
    }
    initializeCanvas() {
        this.canvasElement = getCanvasElement();
        const selectionWatcher = SelectionWatcher.getInstance();
        selectionWatcher.init(this.canvasElement);
        this.updateCanvasSize();
    }
    calculateWidthForComposition() {
        if (!this.canvasContainerElement || !this.canvasElement)
            return { width: 0, height: 0 };
        const { clientWidth: containerWidth, clientHeight: containerHeight } = this.canvasContainerElement;
        const { width: canvasWidth, height: canvasHeight } = this.canvasElement;
        const { newWidth: width, newHeight: height } = calculateAspectRatioFit(canvasWidth, canvasHeight, containerWidth, containerHeight);
        return { width, height };
    }
    updateCanvasSize() {
        const { width, height } = this.calculateWidthForComposition();
        if (this.canvasElement) {
            this.canvasElement.style.width = `${width}px`;
            this.canvasElement.style.height = `${height}px`;
        }
    }
    setCanvasSize({ width, height }) {
        const canvas = this.canvasElement;
        if (canvas) {
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
        }
    }
    render() {
        return (h("div", { key: '8af5264ae63608bb17ddd3926b839356143080ee', class: "composition", id: COMPOSITION_CONTAINER_ID, onMouseDown: this.handleMouseDown }, h("div", { key: '5eb01de6498c37cf9bffaf1babeb9675d8bc919c', class: "composition__container", ref: (el) => (this.canvasContainerElement = el) }, h("div", { key: '9b378a1ef31220940f10fea6f72d544354678716', class: "relative", onMouseDown: (e) => {
                e.preventDefault();
                e.stopPropagation();
            } }, h("canvas", { key: '10f78a58376f5a972b67faf1f468579e69087b99', id: CANVAS_ID }), h("ve-drag-resize-rotate-container", { key: '757d96ab1b9480b3fe2126b016a3dcb28dfaa47a' })))));
    }
    static get is() { return "ve-composition"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Composition.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Composition.styles.css"]
        };
    }
    static get states() {
        return {
            "displayWidth": {},
            "displayHeight": {},
            "updateTimestamp": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "displayWidth",
                "methodName": "handleCanvasResize"
            }, {
                "propName": "displayHeight",
                "methodName": "handleCanvasResize"
            }, {
                "propName": "updateTimestamp",
                "methodName": "handleCanvasResize"
            }];
    }
}
