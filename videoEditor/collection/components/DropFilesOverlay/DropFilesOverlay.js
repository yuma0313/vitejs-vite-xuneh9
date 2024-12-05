import { h } from "@stencil/core";
export class DropFilesOverlay {
    render() {
        return (h("div", { key: '796a5d231b8ac362565f793efbe89547d9807ea7', class: "drag-overlay" }, h("div", { key: '5984054ce187db37a837076771c6b4c7a5229e6d', class: "drag-overlay__content" })));
    }
    static get is() { return "ve-drag-drop-overlay"; }
    static get originalStyleUrls() {
        return {
            "$": ["DropFilesOverlay.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["DropFilesOverlay.styles.css"]
        };
    }
}
