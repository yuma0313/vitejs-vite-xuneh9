import { h } from "@stencil/core";
export class ColorInput {
    constructor() {
        this.handleChangeColor = (value) => {
            var _a;
            return (_a = this.onChangeColor) === null || _a === void 0 ? void 0 : _a.call(this, value);
        };
        this.label = undefined;
        this.color = undefined;
        this.onChangeColor = undefined;
    }
    render() {
        return (h("div", { key: 'd4e8afd2565f443cd270a687f7c0a054a1470586', class: "color-input" }, this.label != null && h("ve-label", { key: '946c432922fd6a525777f7f1b3d57d6f7a1756e6' }, this.label), h("div", { key: 'c4723f267fcea14b94b370b6c25e8895e0b97fa2', class: "color-input__content" }, h("ve-input", { key: 'e1f0ed8ec7a9ecea6a30bf683a020c5730428bdf', value: this.color, onChangeText: this.handleChangeColor }), h("ve-color-picker", { key: 'bccb0f7057d56482cdb77d664b35a945ba9eca9e', color: this.color, onChangeColor: this.handleChangeColor }))));
    }
    static get is() { return "ve-color-input"; }
    static get originalStyleUrls() {
        return {
            "$": ["./ColorInput.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ColorInput.styles.css"]
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
            },
            "color": {
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
                "attribute": "color",
                "reflect": false
            },
            "onChangeColor": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(color: string) => void",
                    "resolved": "((color: string) => void) | undefined",
                    "references": {}
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
