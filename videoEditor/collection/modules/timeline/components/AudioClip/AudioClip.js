import { h } from "@stencil/core";
import { RendleyStore } from "../../../../store/RendleyStore";
import { autorun } from "mobx";
export class AudioClip {
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
        return (h("ve-clip", { key: '878cf2b317012fa6bcd2e0babc5675df1557224c', clipId: this.clipId, layerId: this.layerId, filename: this.filename, thumbnail: this.thumbnail }, h("svg", { key: 'e3192303288a503f786ed7435b1c221b06d0ec90', slot: "icon", width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '92d0d9e569c8e3ed1f7a5d12571e16722fa943d0', id: "music" }, h("path", { key: '44c6ba3be341395fbc9442c9606a0ae43f6e0105', id: "Vector", d: "M4.5 9V2.5L10.5 1.5V8", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { key: '7ec2f6f0ba55404cc004b31932a10b0de66f8317', id: "Vector_2", d: "M3 10.5C3.82843 10.5 4.5 9.82843 4.5 9C4.5 8.17157 3.82843 7.5 3 7.5C2.17157 7.5 1.5 8.17157 1.5 9C1.5 9.82843 2.17157 10.5 3 10.5Z", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { key: '2d42a438a1c48d76a89386b8cc461a43366c07ff', id: "Vector_3", d: "M9 9.5C9.82843 9.5 10.5 8.82843 10.5 8C10.5 7.17157 9.82843 6.5 9 6.5C8.17157 6.5 7.5 7.17157 7.5 8C7.5 8.82843 8.17157 9.5 9 9.5Z", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" })))));
    }
    static get is() { return "ve-audio-clip"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["./AudioClip.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["AudioClip.styles.css"]
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
