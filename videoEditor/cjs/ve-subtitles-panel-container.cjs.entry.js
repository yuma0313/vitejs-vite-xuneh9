'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2d7e747d.js');
const ApplicationStore = require('./ApplicationStore-a449587b.js');
const PlusIcon = require('./PlusIcon-a7bcb6a0.js');
const RendleyService = require('./RendleyService-b0901392.js');
const RendleyStore = require('./RendleyStore-63f6242b.js');
const translation = require('./translation-a01c6ba3.js');

const subtitlesPanelContainerStylesCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.flex{display:flex}.flex-col{flex-direction:column}.justify-center{justify-content:center}.items-center{align-items:center}.w-full{width:100%}.h-full{height:100%}.w-screen{width:100vw}.h-screen{height:100vh}.flex-grow{flex-grow:1}.absolute{position:absolute}.relative{position:relative}.text-elipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-center{text-align:center}.visibility-visible-important{visibility:visible !important}.visibility-hidden-important{visibility:hidden !important}.spacer-1{height:1rem;width:100%}.spacer-2{height:2rem;width:100%}.grid{display:grid;grid-template-columns:repeat(12, 1fr)}.grid.gap-1{grid-gap:5px}.grid.gap-2{grid-gap:10px}.grid.gap-3{grid-gap:15px}.grid.gap-4{grid-gap:20px}.grid.gap-5{grid-gap:25px}.col-span-1{grid-column:span 1}.col-span-2{grid-column:span 2}.col-span-3{grid-column:span 3}.col-span-4{grid-column:span 4}.col-span-5{grid-column:span 5}.col-span-6{grid-column:span 6}.col-span-7{grid-column:span 7}.col-span-8{grid-column:span 8}.col-span-9{grid-column:span 9}.col-span-10{grid-column:span 10}.col-span-11{grid-column:span 11}.col-span-12{grid-column:span 12}@media (min-width: 576px){.col-sm-span-1{grid-column:span 1}.col-sm-span-2{grid-column:span 2}.col-sm-span-3{grid-column:span 3}.col-sm-span-4{grid-column:span 4}.col-sm-span-5{grid-column:span 5}.col-sm-span-6{grid-column:span 6}.col-sm-span-7{grid-column:span 7}.col-sm-span-8{grid-column:span 8}.col-sm-span-9{grid-column:span 9}.col-sm-span-10{grid-column:span 10}.col-sm-span-11{grid-column:span 11}.col-sm-span-12{grid-column:span 12}}@media (min-width: 768px){.col-md-span-1{grid-column:span 1}.col-md-span-2{grid-column:span 2}.col-md-span-3{grid-column:span 3}.col-md-span-4{grid-column:span 4}.col-md-span-5{grid-column:span 5}.col-md-span-6{grid-column:span 6}.col-md-span-7{grid-column:span 7}.col-md-span-8{grid-column:span 8}.col-md-span-9{grid-column:span 9}.col-md-span-10{grid-column:span 10}.col-md-span-11{grid-column:span 11}.col-md-span-12{grid-column:span 12}}@media (min-width: 992px){.col-lg-span-1{grid-column:span 1}.col-lg-span-2{grid-column:span 2}.col-lg-span-3{grid-column:span 3}.col-lg-span-4{grid-column:span 4}.col-lg-span-5{grid-column:span 5}.col-lg-span-6{grid-column:span 6}.col-lg-span-7{grid-column:span 7}.col-lg-span-8{grid-column:span 8}.col-lg-span-9{grid-column:span 9}.col-lg-span-10{grid-column:span 10}.col-lg-span-11{grid-column:span 11}.col-lg-span-12{grid-column:span 12}}@media (min-width: 1200px){.col-xl-span-1{grid-column:span 1}.col-xl-span-2{grid-column:span 2}.col-xl-span-3{grid-column:span 3}.col-xl-span-4{grid-column:span 4}.col-xl-span-5{grid-column:span 5}.col-xl-span-6{grid-column:span 6}.col-xl-span-7{grid-column:span 7}.col-xl-span-8{grid-column:span 8}.col-xl-span-9{grid-column:span 9}.col-xl-span-10{grid-column:span 10}.col-xl-span-11{grid-column:span 11}.col-xl-span-12{grid-column:span 12}}:host{--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}:host([theme=dark]){--primary:#008eff;--background:#1d1d27;--surface:#282937;--surface-light:#3c3c50;--surface-dark:#3a3a4e;--accent:#acacc1;--text:#fefefe;--subtle:#d6d6e2;--hint:#5b5b72;--secondary-dark:#18181f;--secondary-medium:#2d2e3d;--secondary-light:#1f1f2a;--playhead:#ffffff;--error:#ff0000}:host([theme=light]){--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}@media (prefers-color-scheme: light){:host([theme=system]){--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}}@media (prefers-color-scheme: dark){:host([theme=system]){--primary:#008eff;--background:#1d1d27;--surface:#282937;--surface-light:#3c3c50;--surface-dark:#3a3a4e;--accent:#acacc1;--text:#fefefe;--subtle:#d6d6e2;--hint:#5b5b72;--secondary-dark:#18181f;--secondary-medium:#2d2e3d;--secondary-light:#1f1f2a;--playhead:#ffffff;--error:#ff0000}}:host{margin:0px;padding:0px;box-sizing:border-box;font-family:\"Inter\", sans-serif;background-color:var(--background);user-select:none}img{vertical-align:middle}a{color:unset;text-decoration:none}ul{list-style-type:none}::-webkit-scrollbar-corner{background:transparent}.split{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.gutter{background:none;box-shadow:none;height:0.2rem;border-radius:0.5rem;background-repeat:no-repeat;background-position:50%;position:relative;z-index:1000;transition:background, box-shadow 0.2s ease-in}.gutter:hover{background:rgba(var(--primary), 0.5);box-shadow:0px 4px 8px 0px rgba(var(--primary), 0.1);transition:background, box-shadow 0.2s ease-out}.gutter__active{background:rgba(var(--primary), 1) !important;box-shadow:0px 4px 8px 0px rgba(var(--primary), 0.3) !important;transition:background, box-shadow 0.2s ease-out}.gutter.gutter-vertical:hover{cursor:row-resize}.playhead__moveable{overflow:hidden}::-webkit-scrollbar{width:7px;height:7px}::-webkit-scrollbar-track{background:var(--surface)}::-webkit-scrollbar-thumb{background:rgba(var(--hint), 0.8);border-radius:5px}::-webkit-scrollbar-thumb:hover{background:var(--hint)}ve-subtitles-panel-container{width:100%}.subtitles-panel__add-subtitle-btn{display:flex;align-items:center;justify-content:center;padding:0.25rem 0.5rem;border-radius:0.5rem;gap:0.5rem;margin-top:1.5rem;cursor:pointer;background-color:var(--surface-dark);color:var(--subtle)}";
const VeSubtitlesPanelContainerStyle0 = subtitlesPanelContainerStylesCss;

const SubtitlesPanelContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
            const clips = RendleyStore.Engine.getInstance().getTimeline().getClips();
            // update all the clips associated with the subtitle id
            clips === null || clips === void 0 ? void 0 : clips.forEach((clip) => {
                var _a;
                if (clip.getType() === RendleyStore.ClipTypeEnum.SUBTITLES && clip.getSubtitlesId() === ((_a = this.subtitles) === null || _a === void 0 ? void 0 : _a.getId())) {
                    clip.updateDuration();
                }
            });
            RendleyStore.Engine.getInstance().getTimeline().adjustClipsLayout();
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
            const clipId = await RendleyService.RendleyService.importSubtitlesSrt(content);
            this.handleUpdateSubtitlesDuration();
            ApplicationStore.ApplicationStore.setSelectedClipId(clipId);
        };
        this.handleAddManual = async () => {
            const clipId = await RendleyService.RendleyService.addManualSubtitles();
            ApplicationStore.ApplicationStore.setSelectedClipId(clipId);
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
        this.disposeAutorun = ApplicationStore.It(() => {
            var _a, _b;
            const clip = ApplicationStore.ApplicationStore.selectedClipId ? RendleyStore.RendleyStore.clips[ApplicationStore.ApplicationStore.selectedClipId] : null;
            if (clip == null) {
                this.subtitles = null;
                this.triggerRerender();
                return;
            }
            const subtitlesId = (_a = RendleyService.RendleyService.getClipById(clip.id)) === null || _a === void 0 ? void 0 : _a.getSubtitlesId();
            if (subtitlesId == null) {
                return;
            }
            this.subtitles = (_b = RendleyService.RendleyService.getEngine().getLibrary().getSubtitlesById(subtitlesId)) !== null && _b !== void 0 ? _b : null;
            this.triggerRerender();
        });
        this.disposeReaction = ApplicationStore.Kt(() => RendleyStore.RendleyStore.currentTime, (currentTime) => {
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
            return (index.h("ve-no-subtitles-section", { onAdd: this.handleAddManual, onImportSrt: this.handleImportSrt }));
        }
        return (index.h("div", { class: "subtitles-panel" }, index.h("ve-tabs", { tabs: [
                {
                    title: "Subtitles",
                    content: () => {
                        var _a;
                        return (index.h("div", null, (_a = this.subtitles) === null || _a === void 0 ? void 0 :
                            _a.getTextBlocks().map((subtitle, index$1) => (index.h("div", { key: `subtitle-${subtitle.time}-${subtitle.duration}` }, index.h("ve-subtitle-row", { subtitle: subtitle, isActive: this.activeSubtitleIndex === index$1, onChangeIn: (value) => this.handleChangeIn(index$1, value), onChangeOut: (value) => this.handleChangeOut(index$1, value), onChangeText: (text) => this.handleChangeSubtitle(index$1, text), onDelete: () => this.handleDeleteSubtitle(index$1) }), this.subtitles && index$1 < this.subtitles.getTextBlocks().length - 1 && (index.h("ve-subtitle-row-divider", { onAdd: () => this.handleAddSubtitle(index$1 + 1), onMerge: () => this.handleMergeSubtitles(index$1) }))))), index.h("div", { class: "subtitles-panel__add-subtitle-btn", onClick: () => { var _a, _b; return this.handleAddSubtitle((_b = (_a = this.subtitles) === null || _a === void 0 ? void 0 : _a.getTextBlocks().length) !== null && _b !== void 0 ? _b : 0); } }, index.h(PlusIcon.PlusIcon, null), " ", index.h("span", null, translation.t("common.addSubtitle", "Add subtitle")))));
                    },
                },
                {
                    title: "Styles",
                    content: () => index.h("ve-subtitles-styles-container", null),
                },
            ] })));
    }
};
SubtitlesPanelContainer.style = VeSubtitlesPanelContainerStyle0;

exports.ve_subtitles_panel_container = SubtitlesPanelContainer;
