import { Engine } from "@rendley/sdk";
import { Fragment, h } from "@stencil/core";
import { autorun } from "mobx";
import { RendleyService } from "../../../../services/RendleyService";
import { MediaDataStatusEnum, RendleyStore } from "../../../../store/RendleyStore";
import { t } from "../../../../utils/translation";
import { ContextMenuStore } from "../../../../store/ContextMenuStore";
import { RedoIcon } from "../../../../assets/icons/RedoIcon";
// @ts-expect-error
import AddImage from "../../../../assets/images/add-media.png";
export class MediaPanelContainer {
    constructor() {
        this.handleOpenFileViewer = (mediaId) => {
            if (this.fileInputRef == null) {
                return;
            }
            this.fileInputRef.dataset.mediaId = mediaId;
            this.fileInputRef.value = "";
            this.fileInputRef.click();
        };
        this.handleUpload = async (e) => {
            const files = e.target.files;
            if (files == null) {
                return;
            }
            const library = Engine.getInstance().getLibrary();
            const promises = [];
            for (let i = 0; i < files.length; i++) {
                promises.push(library.addMedia(files[i]));
            }
            try {
                await Promise.all(promises);
            }
            catch (e) {
                console.log(e);
            }
        };
        this.handleReplaceFile = async (e) => {
            var _a;
            const input = e.target;
            const mediaId = input.dataset.mediaId;
            const file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
            if (!mediaId || file == null) {
                return;
            }
            RendleyService.replaceMedia(mediaId, file);
        };
        this.onContextMenu = (e, mediaId) => {
            e.preventDefault();
            ContextMenuStore.show(e.clientX, e.clientY, [
                {
                    title: "Replace",
                    icon: h(RedoIcon, { slot: "icon" }),
                    onClick: () => {
                        this.handleOpenFileViewer(mediaId);
                    },
                },
            ]);
        };
        this.onClose = undefined;
        this.data = Object.values(RendleyStore.media);
    }
    componentWillLoad() {
        this.disposeAutorun = autorun(() => {
            this.data = Object.values(RendleyStore.media);
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    async handleClickMedia(mediaId) {
        const layer = RendleyService.createLayer();
        const clip = await RendleyService.addMediaToLayer(layer.id, mediaId);
        return clip;
    }
    async handleDeleteMedia(id) {
        const library = Engine.getInstance().getLibrary();
        await library.deleteMedia(id);
    }
    render() {
        const FileViewerTriggerInput = ({ onChange }) => (h("input", { class: "empty-media-panel__file-input", ref: (el) => (this.fileInputRef = el), type: "file", hidden: true, multiple: true, accept: "image/*, video/*, audio/*,image/heic,.m3u8,audio/x-mpegurl,application/x-mpegurl,application/vnd.apple.mpegurl,audio/mpegurl,audio/wav", onChange: onChange }));
        if (!this.data.length) {
            return (h("div", { class: "empty-media-panel" }, h("div", { class: "empty-media-panel__image-container", onClick: () => this.handleOpenFileViewer() }, h("img", { src: AddImage, alt: "" })), h("p", { class: "empty-media-panel__headline" }, t("sidebar.mediaTab.emptyCollectionTitle", "アップロードされたファイルはありません。")), h("ve-btn", { class: "empty-media-panel__button", onClick: () => this.handleOpenFileViewer(), variant: "primary" }, t("common.addMedia", "アップロード")), h(FileViewerTriggerInput, { onChange: this.handleUpload.bind(this) })));
        }
        return (h(Fragment, null, h("ve-panel-grid-list-section", { title: t("sidebar.tabs.media", "Media"), class: "media-panel-container", data: this.data, visibleItemsCount: this.data.length, renderCard: (item) => (h("div", { onContextMenu: (e) => this.onContextMenu(e, item.id) }, h("ve-media-card", { isLoaded: item.status === MediaDataStatusEnum.READY, mediaData: item, onClick: () => this.handleClickMedia(item.id), onDelete: () => this.handleDeleteMedia(item.id) }))) }), h(FileViewerTriggerInput, { onChange: this.handleReplaceFile.bind(this) })));
    }
    static get is() { return "ve-media-panel-container"; }
    static get originalStyleUrls() {
        return {
            "$": ["./MediaPanelContainer.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["MediaPanelContainer.styles.css"]
        };
    }
    static get assetsDirs() { return ["assets"]; }
    static get properties() {
        return {
            "onClose": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "(() => void) | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get states() {
        return {
            "data": {}
        };
    }
}
