import { h } from "@stencil/core";
export class LoadingSpinner {
    render() {
        return h("div", { key: 'ce27b1712dc9997168ce309018d4b1969c0a8a4a', class: "loading-spinner" });
    }
    static get is() { return "ve-loading-spinner"; }
    static get originalStyleUrls() {
        return {
            "$": ["./LoadingSpinner.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["LoadingSpinner.styles.css"]
        };
    }
}
