import { h } from "@stencil/core";
import { autorun, reaction } from "mobx";
import { ApplicationStore } from "../../../../store/ApplicationStore";
import { RendleyStore } from "../../../../store/RendleyStore";
import { TimelineStore } from "../../../../store/TimelineStore";
import { createHighPPICanvas } from "../../../../utils/canvas";
import { getCssVariableValue } from "../../../../utils/dom/cssVariableValue";
import { drawCanvasTimelineRuler } from "./utils/canvasRuler";
export class CanvasTimeRuler {
    constructor() {
        this.handleMouseDown = (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (!this.canvasContainerRef) {
                return;
            }
            const { left: leftOffset } = this.canvasContainerRef.getBoundingClientRect();
            const x = event.clientX - leftOffset + this.scrollLeft;
            this.seekingTimeRulerStart.emit({ event, x });
        };
        this.updateTheme = () => {
            this.canvasFillColor = getCssVariableValue("--hint");
            this.redrawCanvas();
        };
        this.resizeCanvas = () => {
            if (!this.canvasContainerRef || !this.canvasContext) {
                return;
            }
            const height = this.canvasContainerRef.clientHeight;
            const width = this.canvasContainerRef.clientWidth;
            createHighPPICanvas(this.canvasContext, width, height);
            this.redrawCanvas();
        };
        this.duration = RendleyStore.duration;
        this.timelineZoom = TimelineStore.zoom;
        this.scrollLeft = 0;
    }
    componentWillLoad() {
        this.disposeAutorun = autorun(() => {
            this.duration = RendleyStore.duration;
            this.timelineZoom = TimelineStore.zoom;
        });
        this.disposeReaction = reaction(() => ApplicationStore.theme, this.updateTheme);
        window.addEventListener("resize", this.resizeCanvas);
    }
    componentDidLoad() {
        var _a;
        this.canvasContext = ((_a = this.canvasRef) === null || _a === void 0 ? void 0 : _a.getContext("2d")) || undefined;
        this.canvasFillColor = getCssVariableValue("--hint");
        this.resizeCanvas();
    }
    disconnectedCallback() {
        var _a, _b;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
        (_b = this.disposeReaction) === null || _b === void 0 ? void 0 : _b.call(this);
        window.removeEventListener("resize", this.resizeCanvas);
    }
    handleTracksScrollLeft(event) {
        this.scrollLeft = event.detail;
    }
    handleStateChanged() {
        this.redrawCanvas();
    }
    redrawCanvas() {
        var _a;
        if (this.canvasContext) {
            drawCanvasTimelineRuler(this.canvasContext, this.duration, {
                scrollOffset: this.scrollLeft,
                fillColor: (_a = this.canvasFillColor) !== null && _a !== void 0 ? _a : "#000",
                zoom: this.timelineZoom,
            });
        }
    }
    render() {
        return (h("div", { key: '6ab6dd8606b60c9449907fd55f08d09554d9539c', class: "canvas-time-ruler", onMouseDown: this.handleMouseDown, ref: (el) => {
                this.canvasContainerRef = el;
            } }, h("canvas", { key: 'c818008e49f7061cfd01f0ce9c4e4d7cc7dd1419', ref: (el) => {
                this.canvasRef = el;
            } })));
    }
    static get is() { return "ve-canvas-time-ruler"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["./CanvasTimeRuler.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["CanvasTimeRuler.styles.css"]
        };
    }
    static get states() {
        return {
            "duration": {},
            "timelineZoom": {},
            "scrollLeft": {}
        };
    }
    static get events() {
        return [{
                "method": "seekingTimeRulerStart",
                "name": "seekingTimeRulerStart",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\n    event: MouseEvent;\n    x: number;\n  }",
                    "resolved": "{ event: MouseEvent; x: number; }",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "duration",
                "methodName": "handleStateChanged"
            }, {
                "propName": "scrollLeft",
                "methodName": "handleStateChanged"
            }, {
                "propName": "timelineZoom",
                "methodName": "handleStateChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "tracksScrollLeft",
                "method": "handleTracksScrollLeft",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
