import { h } from "@stencil/core";
import clsx from "clsx";
export class Button {
    constructor() {
        this.variant = "ghost";
        this.disabled = undefined;
        this.class = undefined;
    }
    render() {
        return (h("button", { key: '476bbcacff2d169dd07f8258bf8d3c221f26779f', class: clsx("btn", `btn__${this.variant}`, this.class), disabled: this.disabled }, h("slot", { key: '9a819acae88512cb6c7797ad872de2c05288fcd3', name: "icon" }), h("slot", { key: '7929f994978f0c144433e16ec8df47f9a9d2b96c' })));
    }
    static get is() { return "ve-btn"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Button.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Button.styles.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ButtonVariant",
                    "resolved": "\"default\" | \"ghost\" | \"primary\"",
                    "references": {
                        "ButtonVariant": {
                            "location": "local",
                            "path": "/Users/yuyuuma/src/github.com/rendleyhq/video-editor-ui/src/components/Button/Button.tsx",
                            "id": "src/components/Button/Button.tsx::ButtonVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "\"ghost\""
            },
            "disabled": {
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
                "attribute": "disabled",
                "reflect": false
            },
            "class": {
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
                "attribute": "class",
                "reflect": false
            }
        };
    }
}
