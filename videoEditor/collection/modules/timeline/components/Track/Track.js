import { ClipTypeEnum } from "@rendley/sdk";
import { h } from "@stencil/core";
import { RendleyStore } from "../../../../store/RendleyStore";
import { autorun } from "mobx";
import { useCreateDropClipPlaceholder } from "../../hooks/tracks/useCreateDropClipPlaceholder";
import { TRACK_CLASSNAME } from "../../config/constants";
import { ApplicationStore } from "../../../../store/ApplicationStore";
import { RendleyService } from "../../../../services/RendleyService";
import { TimelineService } from "../../services/TimelineService";
import { convertUnitsToTime } from "../../../../utils/dom/convertUnitsToTime";
export class Track {
    constructor() {
        this.placeholderRef = null;
        this.createDropClipPlaceholder = useCreateDropClipPlaceholder(() => this.placeholderRef);
        this.handleDrop = async (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.createDropClipPlaceholder.onDragLeave(event);
            try {
                const draggingObject = ApplicationStore.draggingObject;
                let clipId;
                if (!draggingObject) {
                    return null;
                }
                if (draggingObject.type === "media") {
                    const mediaId = draggingObject.payload.id;
                    const startTime = convertUnitsToTime(event.offsetX);
                    const clip = await RendleyService.addMediaToLayer(this.layerId, mediaId, startTime);
                    clipId = clip === null || clip === void 0 ? void 0 : clip.id;
                }
                if (draggingObject.type === "text-preset") {
                    const title = draggingObject.payload;
                    const startTime = convertUnitsToTime(event.offsetX);
                    const clip = await RendleyService.createLottieClip({
                        dataUrl: title.dataUrl,
                        propertiesUrl: title.propertiesUrl,
                        startTime,
                        layerId: this.layerId,
                    });
                    clipId = clip === null || clip === void 0 ? void 0 : clip.id;
                }
                if (clipId != null) {
                    ApplicationStore.setSelectedClipId(clipId);
                }
            }
            catch (_a) {
                return null;
            }
        };
        this.renderClip = (clipId, index) => {
            const clip = this.clips[clipId];
            switch (clip.type) {
                case ClipTypeEnum.GIF:
                case ClipTypeEnum.VIDEO:
                    return h("ve-video-clip", { key: `${clipId}-${index}`, clipId: clip.id, layerId: this.layerId });
                case ClipTypeEnum.AUDIO:
                    return h("ve-audio-clip", { key: `${clipId}-${index}`, clipId: clip.id, layerId: this.layerId });
                case ClipTypeEnum.IMAGE:
                    return h("ve-image-clip", { key: `${clipId}-${index}`, clipId: clip.id, layerId: this.layerId });
                case ClipTypeEnum.HTML_TEXT:
                case ClipTypeEnum.TEXT:
                    return h("ve-text-clip", { key: `${clipId}-${index}`, clipId: clip.id, layerId: this.layerId });
                case ClipTypeEnum.SHAPE:
                    return h("ve-shape-clip", { key: `${clipId}-${index}`, clipId: clip.id, layerId: this.layerId });
                case ClipTypeEnum.SUBTITLES:
                    return h("ve-subtitles-clip", { key: `${clipId}-${index}`, clipId: clip.id, layerId: this.layerId });
                case ClipTypeEnum.LOTTIE:
                    return h("ve-lottie-clip", { key: `${clipId}-${index}`, clipId: clip.id, layerId: this.layerId });
                default:
                    return null;
            }
        };
        this.renderTransition = (transitionId) => {
            return h("ve-transition", { key: transitionId, type: "permanent", permanentTransition: { transitionId } });
        };
        this.renderTransitionPlaceholder = ({ startTime, layerId, clipId }) => {
            return h("ve-transition", { key: startTime, type: "temporary", temporaryTransition: { startTime, layerId, clipId } });
        };
        this.handleDragEnter = (event) => {
            event.preventDefault();
            event.stopPropagation();
            return this.createDropClipPlaceholder.onDragEnter(event);
        };
        this.handleDragOver = (event) => {
            event.preventDefault();
            event.stopPropagation();
            return this.createDropClipPlaceholder.onDragOver(event);
        };
        this.handleDragLeave = (event) => {
            event.preventDefault();
            event.stopPropagation();
            return this.createDropClipPlaceholder.onDragLeave(event);
        };
        this.layerId = undefined;
        this.temporaryTransitions = [];
        this.clipsIds = [];
        this.transitionIds = [];
        this.clips = {};
    }
    componentWillLoad() {
        this.disposeAutorun = autorun(() => {
            var _a;
            const layer = RendleyStore.layers[this.layerId];
            if (!layer) {
                (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
                return;
            }
            this.temporaryTransitions = TimelineService.getTemporaryTransitions(this.layerId);
            this.clipsIds = layer.clipsIds;
            this.transitionIds = layer.transitionIds;
            this.clips = this.clipsIds.reduce((acc, cv) => {
                acc[cv] = RendleyStore.clips[cv];
                return acc;
            }, {});
        });
    }
    render() {
        return (h("div", { key: '4936e63e1d33c847b8a4a47df53f0214b36dd665', id: this.layerId, class: `${TRACK_CLASSNAME} ${TRACK_CLASSNAME}-${this.layerId}` }, h("div", { key: '8196fc51d963cdccc538d7a829c13d4eb57cc8ab', class: "track__content", onDragEnter: this.handleDragEnter, onDragOver: this.handleDragOver, onDrop: this.handleDrop, onDragLeave: this.handleDragLeave }, h("div", { key: '76de6437d2e5b0d3da1926ba0c1e8aed75a7c150', ref: (el) => (this.placeholderRef = el), class: "track__drop-clip-placeholder" }), this.clipsIds.map(this.renderClip), this.transitionIds.map(this.renderTransition), this.temporaryTransitions.map(this.renderTransitionPlaceholder)), h("slot", { key: '191a148d75d39db39f5ae5944684df159ce8e2de', name: "track-divider" })));
    }
    static get is() { return "ve-track"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Track.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Track.styles.css"]
        };
    }
    static get properties() {
        return {
            "layerId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "layer-id",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "temporaryTransitions": {},
            "clipsIds": {},
            "transitionIds": {},
            "clips": {}
        };
    }
}
