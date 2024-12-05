import { h } from "@stencil/core";
export class Range {
    render() {
        return h("input", { key: 'c43d18167891bacae22fa8bfa70b6270c264c5a9', class: "range", type: "range" });
    }
    static get is() { return "ve-range"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Range.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Range.styles.css"]
        };
    }
}
