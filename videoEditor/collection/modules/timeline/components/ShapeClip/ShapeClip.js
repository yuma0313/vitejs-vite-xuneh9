import { h } from "@stencil/core";
export class Shapeclip {
    constructor() {
        this.clipId = undefined;
        this.layerId = undefined;
    }
    render() {
        return (h("ve-clip", { key: 'daabfc8c789298222b3413487ecbd0363d4b798f', clipId: this.clipId, layerId: this.layerId, filename: "Shape" }, h("svg", { key: '0912ce1c39008d3e616565dbd075e2291f393f7f', slot: "icon", xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, h("path", { key: '250339c604c4f8cc984731112c417827960fc5b3', d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }))));
    }
    static get is() { return "ve-shape-clip"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["./ShapeClip.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ShapeClip.styles.css"]
        };
    }
    static get properties() {
        return {
            "clipId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "clip-id",
                "reflect": false
            },
            "layerId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "layer-id",
                "reflect": false
            }
        };
    }
}
