import { h } from "@stencil/core";
export class InfoBanner {
    constructor() {
        this.title = undefined;
        this.message = undefined;
        this.icon = undefined;
    }
    render() {
        return (h("div", { key: '9f463876bcb96d5c0eb6200389755a8864f3c132', class: "info-banner" }, this.icon && h("div", { key: 'd94d66cfb298bc3c594f9a15df76fb595f6cb162', class: "info-banner__icon" }, this.icon), h("p", { key: '9d2cab0f6ec91357890eaa3d696ce2539f4193fe', class: "info-banner__title" }, this.title), this.message && h("p", { key: 'dfac80a2e97d012b707b77620355e438626a1a74', class: "info-banner__description" }, this.message)));
    }
    static get is() { return "ve-info-banner"; }
    static get originalStyleUrls() {
        return {
            "$": ["./InfoBanner.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["InfoBanner.styles.css"]
        };
    }
    static get properties() {
        return {
            "title": {
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
                "attribute": "title",
                "reflect": false
            },
            "message": {
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
                "attribute": "message",
                "reflect": false
            },
            "icon": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "() => JSX.Element",
                    "resolved": "(() => Element) | undefined",
                    "references": {
                        "JSX": {
                            "location": "import",
                            "path": "@stencil/core",
                            "id": "node_modules::LocalJSX"
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
