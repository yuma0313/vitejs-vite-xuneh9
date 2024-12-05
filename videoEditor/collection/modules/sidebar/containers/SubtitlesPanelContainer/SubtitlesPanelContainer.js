import { h } from "@stencil/core";
import { autorun, reaction } from "mobx";
import { PlusIcon } from "../../../../assets/icons/PlusIcon";
import { ApplicationStore } from "../../../../store/ApplicationStore";
import { RendleyService } from "../../../../services/RendleyService";
import { ClipTypeEnum, Engine } from "@rendley/sdk";
import { RendleyStore } from "../../../../store/RendleyStore";
import { t } from "../../../../utils/translation";
export class SubtitlesPanelContainer {
    constructor() {
        this.subtitles = null;
        this.handleChangeSubtitle = (index, text) => {
            if (this.subtitles == null) {
                return;
            }
            this.subtitles.getTextBlocks()[index].text = text;
        };
        this.handleDeleteSubtitle = (index) => {
            if (this.subtitles == null) {
                return;
            }
            this.subtitles.removeTextBlock(index);
            this.handleUpdateSubtitlesDuration();
            if (this.subtitles.getTextBlocks().length === 0) {
                this.subtitles = null;
            }
            this.triggerRerender();
        };
        this.handleChangeIn = (index, value) => {
            if (this.subtitles == null) {
                return false;
            }
            const textBlocks = this.subtitles.getTextBlocks();
            const subtitle = textBlocks[index];
            const prevSubtitle = textBlocks[index - 1];
            const prevEndTime = prevSubtitle != null ? prevSubtitle.time + prevSubtitle.duration : 0;
            if (value < prevEndTime || value > subtitle.duration) {
                return false;
            }
            this.subtitles.updateTextBlock(index, { time: value });
            this.handleUpdateSubtitlesDuration();
            return true;
        };
        this.handleUpdateSubtitlesDuration = () => {
            const clips = Engine.getInstance().getTimeline().getClips();
            // update all the clips associated with the subtitle id
            clips === null || clips === void 0 ? void 0 : clips.forEach((clip) => {
                var _a;
                if (clip.getType() === ClipTypeEnum.SUBTITLES && clip.getSubtitlesId() === ((_a = this.subtitles) === null || _a === void 0 ? void 0 : _a.getId())) {
                    clip.updateDuration();
                }
            });
            Engine.getInstance().getTimeline().adjustClipsLayout();
        };
        this.handleChangeOut = (index, value) => {
            if (this.subtitles == null) {
                return false;
            }
            const textBlocks = this.subtitles.getTextBlocks();
            const subtitle = textBlocks[index];
            const nextSubtitle = textBlocks[index + 1];
            if (nextSubtitle != null && value > nextSubtitle.time) {
                return false;
            }
            if (value < subtitle.time) {
                return false;
            }
            const duration = value - this.subtitles.getTextBlocks()[index].time;
            if (duration < 0) {
                return false;
            }
            this.subtitles.updateTextBlock(index, { duration: duration });
            this.handleUpdateSubtitlesDuration();
            return true;
        };
        this.handleImportSrt = async (content) => {
            const clipId = await RendleyService.importSubtitlesSrt(content);
            this.handleUpdateSubtitlesDuration();
            ApplicationStore.setSelectedClipId(clipId);
        };
        this.handleAddManual = async () => {
            const clipId = await RendleyService.addManualSubtitles();
            ApplicationStore.setSelectedClipId(clipId);
        };
        this.handleMergeSubtitles = (index) => {
            if (this.subtitles == null) {
                return;
            }
            const currentTextBlock = this.subtitles.getTextBlocks()[index];
            const nextTextBlock = this.subtitles.getTextBlocks()[index + 1];
            if (currentTextBlock == null || nextTextBlock == null) {
                return;
            }
            this.subtitles.updateTextBlock(index, {
                text: `${currentTextBlock.text} ${nextTextBlock.text}`,
                duration: currentTextBlock.duration + nextTextBlock.duration,
            });
            this.subtitles.removeTextBlock(index + 1);
            this.handleUpdateSubtitlesDuration();
            this.triggerRerender();
        };
        this.triggerRerender = () => {
            // force rerender
            this.rerender++;
        };
        this.onClose = undefined;
        this.rerender = 0;
        this.activeSubtitleIndex = -1;
    }
    componentWillLoad() {
        this.disposeAutorun = autorun(() => {
            var _a, _b;
            const clip = ApplicationStore.selectedClipId ? RendleyStore.clips[ApplicationStore.selectedClipId] : null;
            if (clip == null) {
                this.subtitles = null;
                this.triggerRerender();
                return;
            }
            const subtitlesId = (_a = RendleyService.getClipById(clip.id)) === null || _a === void 0 ? void 0 : _a.getSubtitlesId();
            if (subtitlesId == null) {
                return;
            }
            this.subtitles = (_b = RendleyService.getEngine().getLibrary().getSubtitlesById(subtitlesId)) !== null && _b !== void 0 ? _b : null;
            this.triggerRerender();
        });
        this.disposeReaction = reaction(() => RendleyStore.currentTime, (currentTime) => {
            let activeIndex = -1;
            if (this.subtitles == null) {
                return;
            }
            for (let i = 0; i < this.subtitles.getTextBlocks().length; i++) {
                const subtitle = this.subtitles.getTextBlocks()[i];
                if (subtitle.time <= currentTime && subtitle.time + subtitle.duration > currentTime) {
                    activeIndex = i;
                    break;
                }
            }
            this.activeSubtitleIndex = activeIndex;
        });
    }
    componentWillUnmount() {
        var _a, _b;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
        (_b = this.disposeReaction) === null || _b === void 0 ? void 0 : _b.call(this);
    }
    handleAddSubtitle(index) {
        if (this.subtitles == null) {
            return;
        }
        const textBlocks = this.subtitles.getTextBlocks();
        const prevSubtitle = textBlocks[index - 1];
        const nextSubtitle = textBlocks[index];
        const startTime = prevSubtitle != null ? prevSubtitle.time + prevSubtitle.duration : 0;
        const duration = nextSubtitle != null ? nextSubtitle.time - startTime : 1;
        const textBlock = {
            text: "Sample",
            time: startTime,
            duration: duration,
        };
        this.subtitles.addTextBlock(textBlock, index);
        this.handleUpdateSubtitlesDuration();
        this.triggerRerender();
    }
    render() {
        if (this.subtitles == null) {
            return (h("ve-no-subtitles-section", { onAdd: this.handleAddManual, onImportSrt: this.handleImportSrt }));
        }
        return (h("div", { class: "subtitles-panel" }, h("ve-tabs", { tabs: [
                {
                    title: "Subtitles",
                    content: () => {
                        var _a;
                        return (h("div", null, (_a = this.subtitles) === null || _a === void 0 ? void 0 :
                            _a.getTextBlocks().map((subtitle, index) => (h("div", { key: `subtitle-${subtitle.time}-${subtitle.duration}` }, h("ve-subtitle-row", { subtitle: subtitle, isActive: this.activeSubtitleIndex === index, onChangeIn: (value) => this.handleChangeIn(index, value), onChangeOut: (value) => this.handleChangeOut(index, value), onChangeText: (text) => this.handleChangeSubtitle(index, text), onDelete: () => this.handleDeleteSubtitle(index) }), this.subtitles && index < this.subtitles.getTextBlocks().length - 1 && (h("ve-subtitle-row-divider", { onAdd: () => this.handleAddSubtitle(index + 1), onMerge: () => this.handleMergeSubtitles(index) }))))), h("div", { class: "subtitles-panel__add-subtitle-btn", onClick: () => { var _a, _b; return this.handleAddSubtitle((_b = (_a = this.subtitles) === null || _a === void 0 ? void 0 : _a.getTextBlocks().length) !== null && _b !== void 0 ? _b : 0); } }, h(PlusIcon, null), " ", h("span", null, t("common.addSubtitle", "Add subtitle")))));
                    },
                },
                {
                    title: "Styles",
                    content: () => h("ve-subtitles-styles-container", null),
                },
            ] })));
    }
    static get is() { return "ve-subtitles-panel-container"; }
    static get originalStyleUrls() {
        return {
            "$": ["./SubtitlesPanelContainer.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["SubtitlesPanelContainer.styles.css"]
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
            "rerender": {},
            "activeSubtitleIndex": {}
        };
    }
}
