import { h } from "@stencil/core";
import { RendleyStore } from "../../../../store/RendleyStore";
import { autorun } from "mobx";
export class TextClip {
    constructor() {
        this.clipId = undefined;
        this.layerId = undefined;
        this.text = RendleyStore.getTextByClipId(this.clipId);
    }
    componentWillLoad() {
        this.disposeAutorun = autorun(() => {
            this.text = RendleyStore.getTextByClipId(this.clipId);
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    render() {
        return (h("ve-clip", { key: '9dac931ffa137964aef34f649db37877d5aafa84', clipId: this.clipId, layerId: this.layerId, filename: this.text == "" ? "Text" : this.text }, h("svg", { key: '11862604d23d00d7c3a3ef32de37ee4e673ccc02', slot: "icon", width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: 'ee4c68c07b093a6468ea624dc7a8186183c33467', d: "M2 3.5V2H10V3.5", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { key: 'afdd764859bdd14f4b5c6f17fda6b10f8d5aeade', d: "M4.5 10H7.5", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { key: '5e828310674017bb80aa52f1edd586480b1e9e6d', d: "M6 2V10", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }))));
    }
    static get is() { return "ve-text-clip"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["./TextClip.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["TextClip.styles.css"]
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
    static get states() {
        return {
            "text": {}
        };
    }
}
