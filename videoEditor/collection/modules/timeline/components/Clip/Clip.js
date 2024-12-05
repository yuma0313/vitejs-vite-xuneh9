import { ClipTypeEnum, Engine } from "@rendley/sdk";
import { h } from "@stencil/core";
import clsx from "clsx";
import { autorun, reaction } from "mobx";
import { ApplicationStore } from "../../../../store/ApplicationStore";
import { RendleyStore } from "../../../../store/RendleyStore";
import { TimelineStore } from "../../../../store/TimelineStore";
import { convertTimeToUnits } from "../../../../utils/dom/convertTimeToUnits";
import { convertUnitsToTime } from "../../../../utils/dom/convertUnitsToTime";
import { generateClipIdentifierClass } from "../../utils/generateClipIdentifierClass";
import { InteractiveClip, ResizeDirectionEnum } from "../../utils/InteractiveClip";
import { updateAdjacency } from "../../utils/updateLayerClipsAdjacency";
import { RendleyService } from "../../../../services/RendleyService";
import { TimelineEventsEnum } from "../../types/timeline.types";
import { getShadowRoot } from "../../../../utils/dom/getShadowRoot";
import { CLIP_CLASSNAME, TIMELINE_TRACKS_CONTAINER_ID, TRACK_CLASSNAME } from "../../config/constants";
const SNAP_THRESHOLD = 10;
export class Clip {
    constructor() {
        this.initialPosition = { top: 0, height: 0, left: 0, width: 0, x: 0, clientXOffset: 0, clientYOffset: 0 };
        this.layerSnapPositions = [];
        this.clipSnapPositions = [];
        this.cachedValuesClass = class {
            constructor() {
                this.startTime = -1;
                this.duration = -1;
                this.leftTrim = -1;
                this.rightTrim = -1;
                this.trimmedDuration = -1;
                this.width = -1;
                this.x = -1;
                this.y = -1;
            }
            hasChanged(clip) {
                const retValue = this.x != clip.x ||
                    this.y != clip.y ||
                    this.width != clip.width ||
                    this.startTime != clip.startTime ||
                    this.duration != clip.duration ||
                    this.leftTrim != clip.leftTrim ||
                    this.rightTrim != clip.rightTrim ||
                    this.trimmedDuration != clip.trimmedDuration;
                this.x = clip.x;
                this.y = clip.y;
                this.width = clip.width;
                this.startTime = clip.startTime;
                this.duration = clip.duration;
                this.leftTrim = clip.leftTrim;
                this.rightTrim = clip.rightTrim;
                this.trimmedDuration = clip.trimmedDuration;
                return retValue;
            }
        };
        this.cachedValues = new this.cachedValuesClass();
        this.clipId = undefined;
        this.layerId = undefined;
        this.filename = "Unknown";
        this.thumbnail = undefined;
        this.isResizeEnabled = true;
        this.startTime = 0;
        this.duration = 0;
        this.leftTrim = 0;
        this.rightTrim = 0;
        this.trimmedDuration = 0;
        this.width = 200;
        this.x = 0;
        this.y = 0;
        this.isFocused = false;
        this.hasSuccessor = false;
        this.hasPredecessor = false;
    }
    handleUpdateStyles() {
        var _a, _b;
        if (this.elementRef == null) {
            return;
        }
        if (this.hasPredecessor && this.hasSuccessor) {
            this.elementRef.style.width = `calc(${this.width}px - 2px)`;
            this.elementRef.style.transform = `translate(calc(${this.x}px + 1px), ${this.y}px)`;
        }
        else if (this.hasSuccessor) {
            this.elementRef.style.width = `calc(${this.width}px - 1px)`;
            this.elementRef.style.transform = `translate(${this.x}px, ${this.y}px)`;
        }
        else if (this.hasPredecessor) {
            this.elementRef.style.width = `calc(${this.width}px - 1px)`;
            this.elementRef.style.transform = `translate(calc(${this.x}px + 1px), ${this.y}px)`;
        }
        else {
            this.elementRef.style.width = `${this.width}px`;
            this.elementRef.style.transform = `translate(${this.x}px, ${this.y}px)`;
        }
        (_b = (_a = this.interaction) === null || _a === void 0 ? void 0 : _a.moveable) === null || _b === void 0 ? void 0 : _b.updateRect();
    }
    handleUpdateClip() {
        this.width = convertTimeToUnits(this.trimmedDuration);
        this.x = convertTimeToUnits(this.startTime + this.leftTrim);
        RendleyStore.updateTimelineDuration();
    }
    get containerElementRef() {
        var _a, _b;
        return (_b = (_a = this.elementRef) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
    }
    componentWillLoad() {
        this.x = convertTimeToUnits(this.startTime + this.leftTrim);
        this.width = convertTimeToUnits(this.trimmedDuration);
        updateAdjacency(this.layerId);
        this.disposeReaction = reaction(() => TimelineStore.zoom, () => {
            const clip = Engine.getInstance().getClipById(this.clipId);
            if (clip == null) {
                return;
            }
            this.x = convertTimeToUnits(clip.getStartTime() + clip.getLeftTrim());
            this.width = convertTimeToUnits(clip.getTrimmedDuration());
        });
    }
    // TODO: temporary fix, figure out why disconnectedCallback gets called
    // hint: shadow vs scoped dom
    connectedCallback() {
        this.disposeAutorun = autorun(() => {
            var _a, _b, _c;
            const clip = (_a = RendleyStore.clips) === null || _a === void 0 ? void 0 : _a[this.clipId];
            if (clip == null) {
                return;
            }
            this.startTime = clip.startTime;
            this.duration = clip.duration;
            this.leftTrim = clip.leftTrim;
            this.rightTrim = clip.rightTrim;
            this.trimmedDuration = clip.trimmedDuration;
            this.hasPredecessor = (_b = clip.hasPredecessor) !== null && _b !== void 0 ? _b : false;
            this.hasSuccessor = (_c = clip.hasSuccessor) !== null && _c !== void 0 ? _c : false;
            this.isFocused = ApplicationStore.selectedClipId === this.clipId;
            this.x = convertTimeToUnits(clip.startTime + clip.leftTrim);
            this.width = convertTimeToUnits(clip.trimmedDuration);
            // if (!this.lock.has("updateAdjacencyAutoRun")) {
            // this.lock.add("updateAdjacencyAutoRun");
            if (this.cachedValues.hasChanged(clip)) {
                updateAdjacency(this.layerId);
            }
            // this.lock.delete("updateAdjacencyAutoRun");
            // }
        });
        this.handlePostUpdateClip();
    }
    disconnectedCallback() {
        var _a, _b;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
        (_b = this.disposeReaction) === null || _b === void 0 ? void 0 : _b.call(this);
    }
    componentDidLoad() {
        if (this.elementRef == null || this.containerElementRef == null) {
            return;
        }
        this.interaction = new InteractiveClip(this.elementRef, this.containerElementRef, {
            onDragStart: this.dragStart.bind(this),
            onResizeStart: this.resizeStart.bind(this),
            onDrag: this.drag.bind(this),
            onResize: this.resize.bind(this),
            onResizeEnd: this.resizeEnd.bind(this),
            onDragEnd: this.dragEnd.bind(this),
        });
        this.x = convertTimeToUnits(this.startTime + this.leftTrim);
        this.width = convertTimeToUnits(this.trimmedDuration);
        this.handleUpdateStyles();
    }
    handleFocusChange() {
        if (this.interaction == null) {
            // give the interaction enough time to mount
            setTimeout(() => {
                this.handleFocusChange();
            });
            return;
        }
        if (this.isFocused) {
            this.interaction.mount(this.focusEvent, { isResizeEnabled: this.isResizeEnabled });
        }
        else {
            this.interaction.destroy();
            this.focusEvent = undefined;
        }
        if (this.elementRef != null) {
            this.elementRef.style.zIndex = this.isFocused ? "2" : "1";
        }
    }
    drag(clientX, clientY) {
        const deltaX = clientX - this.initialPosition.left;
        let newX = this.initialPosition.x + deltaX - this.initialPosition.clientXOffset;
        let nextY = clientY - this.initialPosition.top - this.initialPosition.clientYOffset;
        const { dividerIndex, layerSnapPositionIndex } = this.findLayerSnapPosition(clientY);
        const currentClipLeft = newX;
        const currentClipRight = currentClipLeft + this.width;
        for (let i = 0; i < this.clipSnapPositions.length; i++) {
            const { x: clipX, width: clipWidth } = this.clipSnapPositions[i];
            const clipRight = clipX + clipWidth;
            const diffLeft = Math.abs(currentClipLeft - clipX);
            const diffRight = Math.abs(currentClipRight - clipRight);
            const diffRightLeft = Math.abs(currentClipRight - clipX);
            const diffLeftRight = Math.abs(currentClipLeft - clipRight);
            if (diffLeft <= SNAP_THRESHOLD) {
                // Snap the left edge of the current clip to the left edge of the target clip
                newX = clipX;
                break;
            }
            else if (diffRight <= SNAP_THRESHOLD) {
                // Snap the right edge of the current clip to the right edge of the target clip
                newX = clipRight - this.width;
                break;
            }
            else if (diffRightLeft <= SNAP_THRESHOLD) {
                // Snap the right edge of the current clip to the left edge of the target clip
                newX = clipX - this.width;
                break;
            }
            else if (diffLeftRight <= SNAP_THRESHOLD) {
                // Snap the left edge of the current clip to the right edge of the target clip
                newX = clipRight;
                break;
            }
        }
        if (layerSnapPositionIndex !== -1) {
            nextY = this.layerSnapPositions[layerSnapPositionIndex].top - this.initialPosition.top;
            this.dispatchClipDragOverDividerEvent();
        }
        if (dividerIndex !== -1) {
            this.dispatchClipDragOverDividerEvent(this.layerSnapPositions.length - dividerIndex);
        }
        this.y = nextY;
        this.x = newX;
    }
    resize(clientX, direction) {
        var _a, _b;
        if (((_b = (_a = RendleyStore.clips) === null || _a === void 0 ? void 0 : _a[this.clipId]) === null || _b === void 0 ? void 0 : _b.type) === ClipTypeEnum.SUBTITLES) {
            return;
        }
        const MARGIN_PADDING = 6;
        let deltaX = 0;
        let newWidth = this.initialPosition.width;
        if (direction === ResizeDirectionEnum.LEFT) {
            deltaX = clientX - this.initialPosition.left - MARGIN_PADDING;
            newWidth = this.initialPosition.left + this.initialPosition.width - clientX + MARGIN_PADDING;
        }
        else if (direction === ResizeDirectionEnum.RIGHT) {
            newWidth = clientX - this.initialPosition.left + MARGIN_PADDING;
            deltaX = 0;
        }
        let newX = this.initialPosition.x + deltaX;
        const currentClipLeft = newX;
        const currentClipRight = currentClipLeft + newWidth;
        for (let i = 0; i < this.clipSnapPositions.length; i++) {
            const { x: clipX, width: clipWidth } = this.clipSnapPositions[i];
            const clipRight = clipX + clipWidth;
            const diffLeft = Math.abs(currentClipLeft - clipX);
            const diffRight = Math.abs(currentClipRight - clipRight);
            const diffRightLeft = Math.abs(currentClipRight - clipX);
            const diffLeftRight = Math.abs(currentClipLeft - clipRight);
            if (direction === ResizeDirectionEnum.LEFT) {
                if (diffLeft <= SNAP_THRESHOLD) {
                    // Snap the left edge of the current clip to the left edge of the target clip
                    newX = clipX;
                    newWidth = this.initialPosition.width + (this.initialPosition.x - newX);
                    break;
                }
                else if (diffLeftRight <= SNAP_THRESHOLD) {
                    // Snap the left edge of the current clip to the right edge of the target clip
                    newX = clipRight;
                    newWidth = this.initialPosition.width + (this.initialPosition.x - newX);
                    break;
                }
            }
            else if (direction === ResizeDirectionEnum.RIGHT) {
                // Handle snapping when resizing from the right
                if (diffRight <= SNAP_THRESHOLD) {
                    // Snap the right edge of the current clip to the right edge of the target clip
                    newWidth = clipRight - currentClipLeft;
                    break;
                }
                else if (diffRightLeft <= SNAP_THRESHOLD) {
                    // Snap the right edge of the current clip to the left edge of the target clip
                    newWidth = clipX - currentClipLeft;
                    break;
                }
            }
        }
        this.x = newX;
        this.width = newWidth;
    }
    resizeStart() {
        var _a, _b;
        if (((_b = (_a = RendleyStore.clips) === null || _a === void 0 ? void 0 : _a[this.clipId]) === null || _b === void 0 ? void 0 : _b.type) === ClipTypeEnum.SUBTITLES) {
            return;
        }
        if (!this.elementRef) {
            return;
        }
        const { top, height, left, width } = this.elementRef.getBoundingClientRect();
        this.initialPosition = { top, height, left, width, x: this.x, clientXOffset: 0, clientYOffset: 0 };
        TimelineStore.setDraggingClip(this.clipId, true);
        this.setClipSnapPositions();
    }
    resizeEnd(direction, distance) {
        var _a, _b;
        const clip = RendleyService.getClipById(this.clipId);
        if (!clip)
            return;
        if (((_b = (_a = RendleyStore.clips) === null || _a === void 0 ? void 0 : _a[this.clipId]) === null || _b === void 0 ? void 0 : _b.type) === ClipTypeEnum.SUBTITLES) {
            return;
        }
        const distanceToTime = convertUnitsToTime(distance);
        if (direction === ResizeDirectionEnum.LEFT) {
            clip.setLeftTrim(clip.getLeftTrim() - distanceToTime);
        }
        else if (direction === ResizeDirectionEnum.RIGHT) {
            clip.setRightTrim(clip.getRightTrim() - distanceToTime);
        }
        this.handlePostUpdateClip();
        TimelineStore.setDraggingClip(this.clipId, false);
        this.clipSnapPositions = [];
    }
    dragStart(clientX, clientY) {
        if (!this.elementRef) {
            return;
        }
        const { top, height, left, width } = this.elementRef.getBoundingClientRect();
        this.initialPosition = {
            top,
            height,
            left,
            width,
            x: this.x,
            clientXOffset: clientX - left,
            clientYOffset: clientY - top,
        };
        TimelineStore.setDraggingClip(this.clipId, true);
        this.setLayerSnapPositions();
        this.setClipSnapPositions();
    }
    dragEnd(clientX, clientY) {
        clientX;
        const { dividerIndex, layerSnapPositionIndex } = this.findLayerSnapPosition(clientY);
        this.dispatchClipDragOverDividerEvent();
        // Update the actual startTime of the clip
        const clip = Engine.getInstance().getClipById(this.clipId);
        if (clip != null) {
            const startTime = convertUnitsToTime(this.x) - clip.getLeftTrim();
            clip.setStartTime(startTime);
        }
        if (layerSnapPositionIndex !== -1) {
            this.y = this.layerSnapPositions[layerSnapPositionIndex].top - this.initialPosition.top;
            const { layerId } = this.layerSnapPositions[layerSnapPositionIndex];
            if (this.layerId !== layerId) {
                TimelineStore.setDraggingClip(this.clipId, false);
                RendleyService.moveClipToLayer(this.clipId, layerId);
            }
            else {
                this.handlePostUpdateClip();
            }
        }
        else {
            this.y = 0;
            const layer = RendleyService.createLayer(this.layerSnapPositions.length - dividerIndex);
            TimelineStore.setDraggingClip(this.clipId, false);
            RendleyService.moveClipToLayer(this.clipId, layer.id);
        }
        this.layerSnapPositions = [];
        this.clipSnapPositions = [];
    }
    dispatchClipDragOverDividerEvent(index = -1) {
        const event = new CustomEvent(TimelineEventsEnum.CLIP_DRAG_OVER_DIVIDER, {
            detail: { clipId: this.clipId, index },
        });
        getShadowRoot().dispatchEvent(event);
    }
    findLayerSnapPosition(clientY) {
        let dividerIndex = -1;
        let layerSnapPositionIndex = -1;
        if (!this.layerSnapPositions.length) {
            return { dividerIndex, layerSnapPositionIndex };
        }
        const firstSnapPosition = this.layerSnapPositions[0];
        const lastSnapPosition = this.layerSnapPositions[this.layerSnapPositions.length - 1];
        // Check if clientY is above the first snap position
        if (clientY <= firstSnapPosition.top) {
            dividerIndex = 0;
        }
        // Check if clientY is below the last snap position
        if (clientY >= lastSnapPosition.top + lastSnapPosition.height) {
            dividerIndex = this.layerSnapPositions.length;
        }
        // return early because there is no need to check in between
        if (dividerIndex > -1) {
            return { dividerIndex, layerSnapPositionIndex };
        }
        // Check if clientY is within the snap positions
        for (let i = 0; i < this.layerSnapPositions.length; i++) {
            const { top: trackTop, height: trackHeight } = this.layerSnapPositions[i];
            const nextPosition = this.layerSnapPositions[i + 1];
            // Check if clientY is within the current track
            if (clientY >= trackTop && clientY <= trackTop + trackHeight) {
                layerSnapPositionIndex = i;
                break;
            }
            // Check if clientY is between the current track and the next track
            if (clientY >= trackTop + trackHeight && clientY <= nextPosition.top) {
                dividerIndex = i + 1;
                break;
            }
        }
        return { dividerIndex, layerSnapPositionIndex };
    }
    setLayerSnapPositions() {
        const tracks = getShadowRoot().querySelectorAll(`.${TRACK_CLASSNAME}`);
        this.layerSnapPositions = Array.from(tracks).map((track) => {
            const { top, height } = track.getBoundingClientRect();
            return { top, height, layerId: track.id };
        });
    }
    setClipSnapPositions() {
        var _a;
        const clips = getShadowRoot().querySelectorAll(`.${CLIP_CLASSNAME}`);
        const tracksContainer = getShadowRoot().getElementById(TIMELINE_TRACKS_CONTAINER_ID);
        // the padding between the track container and the timeline
        const offsetLeft = (_a = tracksContainer === null || tracksContainer === void 0 ? void 0 : tracksContainer.offsetLeft) !== null && _a !== void 0 ? _a : 0;
        this.clipSnapPositions = Array.from(clips)
            .filter((clip) => clip.id !== this.clipId)
            .map((clip) => {
            const { left, width } = clip.getBoundingClientRect();
            return { left, width, x: left - offsetLeft, clipId: clip.id };
        });
    }
    handlePostUpdateClip() {
        const clip = Engine.getInstance().getClipById(this.clipId);
        if (clip == null) {
            return;
        }
        const startTime = convertUnitsToTime(this.x) - clip.getLeftTrim();
        clip.setStartTime(startTime);
        Engine.getInstance().getTimeline().adjustClipsLayout();
        RendleyStore.updateClip(this.clipId, { startTime: clip.getStartTime() });
        this.x = convertTimeToUnits(clip.getStartTime() + clip.getLeftTrim());
        this.width = convertTimeToUnits(clip.getTrimmedDuration());
        TimelineStore.setDraggingClip(this.clipId, false);
        updateAdjacency(this.layerId);
    }
    handleMouseDown(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.isFocused) {
            return;
        }
        this.focusEvent = event;
        ApplicationStore.setSelectedClipId(this.clipId);
    }
    render() {
        return (h("div", { key: 'df8c3547ebfbb502e663d04ce265ce2d74912252', ref: (el) => (this.elementRef = el), id: this.clipId, class: clsx(CLIP_CLASSNAME, generateClipIdentifierClass(this.clipId), {
                clip__focused: this.isFocused,
                clip__predecessor: this.hasPredecessor,
                clip__successor: this.hasSuccessor,
            }), onMouseDown: this.handleMouseDown.bind(this) }, h("div", { key: '0815876aee330821342bd4300d7008906d5a88af', class: "clip__content" }, this.thumbnail != null && (h("div", { key: '851f4084840244285eb3948fb6fca43c6d11f4a6', class: "clip__thumbnail-container" }, h("div", { key: '489fcc20b35abfeddea05639cf274d9754c8e600', class: "clip__overlay" }), h("div", { key: 'aad0fb130dc5d95ed97846a6c19c62170ecf7b83', class: "clip__thumbnail", style: { backgroundImage: `url(${this.thumbnail})` } }))), h("div", { key: 'eb1da9a2b0978e8d0947deab661942f2a2f4f97c', class: "clip__content__icon" }, h("slot", { key: 'b2ed4c5482935c6beca85ead81a649680ad05489', name: "icon" })), h("div", { key: 'bf47c91a1e64ee12b52c78d50d2d656ea5c543dc', class: "clip__content__text" }, h("b", { key: '9159182922f344d594097131fdffc41896c8384b' }, this.filename)))));
    }
    static get is() { return "ve-clip"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Clip.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Clip.styles.css"]
        };
    }
    static get properties() {
        return {
            "clipId": {
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
                "attribute": "clip-id",
                "reflect": false
            },
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
            },
            "filename": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "filename",
                "reflect": false,
                "defaultValue": "\"Unknown\""
            },
            "thumbnail": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "thumbnail",
                "reflect": false
            },
            "isResizeEnabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is-resize-enabled",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "startTime": {},
            "duration": {},
            "leftTrim": {},
            "rightTrim": {},
            "trimmedDuration": {},
            "width": {},
            "x": {},
            "y": {},
            "isFocused": {},
            "hasSuccessor": {},
            "hasPredecessor": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "hasPredecessor",
                "methodName": "handleUpdateStyles"
            }, {
                "propName": "hasSuccessor",
                "methodName": "handleUpdateStyles"
            }, {
                "propName": "width",
                "methodName": "handleUpdateStyles"
            }, {
                "propName": "x",
                "methodName": "handleUpdateStyles"
            }, {
                "propName": "y",
                "methodName": "handleUpdateStyles"
            }, {
                "propName": "startTime",
                "methodName": "handleUpdateClip"
            }, {
                "propName": "leftTrim",
                "methodName": "handleUpdateClip"
            }, {
                "propName": "trimmedDuration",
                "methodName": "handleUpdateClip"
            }, {
                "propName": "duration",
                "methodName": "handleUpdateClip"
            }, {
                "propName": "isFocused",
                "methodName": "handleFocusChange"
            }];
    }
}
