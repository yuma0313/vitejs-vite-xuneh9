import { h } from "@stencil/core";
import { RendleyStore } from "../../../../store/RendleyStore";
import { autorun } from "mobx";
export class VideoClip {
    constructor() {
        this.clipId = undefined;
        this.layerId = undefined;
        this.filename = RendleyStore.getFilenameByClipId(this.clipId);
        this.thumbnail = RendleyStore.getThumbnailByClipId(this.clipId);
    }
    componentWillLoad() {
        this.disposeAutorun = autorun(() => {
            this.filename = RendleyStore.getFilenameByClipId(this.clipId);
            this.thumbnail = RendleyStore.getThumbnailByClipId(this.clipId);
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    render() {
        return (h("ve-clip", { key: '1914f662b902a9ca63de794ae32ecdce875f5e43', clipId: this.clipId, layerId: this.layerId, filename: this.filename, thumbnail: this.thumbnail }, h("svg", { key: 'ef167b7739429df33df0f7e661f0754549abb933', slot: "icon", width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '4ec9a338aa9ed3416af545e87597e4fdf01ca6e2', id: "film", "clip-path": "url(#clip0_464_80)" }, h("path", { key: '4b81ce6f09d66262aa78ff4f453a3e15083e6bab', id: "Vector", d: "M9.91 1H2.09C1.48801 1 1 1.48801 1 2.09V9.91C1 10.512 1.48801 11 2.09 11H9.91C10.512 11 11 10.512 11 9.91V2.09C11 1.48801 10.512 1 9.91 1Z", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { key: '81cc582337ceba45279198d7b49b112c8badf71d', id: "Vector_2", d: "M3.5 1V11", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { key: '0202e87179a419074fa8af1df7334e45dedac784', id: "Vector_3", d: "M8.5 1V11", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { key: '69c9d78ebeeab096b1e25e38d9867149670d56ea', id: "Vector_4", d: "M1 6H11", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { key: 'f0c17e149401b31f50bac8aef383d3c1f3f7d506', id: "Vector_5", d: "M1 3.5H3.5", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { key: '731f25afb9fc8eaffa27cb942d8f1de7b3e5e995', id: "Vector_6", d: "M1 8.5H3.5", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { key: 'b42b3744632e497d00435c2cb7df82f5bd3e8716', id: "Vector_7", d: "M8.5 8.5H11", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { key: '062b9efc11acabaab48614419282c6ba3332d812', id: "Vector_8", d: "M8.5 3.5H11", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" })), h("defs", { key: '3027e16f73a4ebcee85316026fb2bd0a65783206' }, h("clipPath", { key: 'e4933b5f1e805ca1dcd5f1f1d7f4f607cc088b69', id: "clip0_464_80" }, h("rect", { key: '00bb6e1e869f5a6fed7072fc121b03448fd03694', width: "12", height: "12", fill: "white" }))))));
    }
    static get is() { return "ve-video-clip"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["./VideoClip.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["VideoClip.styles.css"]
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
            "filename": {},
            "thumbnail": {}
        };
    }
}
