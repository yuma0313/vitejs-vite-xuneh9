import { h } from "@stencil/core";
export class ConfigurationPanel {
    constructor() {
        this.title = undefined;
    }
    render() {
        return (h("div", { key: '79dae6efa4089622eb2aac5e371c7df6e5268c3f', class: "configuration-panel" }, h("div", { key: '48cc39cdf7bf854fdaabecdcdf69b5e72bebb258' }, h("h3", { key: 'e9d316ae92f644b29a803b88091450c7323b6c92' }, this.title)), h("div", { key: '8e7340182f79a95a4d2dc45ec65d2fe4cb1f164a', class: "configuration-panel-content grid gap-3" }, h("slot", { key: '7845645492e31807b94c1053663d5e3ba6afafc9' }))));
    }
    static get is() { return "ve-configuration-panel"; }
    static get originalStyleUrls() {
        return {
            "$": ["./ConfigurationPanel.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ConfigurationPanel.styles.css"]
        };
    }
    static get properties() {
        return {
            "title": {
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
                "attribute": "title",
                "reflect": false
            }
        };
    }
}
