import { h } from "@stencil/core";
export class Option {
    constructor() {
        this.selectOption = () => {
            var _a;
            (_a = this.optionSelected) === null || _a === void 0 ? void 0 : _a.emit({
                label: this.label,
                value: this.value,
            });
        };
        this.index = undefined;
        this.label = "";
        this.value = undefined;
        this.optionStyle = undefined;
    }
    render() {
        return (h("li", { key: 'fee0720ac872791bd84ed67410a7bd1fa11d65f3', class: "option", style: this.optionStyle, onClick: this.selectOption, tabindex: this.index }, h("slot", { key: '74e139f9292f0430ce0247ee46817d99409add3f' })));
    }
    static get is() { return "ve-option"; }
    static get originalStyleUrls() {
        return {
            "$": ["Option.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Option.styles.css"]
        };
    }
    static get properties() {
        return {
            "index": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "index",
                "reflect": false
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "label",
                "reflect": false,
                "defaultValue": "\"\""
            },
            "value": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "unknown",
                    "resolved": "unknown",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "optionStyle": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Record<string, string>",
                    "resolved": "undefined | { [x: string]: string; }",
                    "references": {
                        "Record": {
                            "location": "global",
                            "id": "global::Record"
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
    static get events() {
        return [{
                "method": "optionSelected",
                "name": "optionSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ label: string; value: unknown }",
                    "resolved": "{ label: string; value: unknown; }",
                    "references": {}
                }
            }];
    }
}
