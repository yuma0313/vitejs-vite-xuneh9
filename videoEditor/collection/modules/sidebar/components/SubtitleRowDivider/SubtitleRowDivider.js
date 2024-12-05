import { h } from "@stencil/core";
export class SubtitleRowDivider {
    constructor() {
        this.onAdd = undefined;
        this.onMerge = undefined;
    }
    render() {
        return (h("div", { key: 'b32ffa1277e8672a03504c8b0aad45b744544fe6', class: "subtitle-row-divider" }, h("div", { key: 'f2303a7e5221a32c724f46a1b804d26d4f6cff1c', class: "subtitle-row-divider__line" }), h("button", { key: 'eebd6c2c3bfb2f100b7800dcf645b42c29492bc4', class: "subtitle-row-divider__btn", onClick: this.onAdd }, "+ Add"), h("button", { key: '4230c2bebe8c67ad6a8eb4f4d20fd96130a3dfbd', class: "subtitle-row-divider__btn", onClick: this.onMerge }, "- Merge")));
    }
    static get is() { return "ve-subtitle-row-divider"; }
    static get originalStyleUrls() {
        return {
            "$": ["SubtitleRowDivider.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["SubtitleRowDivider.styles.css"]
        };
    }
    static get properties() {
        return {
            "onAdd": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "onMerge": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
}
