import { h } from "@stencil/core";
export class Draggable {
    constructor() {
        this.isDraggable = true;
        this.payload = undefined;
        this.onDragStart = undefined;
        this.onDragEnd = undefined;
    }
    handleDragStart(event) {
        var _a;
        if (this.ref == null) {
            return;
        }
        this.ref.style.opacity = "0.4";
        const thumbnail = this.ref.querySelector(".thumbnail");
        if (thumbnail) {
            thumbnail.style.pointerEvents = "none";
        }
        (_a = this.onDragStart) === null || _a === void 0 ? void 0 : _a.call(this, event);
    }
    handleDragEnd(event) {
        var _a;
        if (this.ref == null) {
            return;
        }
        this.ref.style.opacity = "1";
        const thumbnail = this.ref.querySelector(".thumbnail");
        if (thumbnail) {
            thumbnail.style.pointerEvents = "";
        }
        (_a = this.onDragEnd) === null || _a === void 0 ? void 0 : _a.call(this, event);
    }
    render() {
        if (!this.isDraggable) {
            return h("slot", null);
        }
        return (h("div", { class: "draggable", ref: (el) => (this.ref = el), draggable: true, onDragStart: this.handleDragStart.bind(this), onDragEnd: this.handleDragEnd.bind(this) }, h("slot", null)));
    }
    static get is() { return "ve-draggable"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Draggable.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Draggable.styles.css"]
        };
    }
    static get properties() {
        return {
            "isDraggable": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is-draggable",
                "reflect": false,
                "defaultValue": "true"
            },
            "payload": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "object",
                    "resolved": "object | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "onDragStart": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(event: DragEvent) => void",
                    "resolved": "((event: DragEvent) => void) | undefined",
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
            "onDragEnd": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(event: DragEvent) => void",
                    "resolved": "((event: DragEvent) => void) | undefined",
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
            }
        };
    }
}
