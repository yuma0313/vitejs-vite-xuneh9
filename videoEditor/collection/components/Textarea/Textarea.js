import { h } from "@stencil/core";
import clsx from "clsx";
export class Textarea {
    constructor() {
        this.handleChangeText = (event) => {
            var _a;
            const target = event.target;
            return (_a = this.onChangeText) === null || _a === void 0 ? void 0 : _a.call(this, target.value);
        };
        this.placeholder = undefined;
        this.label = undefined;
        this.error = undefined;
        this.name = undefined;
        this.value = undefined;
        this.defaultValue = undefined;
        this.onChangeText = undefined;
    }
    render() {
        const hasError = this.error != null;
        return (h("div", { key: 'd54c9472e2b48edd3538a12597a648395715febc', class: "textarea" }, this.label != null && h("ve-label", { key: '6049718f6d6819778ff6022116c553eb8d8c6a6d', error: hasError }, this.label), h("textarea", { key: '5a2faaea07237c7b82697461f9e46c88223808d9', class: clsx("textarea__input", {
                "textarea__input-error": hasError,
            }), placeholder: this.placeholder, name: this.name, value: this.value, onInput: this.handleChangeText }, this.defaultValue), hasError && h("p", { key: '8019ac6bebc6304734777424b54c6459823fefaf', class: "textarea__error-label" }, this.error)));
    }
    static get is() { return "ve-textarea"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Textarea.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Textarea.styles.css"]
        };
    }
    static get properties() {
        return {
            "placeholder": {
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
                "attribute": "placeholder",
                "reflect": false
            },
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
            "error": {
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
                "attribute": "error",
                "reflect": false
            },
            "name": {
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
                "attribute": "name",
                "reflect": false
            },
            "value": {
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
                "attribute": "value",
                "reflect": false
            },
            "defaultValue": {
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
                "attribute": "default-value",
                "reflect": false
            },
            "onChangeText": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(value: string) => void",
                    "resolved": "((value: string) => void) | undefined",
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
