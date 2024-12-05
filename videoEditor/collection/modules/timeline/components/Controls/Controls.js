import { h } from "@stencil/core";
import { autorun } from "mobx";
import { PauseIcon } from "../../../../assets/icons/PauseIcon";
import { PlayIcon } from "../../../../assets/icons/PlayIcon";
import { RedoIcon } from "../../../../assets/icons/RedoIcon";
import { ScissorsIcon } from "../../../../assets/icons/ScissorsIcon";
import { TrashIcon } from "../../../../assets/icons/TrashIcon";
import { UndoIcon } from "../../../../assets/icons/UndoIcon";
import { ZoomInIcon } from "../../../../assets/icons/ZoomInIcon";
import { ZoomOutIcon } from "../../../../assets/icons/ZoomOutIcon";
import { RendleyService } from "../../../../services/RendleyService";
import { ApplicationStore } from "../../../../store/ApplicationStore";
import { RendleyStore } from "../../../../store/RendleyStore";
import { TimelineStore } from "../../../../store/TimelineStore";
import { secondsToTimecode } from "../../../../utils/secondsToTimecode";
export class Controls {
    constructor() {
        this.handleSplit = () => {
            return RendleyService.splitAtCurrentTime();
        };
        this.decrementZoom = () => {
            TimelineStore.setZoom(TimelineStore.zoom - 0.1);
        };
        this.incrementZoom = () => {
            TimelineStore.setZoom(TimelineStore.zoom + 0.1);
        };
        this.handleStop = () => {
            if (this.isPlaying) {
                RendleyService.getEngine().pause();
            }
            RendleyService.getEngine().seek(0);
        };
        this.isPlaying = RendleyStore.isPlaying;
        this.displayTime = secondsToTimecode(RendleyStore.currentTime, true);
        this.selectedClipId = ApplicationStore.selectedClipId;
        this.selectedTransitionId = ApplicationStore.selectedTransitionId;
    }
    componentWillLoad() {
        this.disposeAutorun = autorun(() => {
            this.isPlaying = RendleyStore.isPlaying;
            this.selectedClipId = ApplicationStore.selectedClipId;
            this.selectedTransitionId = ApplicationStore.selectedTransitionId;
            this.displayTime = secondsToTimecode(RendleyStore.currentTime, true);
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    handlePlay() {
        return RendleyService.play();
    }
    handlePause() {
        return RendleyService.pause();
    }
    handleTrash() {
        return RendleyService.deleteAtCurrentTime();
    }
    render() {
        const isClipSelected = this.selectedClipId != null;
        const isTransitionSelected = this.selectedTransitionId != null;
        const isSplitEnabled = isClipSelected;
        const isTrashEnabled = isClipSelected || isTransitionSelected;
        return (h("ve-paper", { key: '8755d79073ac7494ae1628f015f348d32510f0b7' }, h("div", { key: 'bd0d8720ea9ad6ab154f8d8b144cf4f9dda3201e', class: "controls" }, h("div", { key: 'd7ec5c52a87199c3395f5071f9f61e9fdda6af2b', class: "controls__section" }, h("ve-btn", { key: '375608818a592ce31ba0593346b08822f709f055', disabled: !isSplitEnabled, onClick: this.handleSplit }, h(ScissorsIcon, { key: '2b710685303faaf42ca872ea762042401eea056e', slot: "icon" })), h("ve-btn", { key: 'c8fc2378ff16e11083cb7a66f620cee96c199fee', disabled: !isTrashEnabled, onClick: this.handleTrash }, h(TrashIcon, { key: '0dbcf797191938d60ab80d1b82cb1f7d6217bc6e', slot: "icon" }))), h("div", { key: '40479c7c973a767c315693d296cc473f93b30ba7', class: "controls__section" }, h("ve-btn", { key: '49af99b833e39d922c2515722d1dc06f10e4be5a', onClick: this.handleStop }, h("div", { key: 'c2666ff880bfa7a5f8fb04ac4f1b97d06e20dbaa', slot: "icon", class: "controls__section--stop-btn" })), this.isPlaying ? (h("ve-btn", { onClick: this.handlePause }, h(PauseIcon, { slot: "icon" }))) : (h("ve-btn", { onClick: this.handlePlay }, h(PlayIcon, { slot: "icon" }))), h("span", { key: '2c59fd50ea0cc4611ad0a60856645835afe0d7c1', class: "controls__playback__time" }, this.displayTime)), h("div", { key: 'e1e09d9f1fe6a502fb898b2e0e130ceecfcbca6e', class: "controls__section" }, h("ve-btn", { key: 'ec18ad938ec048f80b2b036fd78313b39605062e', disabled: true, "data-action": "history" }, h(UndoIcon, { key: '57a2a9de5c4b9121e27ae2a2358618e8509fe9e8', slot: "icon" })), h("ve-btn", { key: '00fd31e4b7564219688eeb009d1322145b98a268', disabled: true, "data-action": "history" }, h(RedoIcon, { key: '339cf7118a6bcc5595f95860af2fc15416fc401c', slot: "icon" })), h("ve-btn", { key: '20a418613b7ee8951ad4cc8ea5a0760adfd8dae4', onClick: this.decrementZoom }, h(ZoomOutIcon, { key: '6abd925d543bb92dc3650db55c31041c0e8b1c12', slot: "icon" })), h("ve-btn", { key: 'd265bc8c36757d6984aa48720fe854c694017048', onClick: this.incrementZoom }, h(ZoomInIcon, { key: '7d97551d308a47a58b3baa1ecc8027936aaa956f', slot: "icon" }))))));
    }
    static get is() { return "ve-controls"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Controls.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Controls.styles.css"]
        };
    }
    static get states() {
        return {
            "isPlaying": {},
            "displayTime": {},
            "selectedClipId": {},
            "selectedTransitionId": {}
        };
    }
}
