import { h } from "@stencil/core";
export class Tabs {
    constructor() {
        this.activeTab = 0;
        this.tabs = [];
    }
    setActiveTab(index) {
        this.activeTab = index;
    }
    render() {
        return (h("div", { key: '96f7cbbb2796abc22bff4a8be269bbada69f1d67', class: "tabs" }, h("div", { key: '4e9d7c059d6d10cbb734071ebf63e8dbd3590506', class: "tabs__headers" }, this.tabs.map((tab, index) => (h("button", { class: {
                "tabs__headers--header": true,
                active: index === this.activeTab,
            }, onClick: () => this.setActiveTab(index) }, tab.title)))), h("div", { key: 'f023bca8ef10d322e1b8acca4516b1602500115c', class: "tabs__content" }, this.tabs[this.activeTab].content())));
    }
    static get is() { return "ve-tabs"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Tabs.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Tabs.styles.css"]
        };
    }
    static get properties() {
        return {
            "tabs": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TabOptions[]",
                    "resolved": "TabOptions[]",
                    "references": {
                        "TabOptions": {
                            "location": "global",
                            "id": "global::TabOptions"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "activeTab": {}
        };
    }
}
