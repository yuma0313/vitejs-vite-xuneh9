import { h } from "@stencil/core";
import clsx from "clsx";
export class Input {
    constructor() {
        this.handleChangeText = (event) => {
            var _a;
            const target = event.target;
            return (_a = this.onChangeText) === null || _a === void 0 ? void 0 : _a.call(this, target.value);
        };
        this.type = "text";
        this.placeholder = undefined;
        this.label = undefined;
        this.error = undefined;
        this.name = undefined;
        this.value = undefined;
        this.onChangeText = undefined;
    }
    render() {
        const hasError = this.error != null;
        return (h("div", { key: '06de5941bb247cbf12b4f2f4a1add369f1fbdadb', class: "input" }, this.label != null && h("ve-label", { key: '64adf254038dffd2ef94123f9ec60292345379e5', error: hasError }, this.label), h("input", { key: '1e0b91209ef3f61a0dffe32c02581718acb1bad8', class: clsx("input__input", {
                "input__input-error": hasError,
            }), type: this.type, placeholder: this.placeholder, name: this.name, value: this.value, onInput: this.handleChangeText }), hasError && h("p", { key: 'af10c573064fe6858a169d63a19dbd4c2db487be', class: "input__error-label" }, this.error)));
    }
    static get is() { return "ve-input"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Input.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Input.styles.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputType",
                    "resolved": "\"number\" | \"text\"",
                    "references": {
                        "InputType": {
                            "location": "local",
                            "path": "/Users/yuyuuma/src/github.com/rendleyhq/video-editor-ui/src/components/Input/Input.tsx",
                            "id": "src/components/Input/Input.tsx::InputType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "\"text\""
            },
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
