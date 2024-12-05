import { h } from "@stencil/core";
export class Modal {
    constructor() {
        this.open = false;
        this.content = undefined;
    }
    render() {
        if (!this.open) {
            return null;
        }
        return (h("ve-portal", null, h("div", { class: "modal modal__overlay" }, h("div", { class: "modal__content" }, this.content))));
    }
    static get is() { return "ve-modal"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Modal.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Modal.styles.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "open",
                "reflect": false,
                "defaultValue": "false"
            },
            "content": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "HTMLElement | null",
                    "resolved": "HTMLElement | null | undefined",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
}
