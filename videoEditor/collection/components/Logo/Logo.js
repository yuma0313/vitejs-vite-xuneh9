import { h } from "@stencil/core";
export class Logo {
    constructor() {
        this.width = 40;
        this.height = 41;
    }
    render() {
        return (h("svg", { key: '7a8e898cfe157ca49adfc20570991cdd8d7c1a1b', width: this.width, height: this.height, viewBox: "0 0 40 41", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: 'b68779f6cd333c280f03fa39efa310a6fc6842b9', d: "M21.9727 1.68539C21.9727 1.2259 22.5355 0.99943 22.8576 1.32928L39.6966 18.5684C39.892 18.7687 40.0013 19.0365 40.0013 19.3155V40.2267C40.0013 40.6861 39.4385 40.9126 39.1163 40.5827L22.2776 23.3436C22.0819 23.1433 21.9727 22.8755 21.9727 22.5967V1.68539Z", fill: "#7664E9" }), h("path", { key: '7445058789f8ac559746efe14f3f9ad66d1ae54e', d: "M10.7969 1.2518C10.7969 0.792302 11.3597 0.565835 11.6819 0.895688L28.4769 18.09C28.7006 18.319 28.8256 18.6253 28.8256 18.9443V39.793C28.8256 40.2526 28.2627 40.479 27.9406 40.1492L11.1017 22.9099C10.9062 22.7098 10.7969 22.4418 10.7969 22.1631V1.2518Z", fill: "#FF63A1" }), h("path", { key: 'cff8e888e783ffd564d0bb66616306ef40cdb125', d: "M0 1.68539C0 1.2259 0.562814 0.99943 0.885006 1.32928L17.7239 18.5684C17.9194 18.7687 18.0286 19.0365 18.0286 19.3155V40.2267C18.0286 40.6861 17.4658 40.9126 17.1437 40.5827L0.304862 23.3436C0.109344 23.1433 0 22.8755 0 22.5967V1.68539Z", fill: "#FFA928" })));
    }
    static get is() { return "ve-logo"; }
    static get properties() {
        return {
            "width": {
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
                "attribute": "width",
                "reflect": false,
                "defaultValue": "40"
            },
            "height": {
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
                "attribute": "height",
                "reflect": false,
                "defaultValue": "41"
            }
        };
    }
}
