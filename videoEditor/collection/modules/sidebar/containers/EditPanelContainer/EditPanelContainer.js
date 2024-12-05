import { ClipTypeEnum } from "@rendley/sdk";
import { h } from "@stencil/core";
import { reaction } from "mobx";
import { RendleyStore } from "../../../../store/RendleyStore";
import { ApplicationStore } from "../../../../store/ApplicationStore";
export class EditPanelContainer {
    constructor() {
        this.onClose = undefined;
        this.selectedClip = null;
    }
    componentWillLoad() {
        const clipId = ApplicationStore.selectedClipId;
        if (!clipId) {
            this.selectedClip = null;
            return;
        }
        const type = RendleyStore.clips[clipId].type;
        this.selectedClip = {
            id: clipId,
            type,
        };
        this.disposeReaction = reaction(() => ({
            selectedClipId: ApplicationStore.selectedClipId,
        }), (payload) => {
            const clipId = payload.selectedClipId;
            if (!clipId) {
                this.selectedClip = null;
                return;
            }
            const type = RendleyStore.clips[clipId].type;
            this.selectedClip = {
                id: clipId,
                type,
            };
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.disposeReaction) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    render() {
        var _a;
        switch ((_a = this.selectedClip) === null || _a === void 0 ? void 0 : _a.type) {
            // case ClipTypeEnum.VIDEO:
            //   return <ve-edit-video-panel />;
            // case ClipTypeEnum.IMAGE:
            //   return <ve-edit-image-panel />;
            case ClipTypeEnum.TEXT:
                return h("ve-edit-text-panel", { clipId: this.selectedClip.id });
            case ClipTypeEnum.LOTTIE:
                return h("ve-edit-lottie-panel", { clipId: this.selectedClip.id });
            // case ClipTypeEnum.AUDIO:
            //   return <ve-edit-audio-panel />;
            // case GIF!?
            default:
                return null;
        }
    }
    static get is() { return "ve-edit-panel-container"; }
    static get originalStyleUrls() {
        return {
            "$": ["./EditPanelContainer.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["EditPanelContainer.styles.css"]
        };
    }
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
            "selectedClip": {}
        };
    }
}
