import { h } from "@stencil/core";
import Split from "split.js";
import { GUTTER_SIZE, TIMELINE_CONTROLS_ELEMENT_ID } from "../../modules/timeline/config/constants";
import { getShadowRoot } from "../../utils/dom/getShadowRoot";
export class Layout {
    constructor() {
        this.dragEnterCounter = 0;
        this.isResizing = false;
        this.isDragOverlayVisible = false;
        this.onDropFiles = undefined;
    }
    componentDidLoad() {
        const timelineControlsElement = getShadowRoot().getElementById(TIMELINE_CONTROLS_ELEMENT_ID);
        const controlsPadding = 1.6 * 16; // 2rem
        if (!this.timelineContainerRef || !timelineControlsElement || !this.contentContainerRef) {
            return;
        }
        const controlsHorizontalMargins = (this.timelineContainerRef.clientWidth - timelineControlsElement.clientWidth) / 2;
        Split([this.contentContainerRef, this.timelineContainerRef], {
            direction: "vertical",
            sizes: [70, 30],
            gutterSize: 0,
            onDragStart: () => {
                this.isResizing = true;
            },
            onDragEnd: () => {
                this.isResizing = false;
            },
            gutterStyle() {
                return {
                    margin: `-0.1rem ${controlsHorizontalMargins}px`, // Remove gutter's height
                    transform: `translateY(${GUTTER_SIZE + controlsPadding}px)`,
                    width: `calc(100% - ${controlsHorizontalMargins * 2}px)`,
                };
            },
        });
    }
    handleUpdateStyleWhenResizing() {
        const gutter = getShadowRoot().querySelector(".gutter");
        if (gutter == null) {
            return;
        }
        if (this.isResizing) {
            gutter.classList.add("gutter__active");
            return;
        }
        gutter.classList.remove("gutter__active");
    }
    handleDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    handleDragEnter(event) {
        var _a;
        event.preventDefault();
        const isFile = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.types.includes("Files");
        if (!isFile) {
            return;
        }
        this.dragEnterCounter++;
        this.isDragOverlayVisible = true;
    }
    handleDragLeave(event) {
        event.preventDefault();
        // workaround for avoiding multiple dragleave events
        this.dragEnterCounter--;
        if (this.dragEnterCounter <= 0) {
            this.isDragOverlayVisible = false;
            this.dragEnterCounter = 0;
        }
    }
    handleDrop(event) {
        var _a, _b, _c;
        event.preventDefault();
        event.stopPropagation();
        (_a = this.onDropFiles) === null || _a === void 0 ? void 0 : _a.call(this, (_c = (_b = event.dataTransfer) === null || _b === void 0 ? void 0 : _b.files) !== null && _c !== void 0 ? _c : new FileList());
        this.isDragOverlayVisible = false;
    }
    render() {
        return (h("div", { key: '68c1d01eb05513fabc34b77ce4453d68fb18d5ff', class: "layout", onDragOver: this.handleDragOver.bind(this), onDragEnter: this.handleDragEnter.bind(this), onDragLeave: this.handleDragLeave.bind(this), onDrop: this.handleDrop.bind(this) }, h("div", { key: '4a63f5487e05604ec88468d90cc9a853b325e5c4', class: "layout__content", ref: (el) => (this.contentContainerRef = el) }, h("div", { key: '78fa79e0b473271c3d74f378a286e2a5b2e4cb4a', class: "layout__navbar" }, h("ve-navbar", { key: 'e5f15a9f3a50176b14a964f3e37d0883c0ee47ae' })), h("div", { key: '3851b093328fd60ca6b460a1ebf941e24efdf8c1', class: "layout__container" }, h("ve-sidebar", { key: '0ea4ebd13f6abce0c044535ac19b93824d29b0bc' }), h("slot", { key: 'ab839717e0ff9e5f1563164daedd31b48a7ac4aa', name: "rendley-container" }))), h("div", { key: '2713a7bdfa051ce2f1a83ed39262180216d6d276', class: "layout__timeline", ref: (el) => (this.timelineContainerRef = el) }, h("slot", { key: '047a61844bdb41c87c9614a78272383a45be9ffb', name: "timeline" })), this.isDragOverlayVisible && h("ve-drag-drop-overlay", { key: 'd8325457513bd92d6258eb43a96808244fb9c3da' })));
    }
    static get is() { return "ve-layout"; }
    static get originalStyleUrls() {
        return {
            "$": ["Layout.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Layout.styles.css"]
        };
    }
    static get properties() {
        return {
            "onDropFiles": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(files: FileList) => Promise<void>",
                    "resolved": "((files: FileList) => Promise<void>) | undefined",
                    "references": {
                        "FileList": {
                            "location": "global",
                            "id": "global::FileList"
                        },
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get states() {
        return {
            "isResizing": {},
            "isDragOverlayVisible": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "isResizing",
                "methodName": "handleUpdateStyleWhenResizing"
            }];
    }
}
