import { h } from "@stencil/core";
export class LottieClip {
    constructor() {
        this.clipId = undefined;
        this.layerId = undefined;
    }
    render() {
        return (h("ve-clip", { key: '08f7e4210746092a03d4bc7c8e265e4809764668', clipId: this.clipId, layerId: this.layerId, filename: "Lottie" }, h("svg", { key: 'f80c2056ac7bd4026293252003ad821b521932af', slot: "icon", xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, h("circle", { key: '91f76d2d31fed9d781d283708144252ea7ea23e9', cx: "12", cy: "12", r: "10" }), h("circle", { key: '60bca685bf0826fb7780b666d8347fee7fda4d58', cx: "12", cy: "12", r: "3" }))));
    }
    static get is() { return "ve-lottie-clip"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["./LottieClip.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["LottieClip.styles.css"]
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
