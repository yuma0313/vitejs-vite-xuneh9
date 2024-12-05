import { h } from "@stencil/core";
import { autorun } from "mobx";
import { TIMELINE_RULER_TICK_WIDTH_PX } from "../../config/config";
import { ApplicationStore } from "../../store/ApplicationStore";
import { RendleyStore } from "../../store/RendleyStore";
import { TimelineStore } from "../../store/TimelineStore";
import { TIMELINE_CONTROLS_ELEMENT_ID, TIMELINE_ELEMENT_ID, TIMELINE_TRACKS_CONTAINER_ID } from "./config/constants";
import { RendleyService } from "../../services/RendleyService";
import { convertUnitsToTime } from "../../utils/dom/convertUnitsToTime";
export class Timeline {
    constructor() {
        this.handleCreateLayerMedia = async (event, mediaId, index) => {
            const startTime = convertUnitsToTime(event.offsetX);
            const layer = RendleyService.createLayer(index);
            const clip = await RendleyService.addMediaToLayer(layer.id, mediaId, startTime);
            if (clip == null) {
                return null;
            }
            ApplicationStore.setSelectedClipId(clip.id);
        };
        this.handleCreateLayerText = async (event, title, index) => {
            const layer = RendleyService.createLayer(index);
            const startTime = convertUnitsToTime(event.offsetX);
            const clip = await RendleyService.createLottieClip({
                dataUrl: title.dataUrl,
                propertiesUrl: title.propertiesUrl,
                startTime: startTime,
                layerId: layer.id,
            });
            if (clip == null) {
                return null;
            }
            ApplicationStore.setSelectedClipId(clip.id);
        };
        this.handleWheel = (event) => {
            const container = this.timelineTracksRef;
            if (container) {
                event.preventDefault(); // Prevents the default vertical scrolling
                container.scrollLeft += event.deltaY + event.deltaX; // Adds horizontal scrolling based on the vertical scroll
            }
        };
        this.renderTrackDivider = (index) => {
            const newIndex = this.layersOrder.length - index;
            return (h("ve-track-divider", { key: `layer-divider-${newIndex}`, index: newIndex, slot: "track-divider", onDropMediaClip: (event, mediaId) => this.handleCreateLayerMedia(event, mediaId, newIndex), onDropTextClip: (event, title) => this.handleCreateLayerText(event, title, newIndex) }));
        };
        this.layersOrder = RendleyStore.layersOrder;
        this.duration = RendleyStore.duration;
        this.zoom = TimelineStore.zoom;
        this.playheadX = 0;
    }
    componentWillLoad() {
        this.disposeAutorun = autorun(() => {
            this.layersOrder = RendleyStore.layersOrder;
            this.duration = RendleyStore.duration;
            this.zoom = TimelineStore.zoom;
        });
        this.durationUpdated();
    }
    componentDidLoad() {
        this.handleScroll = () => {
            if (!this.timelineTracksRef) {
                return;
            }
            this.playheadX = -this.timelineTracksRef.scrollLeft;
            if (this.timelineTracksRef) {
                this.tracksScrollLeft.emit(this.timelineTracksRef.scrollLeft);
            }
        };
        this.addScrollSync();
        this.timelineTracksResizeObserver = new ResizeObserver(this.handleTimelineTracksResize);
        this.timelineTracksResizeObserver.observe(this.timelineTracksRef);
    }
    disconnectedCallback() {
        var _a, _b;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
        this.removeScrollSync();
        (_b = this.timelineTracksResizeObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
    }
    durationUpdated() {
        TimelineStore.setWidth(this.duration * TIMELINE_RULER_TICK_WIDTH_PX);
    }
    addScrollSync() {
        if (this.timelineTracksRef) {
            this.timelineTracksRef.addEventListener("scroll", this.handleScroll);
        }
    }
    removeScrollSync() {
        if (this.timelineTracksRef) {
            this.timelineTracksRef.removeEventListener("scroll", this.handleScroll);
        }
    }
    handleTimelineTracksResize(entries) {
        var _a, _b;
        const width = (_b = (_a = entries[0]) === null || _a === void 0 ? void 0 : _a.contentRect) === null || _b === void 0 ? void 0 : _b.width;
        if (width) {
            TimelineStore.setTracksContainerWidth(width);
        }
    }
    handleScrollToPage(event) {
        const trackOffsetWidth = TimelineStore.tracksContainerWidth;
        const page = event.detail;
        if (this.timelineTracksRef) {
            this.timelineTracksRef.scrollLeft = page * trackOffsetWidth;
        }
    }
    render() {
        const newLayersOrder = [...this.layersOrder].reverse();
        const tracksWidth = this.duration * TIMELINE_RULER_TICK_WIDTH_PX * this.zoom;
        return (h("div", { key: 'a94fdbceb3369e43f5ba07ef03f9cd9a32442ab9', id: TIMELINE_ELEMENT_ID, class: "timeline" }, h("div", { key: 'd0e766603d9138c185a1959916b506db66115ab4', id: TIMELINE_CONTROLS_ELEMENT_ID, class: "timeline__controls" }, h("ve-controls", { key: 'dc142be7f044124d858099ed676acaf2aadbcbe4' })), h("div", { key: 'f88b1245eda038473f9293eae5adf17251766e83', class: "timeline__container", onWheel: this.handleWheel }, this.layersOrder.length === 0 && h("ve-empty-timeline-button", { key: 'f36ef6b974132fe476e64ae70606a4ba60c3804e' }), h("div", { key: 'd9a5dd10ee4b75644b813f2cb1975a2386c8eefd', class: "timeline__canvas-ruler" }, h("ve-canvas-time-ruler", { key: 'e203dd7690cf5a78d9dc2f626fb84f37219e93d9' })), h("div", { key: 'cfb631793664a8dd88df5063645f069663b13979', class: "timeline__playhead", style: { transform: `translateX(calc(-50% + ${this.playheadX}px))` } }, h("ve-playhead", { key: '7848f2401e1c1e51aa06581f64d1a399db70dcf1' })), h("div", { key: 'b8989185f22bd3174bc17de97dcf22abbfa0edbc', class: "timeline__divider-top" }, this.renderTrackDivider(0)), h("div", { key: 'c9ccca49cfd558a2c2b06cc8e88181eb3d18c099', id: TIMELINE_TRACKS_CONTAINER_ID, class: "timeline__tracks", onMouseDown: () => {
                ApplicationStore.setSelectedClipId(null);
            }, ref: (el) => (this.timelineTracksRef = el) }, this.layersOrder.length > 0 && (h("div", { key: 'fd313aa2c85c13b1ad97a9665b86424207e10d85', class: "tracks", style: { minWidth: `${tracksWidth}px` } }, newLayersOrder.map((layerId, index) => (h("ve-track", { key: layerId, layerId: layerId }, index < newLayersOrder.length - 1 && this.renderTrackDivider(index + 1)))))), h("div", { key: '2fad43c81335a494bb55a9eca0f6b87dbf6b1e55', class: "timeline__void-container" }, this.renderTrackDivider(this.layersOrder.length))))));
    }
    static get is() { return "ve-timeline"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Timeline.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Timeline.styles.css"]
        };
    }
    static get states() {
        return {
            "layersOrder": {},
            "duration": {},
            "zoom": {},
            "playheadX": {}
        };
    }
    static get events() {
        return [{
                "method": "tracksScrollLeft",
                "name": "tracksScrollLeft",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "duration",
                "methodName": "durationUpdated"
            }];
    }
    static get listeners() {
        return [{
                "name": "scrollToPage",
                "method": "handleScrollToPage",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
