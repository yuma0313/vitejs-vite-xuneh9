import { h, Host } from "@stencil/core";
import { getShadowRoot } from "../../utils/dom/getShadowRoot";
export class Portal {
    componentDidLoad() {
        if (this.element) {
            getShadowRoot().append(this.element);
        }
    }
    render() {
        return (h(Host, { key: 'fc179583afeb235488ef0d7363d82b612407a5f4', ref: (el) => (this.element = el) }, h("slot", { key: '0f427ec4eca92871c52f0bfcc7fa49bfef8e67f0' })));
    }
    static get is() { return "ve-portal"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Portal.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Portal.styles.css"]
        };
    }
}
