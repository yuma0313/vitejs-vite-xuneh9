import { h } from "@stencil/core";
export class ColorPicker {
    constructor() {
        this.handleChangeColor = (event) => {
            var _a;
            const target = event.target;
            return (_a = this.onChangeColor) === null || _a === void 0 ? void 0 : _a.call(this, target.value);
        };
        this.color = undefined;
        this.onChangeColor = undefined;
    }
    handleOpen() {
        var _a;
        (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.click();
    }
    render() {
        return (h("div", { key: '371b93ca5ec4e7625bcdbb06f02c24cbe99295f5', class: "color-picker", style: { background: this.color }, onPointerDown: this.handleOpen.bind(this) }, h("input", { key: '569b459cb488afe925bd0d34033a6958e0c033ec', ref: (el) => (this.inputRef = el), type: "color", class: "color-picker__input", onInput: this.handleChangeColor })));
    }
    static get is() { return "ve-color-picker"; }
    static get originalStyleUrls() {
        return {
            "$": ["./ColorPicker.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ColorPicker.styles.css"]
        };
    }
    static get properties() {
        return {
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
