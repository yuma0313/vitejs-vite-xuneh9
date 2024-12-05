import { h } from "@stencil/core";
import { RendleyStore } from "../../../../store/RendleyStore";
import { autorun } from "mobx";
export class ImageClip {
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
        return (h("ve-clip", { key: '77d24bd8ff238e90d7ce988ce54786e89f95f2c6', clipId: this.clipId, layerId: this.layerId, filename: this.filename, thumbnail: this.thumbnail }, h("svg", { key: 'e87e897e561d9bcb4da50bc47542c18c133447a7', slot: "icon", width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: '71d31eaa88b6ff5b40ed7529f693e38342326699', d: "M9.5 1.5H2.5C1.94772 1.5 1.5 1.94772 1.5 2.5V9.5C1.5 10.0523 1.94772 10.5 2.5 10.5H9.5C10.0523 10.5 10.5 10.0523 10.5 9.5V2.5C10.5 1.94772 10.0523 1.5 9.5 1.5Z", stroke: "white", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { key: '9aead2aed49354a0c52b178271bb6535df80b46c', d: "M4.25 5C4.66421 5 5 4.66421 5 4.25C5 3.83579 4.66421 3.5 4.25 3.5C3.83579 3.5 3.5 3.83579 3.5 4.25C3.5 4.66421 3.83579 5 4.25 5Z", stroke: "white", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { key: '09339f63ad7f49d8f7db59a7c3f40582afbcc9b2', d: "M10.5 7.5L8 5L2.5 10.5", stroke: "white", "stroke-linecap": "round", "stroke-linejoin": "round" }))));
    }
    static get is() { return "ve-image-clip"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["./ImageClip.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ImageClip.styles.css"]
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
