import { h } from "@stencil/core";
import { TimelineStore } from "../../../../store/TimelineStore";
import { ApplicationStore } from "../../../../store/ApplicationStore";
import { t } from "../../../../utils/translation";
export class TransitionsPanelContainer {
    constructor() {
        this.handleDragStart = (transitionId) => {
            TimelineStore.setDraggingTransition(transitionId, true);
        };
        this.handleDragEnd = (transitionId) => {
            TimelineStore.setDraggingTransition(transitionId, false);
        };
        this.onClose = undefined;
        this.data = [];
    }
    componentWillLoad() {
        this.data = Object.values(ApplicationStore.transitions);
    }
    render() {
        return (h("ve-panel-grid-list-section", { key: 'f54c54477e3bb1d136df37319e8d02a9a789e7e5', title: t("sidebar.tabs.transitions", "Transitions"), data: this.data, visibleItemsCount: this.data.length, renderCard: (item) => (h("ve-draggable", { onDragStart: () => this.handleDragStart(item.id), onDragEnd: () => this.handleDragEnd(item.id) }, h("ve-effect-showcase-card", { name: item.label, imageUrl: item.thumbnailUrl, videoUrl: item.videoPreviewUrl }))) }));
    }
    static get is() { return "ve-transitions-panel-container"; }
    static get originalStyleUrls() {
        return {
            "$": ["./TransitionsPanelContainer.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["TransitionsPanelContainer.styles.css"]
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
            "data": {}
        };
    }
}
