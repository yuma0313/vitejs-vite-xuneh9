import { Fragment, h } from "@stencil/core";
import { autorun } from "mobx";
import { RendleyStore } from "../../store/RendleyStore";
import { RendleyService } from "../../services/RendleyService";
import { ApplicationStore } from "../../store/ApplicationStore";
import { t } from "../../utils/translation";
export class RenderingLayout {
    constructor() {
        this.handleClose = () => {
            ApplicationStore.setIsRendering(false);
        };
        this.handleDownload = () => {
            if (!this.blobUrl) {
                this.handleClose();
                return;
            }
            const link = document.createElement("a");
            link.href = this.blobUrl;
            link.download = "rendley-video." + this.extension;
            link.click();
            this.handleClose();
        };
        this.progress = 0;
        this.error = RendleyStore.render.error;
        this.blobUrl = RendleyStore.render.blobUrl;
        this.extension = RendleyStore.render.extension;
    }
    componentWillLoad() {
        this.disposeAutorun = autorun(() => {
            this.progress = (RendleyStore.currentTime / RendleyService.getFitDuration()) * 100;
            this.error = RendleyStore.render.error;
            this.blobUrl = RendleyStore.render.blobUrl;
            this.extension = RendleyStore.render.extension;
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    renderRenderingContent() {
        return (h(Fragment, null, h("p", { class: "rendering-layout__modal--title" }, t("render.rendering.title", "Stay tuned!"), h("br", null), t("render.rendering.description", "Your media is getting rendered.")), h("div", { class: "rendering-layout__modal--progress", style: {
                "--progress": `${this.progress}%`,
            } })));
    }
    renderFinishedContent() {
        return (h(Fragment, null, h("p", { class: "rendering-layout__modal--title" }, t("render.success.title", "Your video was generated!"), h("br", null), t("render.success.description", "You can download it now.")), h("div", { class: "rendering-layout__modal--footer" }, h("ve-btn", { onClick: this.handleClose }, "\u9589\u3058\u308B"), h("ve-btn", { variant: "primary", onClick: this.handleDownload }, "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"))));
    }
    renderErrorContent() {
        return (h(Fragment, null, h("p", { class: "rendering-layout__modal--title" }, t("render.error.title", "Something went wrong!"), h("br", null), t("render.error.description", " We received the error and are working on it.")), h("div", { class: "rendering-layout__modal--footer" }, h("ve-btn", { onClick: this.handleClose }, "\u9589\u3058\u308B"))));
    }
    render() {
        const hasError = this.error != null;
        const hasFinishedSuccessfully = this.blobUrl != null && !hasError;
        const isRendering = !hasFinishedSuccessfully && !hasError;
        return (h("div", { key: '6f8300ada120f3e3a967385b690903b2bb9d2482', class: "rendering-layout" }, h("div", { key: 'cfe9af12e7c041568ce1ab38ece5ea42c490ef32', class: "rendering-layout__modal" }, h("div", { key: '5a3c2ede5b6cec6ad33bbd09894c3f4450326939', class: "rendering-layout__modal--gradient" }), h("div", { key: '588143ffa71908b6e532c3d8369e751ddafe7583', class: "rendering-layout__modal--logo-background" }, h("ve-logo", { key: 'b51bdcf1181130cc1a0e5d85da4d1cd71b22facb' })), isRendering && this.renderRenderingContent(), hasFinishedSuccessfully && this.renderFinishedContent(), hasError && this.renderErrorContent())));
    }
    static get is() { return "ve-rendering-layout"; }
    static get originalStyleUrls() {
        return {
            "$": ["RenderingLayout.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["RenderingLayout.styles.css"]
        };
    }
    static get states() {
        return {
            "progress": {},
            "error": {},
            "blobUrl": {},
            "extension": {}
        };
    }
}
