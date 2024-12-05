import { h } from "@stencil/core";
import { LoadingIcon } from "../../../../assets/icons/LoadingIcons";
export class CardLoadingOverlay {
    render() {
        return (h("div", { key: '4d68985feca9f347d3885e9e1d0d3aba61ecd0c9', class: "card-loading-overlay" }, h("slot", { key: 'b9d3654c10af0bcbf0238ef81c93ff28a86e7a30' }), h("div", { key: '4aa255300e27c2dc35b3386f7d3b528d514286ed', class: "card-loading-overlay__icon", title: "Loading" }, h(LoadingIcon, { key: '6be79fb7b2337fbe9b4ec5447097d74e73122f32' }))));
    }
    static get is() { return "ve-card-loading-overlay"; }
    static get originalStyleUrls() {
        return {
            "$": ["CardLoadingOverlay.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["CardLoadingOverlay.styles.css"]
        };
    }
}
