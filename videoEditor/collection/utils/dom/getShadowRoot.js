import { getDomRoot } from "./getDomRoom";
export function getShadowRoot() {
    var _a;
    return (_a = getDomRoot()) === null || _a === void 0 ? void 0 : _a.shadowRoot;
}
