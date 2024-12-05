import { h } from "@stencil/core";
import clsx from "clsx";
import { PlusIcon } from "../../../../assets/icons/PlusIcon";
import { getShadowRoot } from "../../../../utils/dom/getShadowRoot";
import { TimelineEventsEnum } from "../../types/timeline.types";
import { ApplicationStore } from "../../../../store/ApplicationStore";
export class TrackDivider {
    constructor() {
        this.handleDragClipOver = (event) => {
            this.isDraggingOver = event.detail.index === this.index;
        };
        this.handleDragOver = (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (!this.isDraggingOver) {
                this.isDraggingOver = true;
            }
        };
        this.handleDragLeave = (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.isDraggingOver = false;
        };
        this.handleDrop = async (event) => {
            var _a, _b;
            this.handleDragLeave(event);
            try {
                const draggingObject = ApplicationStore.draggingObject;
                if (!draggingObject) {
                    return null;
                }
                if (draggingObject.type === "media") {
                    (_a = this.onDropMediaClip) === null || _a === void 0 ? void 0 : _a.call(this, event, draggingObject.payload.id);
                }
                if (draggingObject.type === "text-preset") {
                    (_b = this.onDropTextClip) === null || _b === void 0 ? void 0 : _b.call(this, event, draggingObject.payload);
                }
            }
            catch (_c) {
                return null;
            }
        };
        this.isDraggingOver = false;
        this.index = 0;
        this.onDropMediaClip = undefined;
        this.onDropTextClip = undefined;
    }
    componentWillLoad() {
        getShadowRoot().addEventListener(TimelineEventsEnum.CLIP_DRAG_OVER_DIVIDER, this.handleDragClipOver);
    }
    disconnectedCallback() {
        var _a;
        (_a = getShadowRoot()) === null || _a === void 0 ? void 0 : _a.removeEventListener(TimelineEventsEnum.CLIP_DRAG_OVER_DIVIDER, this.handleDragClipOver);
    }
    render() {
        return (h("div", { key: '45a8bf37b784cbaf1ba73baaa43f7bcac00baeb4', class: "track-divider", "data-index": this.index, onDragOver: this.handleDragOver, onDragLeave: this.handleDragLeave, onDrop: this.handleDrop }, h("div", { key: 'a4de6ae6631754484d2f0dacf23b21149b21fb47', class: clsx("track-divider__content", {
                "track-divider__visible": this.isDraggingOver,
            }) }, h("div", { key: '1b6be35a25b6e2b754e3f12085f1e7c7fccc7a4f', class: "track-divider__icon" }, h(PlusIcon, { key: 'c6aa3740ee44bff975ec9cae46efbdb4e99df698' })))));
    }
    static get is() { return "ve-track-divider"; }
    static get originalStyleUrls() {
        return {
            "$": ["./TrackDivider.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["TrackDivider.styles.css"]
        };
    }
    static get properties() {
        return {
            "index": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "index",
                "reflect": false,
                "defaultValue": "0"
            },
            "onDropMediaClip": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(event: DragEvent, mediaId: string) => void",
                    "resolved": "((event: DragEvent, mediaId: string) => void) | undefined",
                    "references": {
                        "DragEvent": {
                            "location": "global",
                            "id": "global::DragEvent"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "onDropTextClip": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(event: DragEvent, title: TitleDescription) => void",
                    "resolved": "((event: DragEvent, title: TitleDescription) => void) | undefined",
                    "references": {
                        "DragEvent": {
                            "location": "global",
                            "id": "global::DragEvent"
                        },
                        "TitleDescription": {
                            "location": "import",
                            "path": "../../../../config/config",
                            "id": "src/config/config.ts::TitleDescription"
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
            "isDraggingOver": {}
        };
    }
}
