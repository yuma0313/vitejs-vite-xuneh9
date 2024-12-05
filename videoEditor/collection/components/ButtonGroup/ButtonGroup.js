import { h } from "@stencil/core";
export class ButtonGroup {
    constructor() {
        this.label = undefined;
    }
    render() {
        return (h("div", { key: '80e32d34ed71cbd4e507c3b15048d3d6f7567ca8', class: "btn-group" }, this.label != null && h("ve-label", { key: 'de6148f15b7b50612939c710ab8ab3a9f298e02b' }, this.label), h("div", { key: 'ce34f914ade36262782d82a8b96235f9272901a6', class: "btn-group__content" }, h("slot", { key: 'f2cf32337b3d00a5e446e8ca60d482a4eaf3fa6e' }))));
    }
    static get is() { return "ve-btn-group"; }
    static get originalStyleUrls() {
        return {
            "$": ["./ButtonGroup.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ButtonGroup.styles.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "label",
                "reflect": false
            }
        };
    }
}
