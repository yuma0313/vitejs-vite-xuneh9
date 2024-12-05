import { h } from "@stencil/core";
import clsx from "clsx";
export class Label {
    constructor() {
        this.error = undefined;
    }
    render() {
        return (h("label", { key: '2894ad4e8b9104772ac3789224d9fb52ad657b81', class: clsx("label", {
                "label-error": this.error,
            }) }, h("slot", { key: '0767703ca75594c6792f5f59d8be5141014d47c6' })));
    }
    static get is() { return "ve-label"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Label.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Label.styles.css"]
        };
    }
    static get properties() {
        return {
            "error": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "error",
                "reflect": false
            }
        };
    }
}
