import { h } from "@stencil/core";
import { SearchIcon } from "../../assets/icons/SearchIcon";
export class Searchbar {
    constructor() {
        this.onChangeText = undefined;
    }
    render() {
        return (h("div", { key: '489409405ef90f026c3259661848c155a494f641', class: "searchbar" }, h("input", { key: 'bc91de549444cc5450f036797bc03aa06c860420', class: "searchbar__input", type: "text", placeholder: "Search", onInput: (e) => { var _a; return (_a = this.onChangeText) === null || _a === void 0 ? void 0 : _a.call(this, e.target.value); } }), h(SearchIcon, { key: 'a9dfbe7f8659ff3e3c9f6169f397d5888e716e63' })));
    }
    static get is() { return "ve-searchbar"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Searchbar.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Searchbar.styles.css"]
        };
    }
    static get properties() {
        return {
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
