import { h, Fragment } from "@stencil/core";
import { ChevronDownIcon } from "../../assets/icons/ChevronDownIcon";
import clsx from "clsx";
import { ApplicationStore } from "../../store/ApplicationStore";
import { autorun } from "mobx";
export class Select {
    constructor() {
        this.toggleDropdown = (e) => {
            e.stopPropagation();
            this.dropdownOpen = !this.dropdownOpen;
        };
        this.handleOutsideClick = (e) => {
            var _a;
            if (!((_a = this.el) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
                this.dropdownOpen = false;
            }
        };
        this.dropdownOpen = false;
        this.value = undefined;
        this.label = undefined;
        this.variant = "default";
        this.selectStyle = undefined;
    }
    componentWillLoad() {
        this.disposeAutorun = autorun(() => {
            var _a;
            (_a = this.el) === null || _a === void 0 ? void 0 : _a.setAttribute("theme", ApplicationStore.theme);
        });
    }
    optionSelectHandler() {
        this.dropdownOpen = false;
    }
    componentDidLoad() {
        document.addEventListener("click", this.handleOutsideClick);
    }
    disconnectedCallback() {
        var _a;
        document.removeEventListener("click", this.handleOutsideClick);
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    render() {
        const btnVariant = this.variant === "default" ? "default" : "ghost";
        return (h(Fragment, { key: 'f1f93e28310df652eeb4d8dbc81e65eff8e8e7e2' }, h("div", { key: '0b0eae885a77f43a7be343a41d52c6fa4a9ed442', class: clsx("select", `select__variant-${this.variant}`) }, this.label != null && h("ve-label", { key: '29440e2ae91d900fb719da61425ed59389b8560f' }, this.label), h("div", { key: '85d552396d1081a3f220014b0db1f6b2497d6a01', class: "select__content" }, h("ve-btn", { key: 'd4ed0bbafc00ba1a4475be5be2c8f031d1f69d0b', "aria-haspopup": "listbox", "aria-expanded": this.dropdownOpen.toString(), class: "select__btn", style: this.selectStyle, variant: btnVariant, onClick: this.toggleDropdown }, this.value || "Select an option", h("div", { key: 'b1854cb8d215c707d0b728962e3958891df2fe82', class: "select__btn-icon" }, h(ChevronDownIcon, { key: 'b1151d0939d400b3c90eed45c5872d2f455d1bd5' }))), this.dropdownOpen && (h("ul", { key: 'd3112ec2b071ee7e6546e9cdb54cb81f7d830cf3', class: "select__dropdown" }, h("slot", { key: '25bcaa79bdf8168feffce0a59c0adbc656023e64' })))))));
    }
    static get is() { return "ve-select"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["Select.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Select.styles.css"]
        };
    }
    static get properties() {
        return {
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
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "SelectVariant",
                    "resolved": "\"border\" | \"default\" | undefined",
                    "references": {
                        "SelectVariant": {
                            "location": "local",
                            "path": "/Users/yuyuuma/src/github.com/rendleyhq/video-editor-ui/src/components/Select/Select.tsx",
                            "id": "src/components/Select/Select.tsx::SelectVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "\"default\""
            },
            "selectStyle": {
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
    static get states() {
        return {
            "dropdownOpen": {}
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
                    "original": "{ label: string; value: string }",
                    "resolved": "{ label: string; value: string; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "optionSelected",
                "method": "optionSelectHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
