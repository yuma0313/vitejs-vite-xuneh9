import { h } from "@stencil/core";
import clsx from "clsx";
export class Paper {
    constructor() {
        this.direction = "row";
    }
    render() {
        return (h("div", { key: '06c25ca7f2fd4a9ec4c33c48a4a30ec53cbe795c', class: clsx("paper", `paper__${this.direction}`) }, h("slot", { key: 'a018d99b3548d2b46b5bcd2f5ae4cb4204009f9a' })));
    }
    static get is() { return "ve-paper"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Paper.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Paper.styles.css"]
        };
    }
    static get properties() {
        return {
            "direction": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "PaperDirection",
                    "resolved": "\"column\" | \"row\"",
                    "references": {
                        "PaperDirection": {
                            "location": "local",
                            "path": "/Users/yuyuuma/src/github.com/rendleyhq/video-editor-ui/src/components/Paper/Paper.tsx",
                            "id": "src/components/Paper/Paper.tsx::PaperDirection"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "direction",
                "reflect": false,
                "defaultValue": "\"row\""
            }
        };
    }
}
