import { h } from "@stencil/core";
import { InteractivePlayhead } from "../../utils/InteractivePlayhead";
import { autorun } from "mobx";
import { RendleyStore } from "../../../../store/RendleyStore";
import { convertTimeToUnits } from "../../../../utils/dom/convertTimeToUnits";
import { convertUnitsToTime } from "../../../../utils/dom/convertUnitsToTime";
import { getShadowRoot } from "../../../../utils/dom/getShadowRoot";
import { RendleyService } from "../../../../services/RendleyService";
import { TimelineStore } from "../../../../store/TimelineStore";
export class Playhead {
    constructor() {
        this.scrollPage = 0;
        this.x = 0;
    }
    componentDidLoad() {
        if (!this.elementRef) {
            return;
        }
        this.interaction = new InteractivePlayhead(this.elementRef, getShadowRoot(), {
            onDrag: this.handleDrag.bind(this),
            onDragEnd: this.handleDragEnd.bind(this),
        });
        this.interaction.mount();
        this.disposeAutorun = autorun(() => {
            const currentTime = RendleyStore.currentTime;
            const translateX = convertTimeToUnits(currentTime);
            this.x = translateX;
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    handleDrag(deltaX) {
        this.x += deltaX;
    }
    handleDragEnd() {
        const time = convertUnitsToTime(this.x);
        if (time < 0) {
            RendleyService.seek(0);
            this.x = convertTimeToUnits(0);
            return;
        }
        RendleyService.seek(time);
    }
    handleSeekingTimeRulerStart(event) {
        var _a;
        const mouseEvent = event.detail;
        RendleyService.pause();
        this.x = mouseEvent.x;
        (_a = this.interaction) === null || _a === void 0 ? void 0 : _a.dragStart(mouseEvent.event);
    }
    handleFollowPlayhead() {
        const page = Math.floor(this.x / TimelineStore.tracksContainerWidth);
        if (page !== this.scrollPage) {
            this.scrollPage = page;
            this.scrollToPage.emit(this.scrollPage);
        }
    }
    render() {
        return (h("div", { key: '8e46ff52ea2326d90ce830bdeb9f46fba4ae47a3', class: "playhead", ref: (el) => (this.elementRef = el), style: { transform: `translateX(${this.x}px)` } }, h("div", { key: '56e72e0d72c489eb70f3fcd52c32e8d4f8177f8f', class: "playhead__container" }, h("div", { key: 'ba52437c8238300540bed2afee816671d5eb8520', class: "playhead__marker" }, h("svg", { key: 'c73258ccd6092f1196e834a474515bef58bffab9', width: "13", height: "12", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: 'b8b193e8585f38b8ad6912184d8528e550864121', d: "M2 .5h9A1.5 1.5 0 0 1 12.5 2v3.736a1.5 1.5 0 0 1-.55 1.161l-4.5 3.68a1.5 1.5 0 0 1-1.9 0l-4.5-3.68a1.5 1.5 0 0 1-.55-1.16V2A1.5 1.5 0 0 1 2 .5Z", fill: "#fff", stroke: "#757575" }))), h("div", { key: '15858229526eb21b5a815d0d602e4e805dd71567', class: "playhead__handle" }))));
    }
    static get is() { return "ve-playhead"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Playhead.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Playhead.styles.css"]
        };
    }
    static get states() {
        return {
            "x": {}
        };
    }
    static get events() {
        return [{
                "method": "scrollToPage",
                "name": "scrollToPage",
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
                "propName": "x",
                "methodName": "handleFollowPlayhead"
            }];
    }
    static get listeners() {
        return [{
                "name": "seekingTimeRulerStart",
                "method": "handleSeekingTimeRulerStart",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
