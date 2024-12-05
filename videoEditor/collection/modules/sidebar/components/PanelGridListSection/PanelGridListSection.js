import { h } from "@stencil/core";
import clsx from "clsx";
export class PanelGridListSection {
    constructor() {
        this.title = "Title";
        this.data = [];
        this.class = undefined;
        this.isLoading = undefined;
        this.columns = 2;
        this.renderFirst = undefined;
        this.renderCard = undefined;
        this.visibleItemsCount = 6;
        this.isExtended = false;
        this.onExtend = undefined;
    }
    render() {
        var _a;
        const isSeelAllVisible = !this.isExtended && this.data.length > this.visibleItemsCount;
        return (h("div", { key: 'cb1eda332f6b7f3e2c4c16c03e05431885ce5fb1', class: clsx("panel-grid-list", this.class) }, h("div", { key: '525de1d176be440108853cfac3ebeb9a738d0cd9', class: "panel-grid-list__header" }, h("span", { key: '9ead9df6894e4374e30d300d381896413f0c83a8', class: "panel-grid-list__header-section-text" }, this.title), isSeelAllVisible && (h("ve-btn", { key: 'db82048232bbcb5c84d7a1452e74b8db34d9e2da', onClick: this.onExtend }, h("span", { key: '7de891f22001b575eb8957fb2cc79a5e2a25d543', class: "panel-grid-list__header-action-text" }, "\u5168\u3066\u8868\u793A", h("slot", { key: '2d4bb488975e032a22b2c0d97cefc1e184428d07', name: "chevron-icon" }))))), h("div", { key: '693a3b565f7d04960ed0549f4b64e5bdcfe74a13', class: "panel-grid-list__content", style: { "--columns": `${this.columns}` } }, (_a = this.renderFirst) === null || _a === void 0 ? void 0 :
            _a.call(this), !this.isLoading &&
            this.data
                .slice(0, this.isExtended ? this.data.length : this.visibleItemsCount)
                .map((item, index) => h("div", { key: index }, this.renderCard(item))), this.isLoading &&
            [...Array(this.visibleItemsCount)].map((_, index) => (h("ve-placeholder-panel-card", { key: index }))))));
    }
    static get is() { return "ve-panel-grid-list-section"; }
    static get originalStyleUrls() {
        return {
            "$": ["PanelGridListSection.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["PanelGridListSection.styles.css"]
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
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "title",
                "reflect": false,
                "defaultValue": "\"Title\""
            },
            "data": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "unknown[]",
                    "resolved": "unknown[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
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
            },
            "isLoading": {
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
                "attribute": "is-loading",
                "reflect": false
            },
            "columns": {
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
                "attribute": "columns",
                "reflect": false,
                "defaultValue": "2"
            },
            "renderFirst": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "() => HTMLElement",
                    "resolved": "(() => HTMLElement) | undefined",
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
            },
            "renderCard": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(item: any) => HTMLElement",
                    "resolved": "(item: any) => HTMLElement",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "visibleItemsCount": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "visible-items-count",
                "reflect": false,
                "defaultValue": "6"
            },
            "isExtended": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean | undefined",
                    "resolved": "boolean | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is-extended",
                "reflect": false,
                "defaultValue": "false"
            },
            "onExtend": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "(() => void) | undefined",
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
