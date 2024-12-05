import { Engine } from "@rendley/sdk";
import { h } from "@stencil/core";
import { CirclePlus } from "../../../../assets/icons/CirclePlus";
import { RendleyService } from "../../../../services/RendleyService";
import clsx from "clsx";
import { ApplicationStore } from "../../../../store/ApplicationStore";
import { RendleyStore } from "../../../../store/RendleyStore";
import { convertUnitsToTime } from "../../../../utils/dom/convertUnitsToTime";
export class EmptyTimelineButton {
    constructor() {
        this.handleClickUpload = () => {
            if (this.fileInputRef == null) {
                return;
            }
            this.fileInputRef.value = "";
            this.fileInputRef.click();
        };
        this.handleUpload = async (e) => {
            var _a;
            const file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
            if (file == null) {
                return;
            }
            const library = Engine.getInstance().getLibrary();
            try {
                const mediaId = await library.addMedia(file);
                if (mediaId == null) {
                    return;
                }
                const layer = RendleyService.createLayer();
                const clip = await RendleyService.addMediaToLayer(layer.id, mediaId, 0);
                if (clip != null) {
                    ApplicationStore.setSelectedClipId(clip.id);
                }
            }
            catch (error) {
                console.error(error);
                return;
            }
        };
        this.handleDragOver = (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (!this.isDraggingOver) {
                this.isDraggingOver = true;
            }
        };
        this.handleDragLeave = (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.isDraggingOver = false;
        };
        this.handleDrop = async (event) => {
            this.handleDragLeave(event);
            try {
                const draggingObject = ApplicationStore.draggingObject;
                if (!draggingObject) {
                    return null;
                }
                if (draggingObject.type === "media") {
                    const layer = RendleyService.createLayer();
                    const mediaId = draggingObject.payload.id;
                    const startTime = convertUnitsToTime(event.offsetX);
                    await RendleyService.addMediaToLayer(layer.id, mediaId, startTime);
                }
                if (draggingObject.type === "text-preset") {
                    const title = draggingObject.payload;
                    const layer = RendleyService.createLayer();
                    const clip = await RendleyService.createLottieClip({
                        dataUrl: title.dataUrl,
                        propertiesUrl: title.propertiesUrl,
                        startTime: RendleyStore.currentTime,
                        layerId: layer.id,
                    });
                    if (clip == null) {
                        return;
                    }
                    ApplicationStore.setSelectedClipId(clip.id);
                }
            }
            catch (_a) {
                return null;
            }
        };
        this.onUploadClip = undefined;
        this.isDraggingOver = false;
    }
    render() {
        return (h("div", { key: 'bc969114e1f46ece0f4c6e4f7805db4f16d27df9', class: clsx("empty-timeline-button", {
                "empty-timeline-button__dragging-over": this.isDraggingOver,
            }), onClick: this.handleClickUpload, onDragOver: this.handleDragOver, onDragLeave: this.handleDragLeave, onDrop: this.handleDrop }, h(CirclePlus, { key: '6510f73d7cd8c2800c2d52b04f95ddf13458dc92' }), h("p", { key: '5fd88c784e91c23bd0ccc7b1d2cdd74915101403', class: "empty-timeline-button__text" }, "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"), h("input", { key: '56d4587a1695bcdad3c13a9a730fae105d729e22', class: "empty-timeline-button__file-input", ref: (el) => (this.fileInputRef = el), type: "file", hidden: true, accept: "image/*, video/*, audio/*", onChange: this.handleUpload.bind(this) })));
    }
    static get is() { return "ve-empty-timeline-button"; }
    static get originalStyleUrls() {
        return {
            "$": ["./EmptyTimelineButton.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["EmptyTimelineButton.styles.css"]
        };
    }
    static get properties() {
        return {
            "onUploadClip": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(event: DragEvent, mediaId: string) => void",
                    "resolved": "((event: DragEvent, mediaId: string) => void) | undefined",
                    "references": {
                        "DragEvent": {
                            "location": "global",
                            "id": "global::DragEvent"
                        }
                    }
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
            "isDraggingOver": {}
        };
    }
}
