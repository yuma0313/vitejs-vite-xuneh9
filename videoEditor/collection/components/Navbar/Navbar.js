import { h } from "@stencil/core";
import { NAVBAR_ELEMENT_ID } from "./constants/config";
import { Engine } from "@rendley/sdk";
import { RendleyStore } from "../../store/RendleyStore";
import { autorun } from "mobx";
import { ApplicationStore } from "../../store/ApplicationStore";
import { RendleyService } from "../../services/RendleyService";
import { SunIcon } from "../../assets/icons/SunIcon";
import { MoonIcon } from "../../assets/icons/MoonIcon.tsx";
export class Navbar {
    constructor() {
        this.handleChangeBackgroundColor = (color) => {
            Engine.getInstance().getDisplay().setBackgroundColor(color);
        };
        this.exportHandler = async () => {
            if (!this.getIsExportEnabled()) {
                return;
            }
            try {
                ApplicationStore.setSelectedClipId(null);
                ApplicationStore.setIsRendering(true);
                if (RendleyStore.render.blobUrl != null) {
                    URL.revokeObjectURL(RendleyStore.render.blobUrl);
                }
                RendleyStore.resetRender();
                const result = await RendleyService.export();
                if (result == null) {
                    throw new Error("Something went wrong");
                }
                RendleyStore.updateRender({ blobUrl: URL.createObjectURL(result.blob), extension: result.extension });
            }
            catch (_a) {
                RendleyStore.updateRender({ error: "Rendering failed" });
            }
        };
        this.handleToggleTheme = () => {
            ApplicationStore.setTheme(this.theme === "dark" ? "light" : "dark");
        };
        this.backgroundColor = RendleyStore.display.backgroundColor;
        this.theme = ApplicationStore.theme;
    }
    componentWillLoad() {
        this.disposeAutorun = autorun(() => {
            this.theme = ApplicationStore.theme;
            this.backgroundColor = RendleyStore.display.backgroundColor;
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    getIsExportEnabled() {
        return typeof VideoEncoder !== "undefined";
    }
    render() {
        const isExportEnabled = this.getIsExportEnabled();
        return (h("div", { key: 'ad7b20eed3beff8a6cd163898cbc586c740c62ec', class: "navbar", id: NAVBAR_ELEMENT_ID }, h("div", { key: 'e88af361154b9b640c2eddfe0278fe2d3998ac5f', class: "navbar__section" }, h("ve-btn", { key: '5b904995495a78073fd43473e7c8b3a2ab8ea4c6', onClick: this.handleToggleTheme }, this.theme === "dark" ? h(SunIcon, null) : h(MoonIcon, null)), h("div", { key: '9aef8fa9d5d92dc2ccaf4f7bd0693bfb0c75c17b', class: "navbar__section__background" }, h("ve-color-picker", { key: 'dc96a2d94f626bcdfa0d099d49d48f8b7d759247', color: this.backgroundColor, onChangeColor: this.handleChangeBackgroundColor }), h("span", { key: '59f3a3c2e6c7d0512b2d039c1debc00ca5060227', class: "navbar__section__background-label" }, "\u80CC\u666F\u8272"))), h("div", { key: '3de8a1ede9beca14c04367088ea9da54bff11b55', class: "navbar__section" }, h("ve-aspect-ratio-selector", { key: '1246f8f61eba603da7e8de3da2cbbdf8f592ed91' }), h("ve-btn", { key: 'f359e152e7225d792a88c916d7c0189ff5acccbc', disabled: !isExportEnabled, variant: "primary", onClick: this.exportHandler }, "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"))));
    }
    static get is() { return "ve-navbar"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Navbar.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Navbar.styles.css"]
        };
    }
    static get states() {
        return {
            "backgroundColor": {},
            "theme": {}
        };
    }
}
