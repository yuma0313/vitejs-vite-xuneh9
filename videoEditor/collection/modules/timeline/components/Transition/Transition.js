import { h } from "@stencil/core";
import { TransitionClipIcon } from "../../../../assets/icons/TransitionClipIcon";
import { autorun } from "mobx";
import { TimelineStore } from "../../../../store/TimelineStore";
import { RendleyStore } from "../../../../store/RendleyStore";
import clsx from "clsx";
import { convertTimeToUnits } from "../../../../utils/dom/convertTimeToUnits";
import { useCreateTransitionOnDrop } from "../../hooks/transitions/useCreateTransitionOnDrop";
import { ApplicationStore } from "../../../../store/ApplicationStore";
export class Transition {
    constructor() {
        this.handleCreateTransitionOnDrop = useCreateTransitionOnDrop();
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
            var _a, _b, _c, _d;
            this.handleDragLeave(event);
            try {
                const transitionId = Object.keys(TimelineStore.draggedTransitions)[0];
                if (!transitionId) {
                    return null;
                }
                let clipId = (_a = this.temporaryTransition) === null || _a === void 0 ? void 0 : _a.clipId;
                let layerId = (_b = this.temporaryTransition) === null || _b === void 0 ? void 0 : _b.layerId;
                if (this.isPermanent) {
                    const transition = ((_c = this.permanentTransition) === null || _c === void 0 ? void 0 : _c.transitionId) == null
                        ? null
                        : RendleyStore.transitions[this.permanentTransition.transitionId];
                    const clip = transition != null ? RendleyStore.clips[transition.endClipId] : null;
                    clipId = clip === null || clip === void 0 ? void 0 : clip.id;
                    if (clipId == null) {
                        return;
                    }
                    layerId = (_d = Object.values(RendleyStore.layers).find((layer) => layer.clipsIds.includes(clipId))) === null || _d === void 0 ? void 0 : _d.id;
                }
                if (clipId == null || layerId == null) {
                    return;
                }
                await this.handleCreateTransitionOnDrop({
                    transitionId,
                    clipId,
                    layerId,
                });
            }
            catch (_e) {
                return null;
            }
        };
        this.handleClick = () => {
            var _a;
            if (!this.isPermanent) {
                return;
            }
            const transition = ((_a = this.permanentTransition) === null || _a === void 0 ? void 0 : _a.transitionId) == null
                ? null
                : RendleyStore.transitions[this.permanentTransition.transitionId];
            if (transition == null) {
                return;
            }
            ApplicationStore.setSelectedTransitionId(transition.id);
        };
        this.type = null;
        this.permanentTransition = undefined;
        this.temporaryTransition = undefined;
        this.isDraggingOver = false;
        this.isVisible = true;
        this.x = 0;
        this.isSelected = false;
    }
    componentWillLoad() {
        if (this.isPermanent) {
            this.disposeAutorun = autorun(() => {
                var _a, _b;
                const timelineWidth = TimelineStore.width;
                const transition = ((_a = this.permanentTransition) === null || _a === void 0 ? void 0 : _a.transitionId) && RendleyStore.transitions[this.permanentTransition.transitionId];
                const clip = transition ? RendleyStore.clips[transition.endClipId] : null;
                this.isSelected = ApplicationStore.selectedTransitionId === ((_b = this.permanentTransition) === null || _b === void 0 ? void 0 : _b.transitionId);
                if (timelineWidth && (clip === null || clip === void 0 ? void 0 : clip.startTime) != null) {
                    this.x = convertTimeToUnits(clip.startTime + clip.leftTrim);
                }
                this.updateVisibility();
            });
        }
        if (this.isTemporary) {
            this.handleCalculatePosition();
        }
    }
    disconnectedCallback() {
        var _a;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    get isTemporary() {
        return this.type === "temporary";
    }
    get isPermanent() {
        return this.type === "permanent";
    }
    handleCalculatePosition() {
        var _a;
        if (this.isPermanent) {
            return;
        }
        const timelineWidth = TimelineStore.width;
        const startTime = (_a = this.temporaryTransition) === null || _a === void 0 ? void 0 : _a.startTime;
        if (timelineWidth && startTime) {
            this.x = convertTimeToUnits(startTime);
        }
    }
    updateVisibility() {
        var _a;
        if (this.isTemporary) {
            return;
        }
        const transition = ((_a = this.permanentTransition) === null || _a === void 0 ? void 0 : _a.transitionId) && RendleyStore.transitions[this.permanentTransition.transitionId];
        if (!transition) {
            this.isVisible = false;
            return;
        }
        const isClipBeingDragged = !!TimelineStore.draggedClips[transition.endClipId];
        this.isVisible = !isClipBeingDragged;
    }
    render() {
        return (h("div", { key: '12ac75281b6a8c82fbbd666ce8b926956ce27aad', class: clsx("transition", {
                transition__visible: this.isVisible,
            }), style: { left: `${this.x}px` }, onDragOver: this.handleDragOver, onDragLeave: this.handleDragLeave, onDrop: this.handleDrop, onClick: this.handleClick }, h("div", { key: 'a97db0d9e3f3821b57de3af3594bba65e7736de5', class: clsx("transition__content", {
                "transition__dragging-over": this.isDraggingOver,
                transition__permanent: this.isPermanent,
                transition__temporary: this.isTemporary,
                transition__selected: this.isSelected,
            }) }, h(TransitionClipIcon, { key: 'c4e653ca0c35722f31fd627ec651d821c54358a7' }))));
    }
    static get is() { return "ve-transition"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Transition.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Transition.styles.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "\"permanent\" | \"temporary\" | null",
                    "resolved": "\"permanent\" | \"temporary\" | null",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "null"
            },
            "permanentTransition": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ transitionId: string }",
                    "resolved": "undefined | { transitionId: string; }",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "temporaryTransition": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ startTime: number; layerId: string; clipId: string }",
                    "resolved": "undefined | { startTime: number; layerId: string; clipId: string; }",
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
            "isDraggingOver": {},
            "isVisible": {},
            "x": {},
            "isSelected": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "temporaryTransition",
                "methodName": "handleCalculatePosition"
            }];
    }
}
