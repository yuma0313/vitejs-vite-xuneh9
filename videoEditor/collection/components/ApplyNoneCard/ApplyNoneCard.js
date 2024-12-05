import { h } from "@stencil/core";
import { BanIcon } from "../../assets/icons/BanIcon";
export class ApplyNoneCard {
    render() {
        return (h("div", { key: '121b30440da0d301a65758caba1efeabdd4f6f99', class: "apply-none-card" }, h(BanIcon, { key: '838f063d5c122ffec360fdb8a3062c94c69936b9' })));
    }
    static get is() { return "ve-apply-none-card"; }
    static get originalStyleUrls() {
        return {
            "$": ["ApplyNoneCard.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ApplyNoneCard.styles.css"]
        };
    }
}
