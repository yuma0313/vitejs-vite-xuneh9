import { h } from "@stencil/core";
export class PlaceholderPanelCard {
    render() {
        return h("div", { key: '92fdf547acb2a3891189e942f6b8deaf411fcdf5', class: "placeholder-panel-card" });
    }
    static get is() { return "ve-placeholder-panel-card"; }
    static get originalStyleUrls() {
        return {
            "$": ["PlaceholderPanelCard.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["PlaceholderPanelCard.styles.css"]
        };
    }
}
