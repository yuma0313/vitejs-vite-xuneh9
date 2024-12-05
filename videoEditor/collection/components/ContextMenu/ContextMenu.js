import { h } from "@stencil/core";
import { ContextMenuStore } from "../../store/ContextMenuStore";
import { autorun } from "mobx";
export class ContextMenu {
    constructor() {
        this.position = ContextMenuStore.position;
        this.options = ContextMenuStore.options;
    }
    handleClickOutside() {
        ContextMenuStore.hide();
    }
    componentWillLoad() {
        this.disposeAutorun = autorun(() => {
            this.position = ContextMenuStore.position;
            this.options = ContextMenuStore.options;
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    render() {
        if (this.position == null) {
            return null;
        }
        const { x, y } = this.position;
        const css = {
            position: "fixed",
            left: `${x}px`,
            top: `${y}px`,
        };
        return (h("ve-portal", null, h("div", { class: "context-menu__content", style: css }, this.options.map((item, index) => (h("div", { key: "cm" + index, class: "context-menu__content-option", onClick: item.onClick }, item.icon, h("p", { class: "context-menu__content-option-title" }, item.title)))))));
    }
    static get is() { return "ve-context-menu"; }
    static get originalStyleUrls() {
        return {
            "$": ["./ContextMenu.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ContextMenu.styles.css"]
        };
    }
    static get states() {
        return {
            "position": {},
            "options": {}
        };
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "handleClickOutside",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
