'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2d7e747d.js');
const translation = require('./translation-a01c6ba3.js');
const TrashIcon = require('./TrashIcon-d491c467.js');
const clsx = require('./clsx-080228aa.js');
const RendleyStore = require('./RendleyStore-63f6242b.js');
const ApplicationStore = require('./ApplicationStore-a449587b.js');

const SubtitlesIcon = () => {
    return (index.h("svg", { width: "25", height: "25", viewBox: "0 0 25 25", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        index.h("path", { d: "M7.5 13.5H11.5", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        index.h("path", { d: "M15.5 13.5H17.5", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        index.h("path", { d: "M7.5 9.5H9.5", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        index.h("path", { d: "M13.5 9.5H17.5", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        index.h("path", { d: "M21.5 15.5C21.5 16.0304 21.2893 16.5391 20.9142 16.9142C20.5391 17.2893 20.0304 17.5 19.5 17.5H7.5L3.5 21.5V5.5C3.5 4.96957 3.71071 4.46086 4.08579 4.08579C4.46086 3.71071 4.96957 3.5 5.5 3.5H19.5C20.0304 3.5 20.5391 3.71071 20.9142 4.08579C21.2893 4.46086 21.5 4.96957 21.5 5.5V15.5Z", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};

const ImportSrtIcon = () => {
    return (index.h("svg", { width: "25", height: "25", viewBox: "0 0 25 25", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        index.h("path", { d: "M20.5 4.5H4.5C3.39543 4.5 2.5 5.39543 2.5 6.5V18.5C2.5 19.6046 3.39543 20.5 4.5 20.5H20.5C21.6046 20.5 22.5 19.6046 22.5 18.5V6.5C22.5 5.39543 21.6046 4.5 20.5 4.5Z", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        index.h("path", { d: "M10.5 8.5H10.501", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        index.h("path", { d: "M14.5 8.5H14.501", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        index.h("path", { d: "M8.5 12.5H8.501", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        index.h("path", { d: "M12.5 12.5H12.501", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        index.h("path", { d: "M7.5 16.5H17.5", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};

const noSubtitlesSectionStylesCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.flex{display:flex}.flex-col{flex-direction:column}.justify-center{justify-content:center}.items-center{align-items:center}.w-full{width:100%}.h-full{height:100%}.w-screen{width:100vw}.h-screen{height:100vh}.flex-grow{flex-grow:1}.absolute{position:absolute}.relative{position:relative}.text-elipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-center{text-align:center}.visibility-visible-important{visibility:visible !important}.visibility-hidden-important{visibility:hidden !important}.spacer-1{height:1rem;width:100%}.spacer-2{height:2rem;width:100%}.grid{display:grid;grid-template-columns:repeat(12, 1fr)}.grid.gap-1{grid-gap:5px}.grid.gap-2{grid-gap:10px}.grid.gap-3{grid-gap:15px}.grid.gap-4{grid-gap:20px}.grid.gap-5{grid-gap:25px}.col-span-1{grid-column:span 1}.col-span-2{grid-column:span 2}.col-span-3{grid-column:span 3}.col-span-4{grid-column:span 4}.col-span-5{grid-column:span 5}.col-span-6{grid-column:span 6}.col-span-7{grid-column:span 7}.col-span-8{grid-column:span 8}.col-span-9{grid-column:span 9}.col-span-10{grid-column:span 10}.col-span-11{grid-column:span 11}.col-span-12{grid-column:span 12}@media (min-width: 576px){.col-sm-span-1{grid-column:span 1}.col-sm-span-2{grid-column:span 2}.col-sm-span-3{grid-column:span 3}.col-sm-span-4{grid-column:span 4}.col-sm-span-5{grid-column:span 5}.col-sm-span-6{grid-column:span 6}.col-sm-span-7{grid-column:span 7}.col-sm-span-8{grid-column:span 8}.col-sm-span-9{grid-column:span 9}.col-sm-span-10{grid-column:span 10}.col-sm-span-11{grid-column:span 11}.col-sm-span-12{grid-column:span 12}}@media (min-width: 768px){.col-md-span-1{grid-column:span 1}.col-md-span-2{grid-column:span 2}.col-md-span-3{grid-column:span 3}.col-md-span-4{grid-column:span 4}.col-md-span-5{grid-column:span 5}.col-md-span-6{grid-column:span 6}.col-md-span-7{grid-column:span 7}.col-md-span-8{grid-column:span 8}.col-md-span-9{grid-column:span 9}.col-md-span-10{grid-column:span 10}.col-md-span-11{grid-column:span 11}.col-md-span-12{grid-column:span 12}}@media (min-width: 992px){.col-lg-span-1{grid-column:span 1}.col-lg-span-2{grid-column:span 2}.col-lg-span-3{grid-column:span 3}.col-lg-span-4{grid-column:span 4}.col-lg-span-5{grid-column:span 5}.col-lg-span-6{grid-column:span 6}.col-lg-span-7{grid-column:span 7}.col-lg-span-8{grid-column:span 8}.col-lg-span-9{grid-column:span 9}.col-lg-span-10{grid-column:span 10}.col-lg-span-11{grid-column:span 11}.col-lg-span-12{grid-column:span 12}}@media (min-width: 1200px){.col-xl-span-1{grid-column:span 1}.col-xl-span-2{grid-column:span 2}.col-xl-span-3{grid-column:span 3}.col-xl-span-4{grid-column:span 4}.col-xl-span-5{grid-column:span 5}.col-xl-span-6{grid-column:span 6}.col-xl-span-7{grid-column:span 7}.col-xl-span-8{grid-column:span 8}.col-xl-span-9{grid-column:span 9}.col-xl-span-10{grid-column:span 10}.col-xl-span-11{grid-column:span 11}.col-xl-span-12{grid-column:span 12}}:host{--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}:host([theme=dark]){--primary:#008eff;--background:#1d1d27;--surface:#282937;--surface-light:#3c3c50;--surface-dark:#3a3a4e;--accent:#acacc1;--text:#fefefe;--subtle:#d6d6e2;--hint:#5b5b72;--secondary-dark:#18181f;--secondary-medium:#2d2e3d;--secondary-light:#1f1f2a;--playhead:#ffffff;--error:#ff0000}:host([theme=light]){--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}@media (prefers-color-scheme: light){:host([theme=system]){--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}}@media (prefers-color-scheme: dark){:host([theme=system]){--primary:#008eff;--background:#1d1d27;--surface:#282937;--surface-light:#3c3c50;--surface-dark:#3a3a4e;--accent:#acacc1;--text:#fefefe;--subtle:#d6d6e2;--hint:#5b5b72;--secondary-dark:#18181f;--secondary-medium:#2d2e3d;--secondary-light:#1f1f2a;--playhead:#ffffff;--error:#ff0000}}:host{margin:0px;padding:0px;box-sizing:border-box;font-family:\"Inter\", sans-serif;background-color:var(--background);user-select:none}img{vertical-align:middle}a{color:unset;text-decoration:none}ul{list-style-type:none}::-webkit-scrollbar-corner{background:transparent}.split{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.gutter{background:none;box-shadow:none;height:0.2rem;border-radius:0.5rem;background-repeat:no-repeat;background-position:50%;position:relative;z-index:1000;transition:background, box-shadow 0.2s ease-in}.gutter:hover{background:rgba(var(--primary), 0.5);box-shadow:0px 4px 8px 0px rgba(var(--primary), 0.1);transition:background, box-shadow 0.2s ease-out}.gutter__active{background:rgba(var(--primary), 1) !important;box-shadow:0px 4px 8px 0px rgba(var(--primary), 0.3) !important;transition:background, box-shadow 0.2s ease-out}.gutter.gutter-vertical:hover{cursor:row-resize}.playhead__moveable{overflow:hidden}::-webkit-scrollbar{width:7px;height:7px}::-webkit-scrollbar-track{background:var(--surface)}::-webkit-scrollbar-thumb{background:rgba(var(--hint), 0.8);border-radius:5px}::-webkit-scrollbar-thumb:hover{background:var(--hint)}.no-subtitles{display:flex;flex-direction:column;gap:1rem}.no-subtitles__section{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:1rem 0.5rem;gap:0.5rem;border-radius:0.5rem;border:2px solid transparent;text-align:center;cursor:pointer;color:var(--text);background-color:var(--surface-dark);line-height:0.5rem}.no-subtitles__section:hover{border-color:var(--primary)}.no-subtitles__section--title{font-size:0.75rem;font-weight:500;margin-top:0.5rem}.no-subtitles__section--description{font-size:0.625rem;font-weight:400;color:var(--subtle)}";
const VeNoSubtitlesSectionStyle0 = noSubtitlesSectionStylesCss;

const NoSubtitlesSection = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.handleClickImport = () => {
            if (this.fileInputRef == null) {
                return;
            }
            this.fileInputRef.value = "";
            this.fileInputRef.click();
        };
        this.handleImport = (e) => {
            var _a;
            const file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
            if (file == null) {
                return;
            }
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = () => {
                var _a;
                (_a = this.onImportSrt) === null || _a === void 0 ? void 0 : _a.call(this, reader.result);
            };
        };
        this.onImportSrt = undefined;
        this.onAdd = undefined;
    }
    render() {
        return (index.h("div", { key: 'ad329422142478aee47948603e2fe26f2795bb62', class: "no-subtitles" }, index.h("div", { key: '2abe80b56c50118eceb3e5a5ee25757ac8d9c63e', class: "no-subtitles__section", onClick: this.handleClickImport }, index.h(ImportSrtIcon, { key: 'd7e90cd39cd4418c760372c2864c0066570ca6b4' }), index.h("span", { key: '85f8fc645bb9f97b06d75a64d500023b8ee8e1a4', class: "no-subtitles__section--title" }, translation.t("sidebar.subtitlesTab.import.title", "Import SRT file")), index.h("span", { key: '44bb5e5e9845d88194a671455bf1665b21e02937', class: "no-subtitles__section--description" }, translation.t("sidebar.subtitlesTab.import.description", "Upload an srt file containing subtitles"))), index.h("div", { key: '90eeabee8b9744b0b019943547357aae8de640d9', class: "no-subtitles__section", onClick: this.onAdd }, index.h(SubtitlesIcon, { key: '485786160aba3ff0ecdcfb9b48e0c249752febe6' }), index.h("span", { key: '294e1f85bc668f10d09c13e97d4ae15197b1ce35', class: "no-subtitles__section--title" }, translation.t("sidebar.subtitlesTab.create.title", "Add Manually")), index.h("span", { key: 'a743fc0654eb8b85a6b0e2282ef5f1289ecacb92', class: "no-subtitles__section--description" }, translation.t("sidebar.subtitlesTab.create.description", "Create subtitles manually"))), index.h("input", { key: '371f4e4f16c56fe850824d524e49ced2cfa09d4d', ref: (el) => (this.fileInputRef = el), type: "file", hidden: true, accept: ".srt", onChange: this.handleImport })));
    }
};
NoSubtitlesSection.style = VeNoSubtitlesSectionStyle0;

function isLetter(str) {
    return str.length === 1 && str.match(/[a-zA-Z]/i);
}

function timecodeToSeconds(timecode) {
    const parts = timecode.split(":");
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    if (parts.length === 3) {
        // Format HH:MM:SS
        hours = parseInt(parts[0], 10);
        minutes = parseInt(parts[1], 10);
        seconds = parseFloat(parts[2]);
    }
    else if (parts.length === 2) {
        // Format MM:SS
        minutes = parseInt(parts[0], 10);
        seconds = parseFloat(parts[1]);
    }
    else {
        return null;
    }
    // Convert the parsed components to total seconds
    return hours * 3600 + minutes * 60 + seconds;
}

const subtitleRowStylesCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.flex{display:flex}.flex-col{flex-direction:column}.justify-center{justify-content:center}.items-center{align-items:center}.w-full{width:100%}.h-full{height:100%}.w-screen{width:100vw}.h-screen{height:100vh}.flex-grow{flex-grow:1}.absolute{position:absolute}.relative{position:relative}.text-elipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-center{text-align:center}.visibility-visible-important{visibility:visible !important}.visibility-hidden-important{visibility:hidden !important}.spacer-1{height:1rem;width:100%}.spacer-2{height:2rem;width:100%}.grid{display:grid;grid-template-columns:repeat(12, 1fr)}.grid.gap-1{grid-gap:5px}.grid.gap-2{grid-gap:10px}.grid.gap-3{grid-gap:15px}.grid.gap-4{grid-gap:20px}.grid.gap-5{grid-gap:25px}.col-span-1{grid-column:span 1}.col-span-2{grid-column:span 2}.col-span-3{grid-column:span 3}.col-span-4{grid-column:span 4}.col-span-5{grid-column:span 5}.col-span-6{grid-column:span 6}.col-span-7{grid-column:span 7}.col-span-8{grid-column:span 8}.col-span-9{grid-column:span 9}.col-span-10{grid-column:span 10}.col-span-11{grid-column:span 11}.col-span-12{grid-column:span 12}@media (min-width: 576px){.col-sm-span-1{grid-column:span 1}.col-sm-span-2{grid-column:span 2}.col-sm-span-3{grid-column:span 3}.col-sm-span-4{grid-column:span 4}.col-sm-span-5{grid-column:span 5}.col-sm-span-6{grid-column:span 6}.col-sm-span-7{grid-column:span 7}.col-sm-span-8{grid-column:span 8}.col-sm-span-9{grid-column:span 9}.col-sm-span-10{grid-column:span 10}.col-sm-span-11{grid-column:span 11}.col-sm-span-12{grid-column:span 12}}@media (min-width: 768px){.col-md-span-1{grid-column:span 1}.col-md-span-2{grid-column:span 2}.col-md-span-3{grid-column:span 3}.col-md-span-4{grid-column:span 4}.col-md-span-5{grid-column:span 5}.col-md-span-6{grid-column:span 6}.col-md-span-7{grid-column:span 7}.col-md-span-8{grid-column:span 8}.col-md-span-9{grid-column:span 9}.col-md-span-10{grid-column:span 10}.col-md-span-11{grid-column:span 11}.col-md-span-12{grid-column:span 12}}@media (min-width: 992px){.col-lg-span-1{grid-column:span 1}.col-lg-span-2{grid-column:span 2}.col-lg-span-3{grid-column:span 3}.col-lg-span-4{grid-column:span 4}.col-lg-span-5{grid-column:span 5}.col-lg-span-6{grid-column:span 6}.col-lg-span-7{grid-column:span 7}.col-lg-span-8{grid-column:span 8}.col-lg-span-9{grid-column:span 9}.col-lg-span-10{grid-column:span 10}.col-lg-span-11{grid-column:span 11}.col-lg-span-12{grid-column:span 12}}@media (min-width: 1200px){.col-xl-span-1{grid-column:span 1}.col-xl-span-2{grid-column:span 2}.col-xl-span-3{grid-column:span 3}.col-xl-span-4{grid-column:span 4}.col-xl-span-5{grid-column:span 5}.col-xl-span-6{grid-column:span 6}.col-xl-span-7{grid-column:span 7}.col-xl-span-8{grid-column:span 8}.col-xl-span-9{grid-column:span 9}.col-xl-span-10{grid-column:span 10}.col-xl-span-11{grid-column:span 11}.col-xl-span-12{grid-column:span 12}}:host{--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}:host([theme=dark]){--primary:#008eff;--background:#1d1d27;--surface:#282937;--surface-light:#3c3c50;--surface-dark:#3a3a4e;--accent:#acacc1;--text:#fefefe;--subtle:#d6d6e2;--hint:#5b5b72;--secondary-dark:#18181f;--secondary-medium:#2d2e3d;--secondary-light:#1f1f2a;--playhead:#ffffff;--error:#ff0000}:host([theme=light]){--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}@media (prefers-color-scheme: light){:host([theme=system]){--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}}@media (prefers-color-scheme: dark){:host([theme=system]){--primary:#008eff;--background:#1d1d27;--surface:#282937;--surface-light:#3c3c50;--surface-dark:#3a3a4e;--accent:#acacc1;--text:#fefefe;--subtle:#d6d6e2;--hint:#5b5b72;--secondary-dark:#18181f;--secondary-medium:#2d2e3d;--secondary-light:#1f1f2a;--playhead:#ffffff;--error:#ff0000}}:host{margin:0px;padding:0px;box-sizing:border-box;font-family:\"Inter\", sans-serif;background-color:var(--background);user-select:none}img{vertical-align:middle}a{color:unset;text-decoration:none}ul{list-style-type:none}::-webkit-scrollbar-corner{background:transparent}.split{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.gutter{background:none;box-shadow:none;height:0.2rem;border-radius:0.5rem;background-repeat:no-repeat;background-position:50%;position:relative;z-index:1000;transition:background, box-shadow 0.2s ease-in}.gutter:hover{background:rgba(var(--primary), 0.5);box-shadow:0px 4px 8px 0px rgba(var(--primary), 0.1);transition:background, box-shadow 0.2s ease-out}.gutter__active{background:rgba(var(--primary), 1) !important;box-shadow:0px 4px 8px 0px rgba(var(--primary), 0.3) !important;transition:background, box-shadow 0.2s ease-out}.gutter.gutter-vertical:hover{cursor:row-resize}.playhead__moveable{overflow:hidden}::-webkit-scrollbar{width:7px;height:7px}::-webkit-scrollbar-track{background:var(--surface)}::-webkit-scrollbar-thumb{background:rgba(var(--hint), 0.8);border-radius:5px}::-webkit-scrollbar-thumb:hover{background:var(--hint)}.subtitle-row{display:flex;flex:1;gap:0.5rem}.subtitle-row textarea{border:none;outline:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;resize:none;background-color:transparent;overflow:hidden}.subtitle-row input{border:none;outline:none}.subtitle-row__header{display:flex;justify-content:space-between;align-items:center}.subtitle-row__content{display:flex;width:100%;flex-direction:column}.subtitle-row__subtitles{color:rgba(255, 255, 255, 0.5);display:flex;align-items:center}.subtitle-row__subtitles--separator{margin:0 0.25rem}.subtitle-row__subtitles--label{color:var(--subtle);background-color:var(--background);border-radius:0.5rem;padding:0.25rem 0.5rem;font-size:0.625rem}.subtitle-row__text{color:var(--accent);margin-top:0.5rem;overflow:hidden}.subtitle-row__indicator{background-color:rgba(255, 255, 255, 0.1);width:2px}.subtitle-row__indicator--active{background-color:rgba(255, 255, 255, 0.8) !important}.subtitle-row:hover>.subtitle-row__indicator{background-color:rgba(255, 255, 255, 0.4)}";
const VeSubtitleRowStyle0 = subtitleRowStylesCss;

const SubtitleRow = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.handleChangeText = (event) => {
            this.adjustContentTextareaHeight();
            const nextValue = event.target.value;
            this.onChangeText(nextValue);
        };
        this.handleChangeIn = (event) => {
            this.tempInValue = event.target.value;
        };
        this.handleChangeOut = (event) => {
            this.tempOutValue = event.target.value;
        };
        this.handleBlurIn = () => {
            this.isEditing = false;
            const nextValue = timecodeToSeconds(this.tempInValue);
            if (nextValue == null) {
                this.tempInValue = TrashIcon.secondsToTimecode(this.subtitle.time);
                return;
            }
            const changed = this.onChangeIn(nextValue);
            if (changed) {
                this.tempInValue = TrashIcon.secondsToTimecode(nextValue);
            }
            else {
                this.tempInValue = TrashIcon.secondsToTimecode(this.subtitle.time);
            }
        };
        this.handleBlurOut = () => {
            this.isEditing = false;
            const nextValue = timecodeToSeconds(this.tempOutValue);
            if (nextValue == null) {
                this.tempOutValue = TrashIcon.secondsToTimecode(this.subtitle.time + this.subtitle.duration);
                return;
            }
            const changed = this.onChangeOut(nextValue);
            if (changed) {
                this.tempOutValue = TrashIcon.secondsToTimecode(nextValue);
            }
            else {
                this.tempOutValue = TrashIcon.secondsToTimecode(this.subtitle.time + this.subtitle.duration);
            }
        };
        this.handleTimeLabelKeydown = (event) => {
            if (event.key === "Enter" || event.key === "Escape") {
                event.target.blur();
                return;
            }
            if (isLetter(event.key)) {
                event.preventDefault();
            }
        };
        this.handleFocus = () => {
            this.isEditing = true;
        };
        this.handleBlur = () => {
            this.isEditing = false;
        };
        this.subtitle = undefined;
        this.isActive = undefined;
        this.onChangeIn = undefined;
        this.onChangeOut = undefined;
        this.onChangeText = undefined;
        this.onDelete = undefined;
        this.isEditing = false;
        this.tempInValue = "";
        this.tempOutValue = "";
    }
    componentWillLoad() {
        this.tempInValue = TrashIcon.secondsToTimecode(this.subtitle.time);
        this.tempOutValue = TrashIcon.secondsToTimecode(this.subtitle.time + this.subtitle.duration);
    }
    componentDidLoad() {
        this.adjustContentTextareaHeight();
    }
    adjustContentTextareaHeight() {
        if (this.contentTextarea) {
            this.contentTextarea.style.height = "auto";
            this.contentTextarea.style.height = this.contentTextarea.scrollHeight + "px";
        }
    }
    render() {
        return (index.h("div", { key: '8f587d423ad7db6affdd4cf15307f2cf225c5632', class: "subtitle-row" }, index.h("div", { key: 'ec529972f5b3440e01ac32f77c111492e710cb00', class: clsx.clsx("subtitle-row__indicator", {
                "subtitle-row__indicator--active": this.isEditing || this.isActive,
            }) }), index.h("div", { key: '471108fc75648007bfabc9ae015c73294c81af6f', class: "subtitle-row__content" }, index.h("div", { key: '0a19e4f3ccbd39446a19ec61053cd000d1916f76', class: "subtitle-row__header" }, index.h("div", { key: 'a2ee563a1b230c0b6ca3506a142078459c69252a', class: "subtitle-row__subtitles" }, index.h("input", { key: '0a63ea4d72f2cbc9e06a92fce035f410546a2451', type: "text", class: "subtitle-row__subtitles--label", value: this.tempInValue, size: this.tempInValue.length, onFocus: this.handleFocus, onInput: this.handleChangeIn, onBlur: this.handleBlurIn, onKeyDown: this.handleTimeLabelKeydown }), index.h("span", { key: '4162dd93d94abff31b70ac8b447fd1073e3bf218', class: "subtitle-row__subtitles--separator" }, "-"), index.h("input", { key: 'c8685184a093b57bccfdd0b0c840b4e9bf58e4d6', type: "text", class: "subtitle-row__subtitles--label", value: this.tempOutValue, size: this.tempOutValue.length > 10 ? 10 : this.tempOutValue.length, onFocus: this.handleFocus, onInput: this.handleChangeOut, onBlur: this.handleBlurOut, onKeyDown: this.handleTimeLabelKeydown })), index.h("ve-btn", { key: '7d7b7605b63f8f4bfb1d52a3ce270aea6cb6bc65', onClick: this.onDelete.bind(this) }, index.h("div", { key: 'd00b3125a103ac4c61a9cf564b58f2763f499a5a', slot: "icon" }, index.h(TrashIcon.TrashIcon, { key: '9652a6e52992695d63815c7728092e309fdec056' })))), index.h("textarea", { key: '3ef67ce63b76e40906c7e96898be8a3a0e29c030', class: "subtitle-row__text", ref: (el) => (this.contentTextarea = el), onFocus: this.handleFocus, onInput: this.handleChangeText, onBlur: this.handleBlur }, this.subtitle.text))));
    }
};
SubtitleRow.style = VeSubtitleRowStyle0;

const subtitleRowDividerStylesCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.flex{display:flex}.flex-col{flex-direction:column}.justify-center{justify-content:center}.items-center{align-items:center}.w-full{width:100%}.h-full{height:100%}.w-screen{width:100vw}.h-screen{height:100vh}.flex-grow{flex-grow:1}.absolute{position:absolute}.relative{position:relative}.text-elipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-center{text-align:center}.visibility-visible-important{visibility:visible !important}.visibility-hidden-important{visibility:hidden !important}.spacer-1{height:1rem;width:100%}.spacer-2{height:2rem;width:100%}.grid{display:grid;grid-template-columns:repeat(12, 1fr)}.grid.gap-1{grid-gap:5px}.grid.gap-2{grid-gap:10px}.grid.gap-3{grid-gap:15px}.grid.gap-4{grid-gap:20px}.grid.gap-5{grid-gap:25px}.col-span-1{grid-column:span 1}.col-span-2{grid-column:span 2}.col-span-3{grid-column:span 3}.col-span-4{grid-column:span 4}.col-span-5{grid-column:span 5}.col-span-6{grid-column:span 6}.col-span-7{grid-column:span 7}.col-span-8{grid-column:span 8}.col-span-9{grid-column:span 9}.col-span-10{grid-column:span 10}.col-span-11{grid-column:span 11}.col-span-12{grid-column:span 12}@media (min-width: 576px){.col-sm-span-1{grid-column:span 1}.col-sm-span-2{grid-column:span 2}.col-sm-span-3{grid-column:span 3}.col-sm-span-4{grid-column:span 4}.col-sm-span-5{grid-column:span 5}.col-sm-span-6{grid-column:span 6}.col-sm-span-7{grid-column:span 7}.col-sm-span-8{grid-column:span 8}.col-sm-span-9{grid-column:span 9}.col-sm-span-10{grid-column:span 10}.col-sm-span-11{grid-column:span 11}.col-sm-span-12{grid-column:span 12}}@media (min-width: 768px){.col-md-span-1{grid-column:span 1}.col-md-span-2{grid-column:span 2}.col-md-span-3{grid-column:span 3}.col-md-span-4{grid-column:span 4}.col-md-span-5{grid-column:span 5}.col-md-span-6{grid-column:span 6}.col-md-span-7{grid-column:span 7}.col-md-span-8{grid-column:span 8}.col-md-span-9{grid-column:span 9}.col-md-span-10{grid-column:span 10}.col-md-span-11{grid-column:span 11}.col-md-span-12{grid-column:span 12}}@media (min-width: 992px){.col-lg-span-1{grid-column:span 1}.col-lg-span-2{grid-column:span 2}.col-lg-span-3{grid-column:span 3}.col-lg-span-4{grid-column:span 4}.col-lg-span-5{grid-column:span 5}.col-lg-span-6{grid-column:span 6}.col-lg-span-7{grid-column:span 7}.col-lg-span-8{grid-column:span 8}.col-lg-span-9{grid-column:span 9}.col-lg-span-10{grid-column:span 10}.col-lg-span-11{grid-column:span 11}.col-lg-span-12{grid-column:span 12}}@media (min-width: 1200px){.col-xl-span-1{grid-column:span 1}.col-xl-span-2{grid-column:span 2}.col-xl-span-3{grid-column:span 3}.col-xl-span-4{grid-column:span 4}.col-xl-span-5{grid-column:span 5}.col-xl-span-6{grid-column:span 6}.col-xl-span-7{grid-column:span 7}.col-xl-span-8{grid-column:span 8}.col-xl-span-9{grid-column:span 9}.col-xl-span-10{grid-column:span 10}.col-xl-span-11{grid-column:span 11}.col-xl-span-12{grid-column:span 12}}:host{--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}:host([theme=dark]){--primary:#008eff;--background:#1d1d27;--surface:#282937;--surface-light:#3c3c50;--surface-dark:#3a3a4e;--accent:#acacc1;--text:#fefefe;--subtle:#d6d6e2;--hint:#5b5b72;--secondary-dark:#18181f;--secondary-medium:#2d2e3d;--secondary-light:#1f1f2a;--playhead:#ffffff;--error:#ff0000}:host([theme=light]){--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}@media (prefers-color-scheme: light){:host([theme=system]){--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}}@media (prefers-color-scheme: dark){:host([theme=system]){--primary:#008eff;--background:#1d1d27;--surface:#282937;--surface-light:#3c3c50;--surface-dark:#3a3a4e;--accent:#acacc1;--text:#fefefe;--subtle:#d6d6e2;--hint:#5b5b72;--secondary-dark:#18181f;--secondary-medium:#2d2e3d;--secondary-light:#1f1f2a;--playhead:#ffffff;--error:#ff0000}}:host{margin:0px;padding:0px;box-sizing:border-box;font-family:\"Inter\", sans-serif;background-color:var(--background);user-select:none}img{vertical-align:middle}a{color:unset;text-decoration:none}ul{list-style-type:none}::-webkit-scrollbar-corner{background:transparent}.split{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.gutter{background:none;box-shadow:none;height:0.2rem;border-radius:0.5rem;background-repeat:no-repeat;background-position:50%;position:relative;z-index:1000;transition:background, box-shadow 0.2s ease-in}.gutter:hover{background:rgba(var(--primary), 0.5);box-shadow:0px 4px 8px 0px rgba(var(--primary), 0.1);transition:background, box-shadow 0.2s ease-out}.gutter__active{background:rgba(var(--primary), 1) !important;box-shadow:0px 4px 8px 0px rgba(var(--primary), 0.3) !important;transition:background, box-shadow 0.2s ease-out}.gutter.gutter-vertical:hover{cursor:row-resize}.playhead__moveable{overflow:hidden}::-webkit-scrollbar{width:7px;height:7px}::-webkit-scrollbar-track{background:var(--surface)}::-webkit-scrollbar-thumb{background:rgba(var(--hint), 0.8);border-radius:5px}::-webkit-scrollbar-thumb:hover{background:var(--hint)}.subtitle-row-divider{margin:0.25rem 0;position:relative;opacity:0;display:flex;align-items:center;justify-content:center;gap:1rem}.subtitle-row-divider:hover{opacity:1}.subtitle-row-divider__line{position:absolute;z-index:0;width:100%;border:1px dashed rgba(255, 255, 255, 0.3)}.subtitle-row-divider__btn{z-index:1;cursor:pointer;color:rgb(255, 255, 255);font-size:0.625rem;background-color:var(--surface);padding:0.25rem 0.75rem;border-radius:0.5rem;border:1px solid rgba(255, 255, 255, 0.3)}";
const VeSubtitleRowDividerStyle0 = subtitleRowDividerStylesCss;

const SubtitleRowDivider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.onAdd = undefined;
        this.onMerge = undefined;
    }
    render() {
        return (index.h("div", { key: 'b32ffa1277e8672a03504c8b0aad45b744544fe6', class: "subtitle-row-divider" }, index.h("div", { key: 'f2303a7e5221a32c724f46a1b804d26d4f6cff1c', class: "subtitle-row-divider__line" }), index.h("button", { key: 'eebd6c2c3bfb2f100b7800dcf645b42c29492bc4', class: "subtitle-row-divider__btn", onClick: this.onAdd }, "+ Add"), index.h("button", { key: '4230c2bebe8c67ad6a8eb4f4d20fd96130a3dfbd', class: "subtitle-row-divider__btn", onClick: this.onMerge }, "- Merge")));
    }
};
SubtitleRowDivider.style = VeSubtitleRowDividerStyle0;

const subtitlesStylesContainerStylesCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.flex{display:flex}.flex-col{flex-direction:column}.justify-center{justify-content:center}.items-center{align-items:center}.w-full{width:100%}.h-full{height:100%}.w-screen{width:100vw}.h-screen{height:100vh}.flex-grow{flex-grow:1}.absolute{position:absolute}.relative{position:relative}.text-elipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-center{text-align:center}.visibility-visible-important{visibility:visible !important}.visibility-hidden-important{visibility:hidden !important}.spacer-1{height:1rem;width:100%}.spacer-2{height:2rem;width:100%}.grid{display:grid;grid-template-columns:repeat(12, 1fr)}.grid.gap-1{grid-gap:5px}.grid.gap-2{grid-gap:10px}.grid.gap-3{grid-gap:15px}.grid.gap-4{grid-gap:20px}.grid.gap-5{grid-gap:25px}.col-span-1{grid-column:span 1}.col-span-2{grid-column:span 2}.col-span-3{grid-column:span 3}.col-span-4{grid-column:span 4}.col-span-5{grid-column:span 5}.col-span-6{grid-column:span 6}.col-span-7{grid-column:span 7}.col-span-8{grid-column:span 8}.col-span-9{grid-column:span 9}.col-span-10{grid-column:span 10}.col-span-11{grid-column:span 11}.col-span-12{grid-column:span 12}@media (min-width: 576px){.col-sm-span-1{grid-column:span 1}.col-sm-span-2{grid-column:span 2}.col-sm-span-3{grid-column:span 3}.col-sm-span-4{grid-column:span 4}.col-sm-span-5{grid-column:span 5}.col-sm-span-6{grid-column:span 6}.col-sm-span-7{grid-column:span 7}.col-sm-span-8{grid-column:span 8}.col-sm-span-9{grid-column:span 9}.col-sm-span-10{grid-column:span 10}.col-sm-span-11{grid-column:span 11}.col-sm-span-12{grid-column:span 12}}@media (min-width: 768px){.col-md-span-1{grid-column:span 1}.col-md-span-2{grid-column:span 2}.col-md-span-3{grid-column:span 3}.col-md-span-4{grid-column:span 4}.col-md-span-5{grid-column:span 5}.col-md-span-6{grid-column:span 6}.col-md-span-7{grid-column:span 7}.col-md-span-8{grid-column:span 8}.col-md-span-9{grid-column:span 9}.col-md-span-10{grid-column:span 10}.col-md-span-11{grid-column:span 11}.col-md-span-12{grid-column:span 12}}@media (min-width: 992px){.col-lg-span-1{grid-column:span 1}.col-lg-span-2{grid-column:span 2}.col-lg-span-3{grid-column:span 3}.col-lg-span-4{grid-column:span 4}.col-lg-span-5{grid-column:span 5}.col-lg-span-6{grid-column:span 6}.col-lg-span-7{grid-column:span 7}.col-lg-span-8{grid-column:span 8}.col-lg-span-9{grid-column:span 9}.col-lg-span-10{grid-column:span 10}.col-lg-span-11{grid-column:span 11}.col-lg-span-12{grid-column:span 12}}@media (min-width: 1200px){.col-xl-span-1{grid-column:span 1}.col-xl-span-2{grid-column:span 2}.col-xl-span-3{grid-column:span 3}.col-xl-span-4{grid-column:span 4}.col-xl-span-5{grid-column:span 5}.col-xl-span-6{grid-column:span 6}.col-xl-span-7{grid-column:span 7}.col-xl-span-8{grid-column:span 8}.col-xl-span-9{grid-column:span 9}.col-xl-span-10{grid-column:span 10}.col-xl-span-11{grid-column:span 11}.col-xl-span-12{grid-column:span 12}}:host{--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}:host([theme=dark]){--primary:#008eff;--background:#1d1d27;--surface:#282937;--surface-light:#3c3c50;--surface-dark:#3a3a4e;--accent:#acacc1;--text:#fefefe;--subtle:#d6d6e2;--hint:#5b5b72;--secondary-dark:#18181f;--secondary-medium:#2d2e3d;--secondary-light:#1f1f2a;--playhead:#ffffff;--error:#ff0000}:host([theme=light]){--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}@media (prefers-color-scheme: light){:host([theme=system]){--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}}@media (prefers-color-scheme: dark){:host([theme=system]){--primary:#008eff;--background:#1d1d27;--surface:#282937;--surface-light:#3c3c50;--surface-dark:#3a3a4e;--accent:#acacc1;--text:#fefefe;--subtle:#d6d6e2;--hint:#5b5b72;--secondary-dark:#18181f;--secondary-medium:#2d2e3d;--secondary-light:#1f1f2a;--playhead:#ffffff;--error:#ff0000}}:host{margin:0px;padding:0px;box-sizing:border-box;font-family:\"Inter\", sans-serif;background-color:var(--background);user-select:none}img{vertical-align:middle}a{color:unset;text-decoration:none}ul{list-style-type:none}::-webkit-scrollbar-corner{background:transparent}.split{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.gutter{background:none;box-shadow:none;height:0.2rem;border-radius:0.5rem;background-repeat:no-repeat;background-position:50%;position:relative;z-index:1000;transition:background, box-shadow 0.2s ease-in}.gutter:hover{background:rgba(var(--primary), 0.5);box-shadow:0px 4px 8px 0px rgba(var(--primary), 0.1);transition:background, box-shadow 0.2s ease-out}.gutter__active{background:rgba(var(--primary), 1) !important;box-shadow:0px 4px 8px 0px rgba(var(--primary), 0.3) !important;transition:background, box-shadow 0.2s ease-out}.gutter.gutter-vertical:hover{cursor:row-resize}.playhead__moveable{overflow:hidden}::-webkit-scrollbar{width:7px;height:7px}::-webkit-scrollbar-track{background:var(--surface)}::-webkit-scrollbar-thumb{background:rgba(var(--hint), 0.8);border-radius:5px}::-webkit-scrollbar-thumb:hover{background:var(--hint)}";
const VeSubtitlesStylesContainerStyle0 = subtitlesStylesContainerStylesCss;

const SubtitlesStylesContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.modes = [];
        this.animations = [];
        this.styles = [];
        this.selectedStyle = RendleyStore.RendleyStore.subtitlesStyles.selectedStyle;
        this.selectedAnimation = RendleyStore.RendleyStore.subtitlesStyles.selectedAnimation;
        this.selectedMode = RendleyStore.RendleyStore.subtitlesStyles.selectedMode;
    }
    componentWillLoad() {
        this.init();
        this.disposeAutorun = ApplicationStore.It(() => {
            this.selectedStyle = RendleyStore.RendleyStore.subtitlesStyles.selectedStyle;
            this.selectedAnimation = RendleyStore.RendleyStore.subtitlesStyles.selectedAnimation;
            this.selectedMode = RendleyStore.RendleyStore.subtitlesStyles.selectedMode;
        });
    }
    componentWillUnmount() {
        if (this.disposeAutorun) {
            this.disposeAutorun();
        }
    }
    init() {
        const subtitleStylesRoot = ApplicationStore.ApplicationStore.subtitleStylesPath;
        fetch(subtitleStylesRoot + "subtitles.json")
            .then((data) => data.json())
            .then((data) => {
            this.modes = data.modes.map((mode) => ({
                name: mode.name,
                value: mode.value,
                thumbnailUrl: subtitleStylesRoot + mode.path + "thumbnail.webp",
                videoPreviewUrl: subtitleStylesRoot + mode.path + "preview.mp4",
            }));
            this.animations = data.animations.map((animation) => ({
                name: animation.name,
                value: animation.value,
                thumbnailUrl: subtitleStylesRoot + animation.path + "thumbnail.webp",
                videoPreviewUrl: subtitleStylesRoot + animation.path + "preview.mp4",
            }));
            this.styles = data.styles.map((style) => ({
                name: style.name,
                value: subtitleStylesRoot + style.path + "data.json",
                thumbnailUrl: subtitleStylesRoot + style.path + "thumbnail.webp",
                videoPreviewUrl: subtitleStylesRoot + style.path + "preview.mp4",
            }));
        });
    }
    handleSetMode(value) {
        const subtitlesManager = RendleyStore.Engine.getInstance().getSubtitlesManager();
        RendleyStore.RendleyStore.setSubtitlesMode(value.value);
        subtitlesManager.setTextMode(value.value);
    }
    async handleSetStyle(value) {
        const subtitlesManager = RendleyStore.Engine.getInstance().getSubtitlesManager();
        if (value.value === this.selectedStyle) {
            RendleyStore.RendleyStore.setSubtitlesStyle(null);
            const defaultStyles = {};
            // resets to default styles
            subtitlesManager.setMainTextStyle(defaultStyles, true);
            subtitlesManager.setHighlightedTextStyle(defaultStyles, true);
            return;
        }
        RendleyStore.RendleyStore.setSubtitlesStyle(value.value);
        const data = await fetch(value.value).then((data) => data.json());
        subtitlesManager.setMainTextStyle(data.mainTextStyle, true);
        subtitlesManager.setHighlightedTextStyle(data.highlightTextStyle, true);
    }
    handleSetAnimation(value) {
        const subtitlesManager = RendleyStore.Engine.getInstance().getSubtitlesManager();
        if (value.value === this.selectedAnimation) {
            RendleyStore.RendleyStore.setSubtitlesAnimation(null);
            subtitlesManager.setHighlightAnimation(RendleyStore.HighlightAnimationEnum.NONE);
            return;
        }
        RendleyStore.RendleyStore.setSubtitlesAnimation(value.value);
        subtitlesManager.setHighlightAnimation(value.value, 1);
    }
    render() {
        return (index.h("div", { key: '1e15c5c5412c21697b1005d9d84f1becdae0ed78' }, index.h("ve-panel-grid-list-section", { key: '1ea0c005dec7e0820fb14e5cc3450d25d48468be', title: translation.t("sidebar.subtitlesTab.styles.mode", "Mode"), data: this.modes, columns: 1, renderCard: (mode) => (index.h("ve-effect-showcase-card", { isSelected: this.selectedMode === mode.value, tooltip: mode.name, imageUrl: mode.thumbnailUrl, onClick: () => this.handleSetMode(mode) })) }), index.h("div", { key: 'bfffc54854663a7e68999930f98cf871b3a3163f', class: "spacer-2" }), index.h("ve-panel-grid-list-section", { key: '0ffcb14c3c42aae3ea1e865bb1422bd68e01f4f1', title: translation.t("sidebar.subtitlesTab.styles.animations", "Animations"), data: this.animations, columns: 1, renderCard: (animation) => (index.h("ve-effect-showcase-card", { isSelected: this.selectedAnimation === animation.value, tooltip: animation.name, imageUrl: animation.thumbnailUrl, videoUrl: animation.videoPreviewUrl, onClick: () => this.handleSetAnimation(animation) })) }), index.h("div", { key: '668df041391a190b166667ba05d1ed519a87cd8e', class: "spacer-2" }), index.h("ve-panel-grid-list-section", { key: 'c9cef63be8d80925a4d909bb98b11b91aecd8855', title: translation.t("sidebar.subtitlesTab.styles.styles", "Styles"), data: this.styles, visibleItemsCount: this.styles.length, columns: 1, renderCard: (style) => (index.h("ve-effect-showcase-card", { isSelected: this.selectedStyle === style.value, tooltip: style.name, imageUrl: style.thumbnailUrl, videoUrl: style.videoPreviewUrl, onClick: () => this.handleSetStyle(style) })) })));
    }
};
SubtitlesStylesContainer.style = VeSubtitlesStylesContainerStyle0;

const tabsStylesCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.flex{display:flex}.flex-col{flex-direction:column}.justify-center{justify-content:center}.items-center{align-items:center}.w-full{width:100%}.h-full{height:100%}.w-screen{width:100vw}.h-screen{height:100vh}.flex-grow{flex-grow:1}.absolute{position:absolute}.relative{position:relative}.text-elipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-center{text-align:center}.visibility-visible-important{visibility:visible !important}.visibility-hidden-important{visibility:hidden !important}.spacer-1{height:1rem;width:100%}.spacer-2{height:2rem;width:100%}.grid{display:grid;grid-template-columns:repeat(12, 1fr)}.grid.gap-1{grid-gap:5px}.grid.gap-2{grid-gap:10px}.grid.gap-3{grid-gap:15px}.grid.gap-4{grid-gap:20px}.grid.gap-5{grid-gap:25px}.col-span-1{grid-column:span 1}.col-span-2{grid-column:span 2}.col-span-3{grid-column:span 3}.col-span-4{grid-column:span 4}.col-span-5{grid-column:span 5}.col-span-6{grid-column:span 6}.col-span-7{grid-column:span 7}.col-span-8{grid-column:span 8}.col-span-9{grid-column:span 9}.col-span-10{grid-column:span 10}.col-span-11{grid-column:span 11}.col-span-12{grid-column:span 12}@media (min-width: 576px){.col-sm-span-1{grid-column:span 1}.col-sm-span-2{grid-column:span 2}.col-sm-span-3{grid-column:span 3}.col-sm-span-4{grid-column:span 4}.col-sm-span-5{grid-column:span 5}.col-sm-span-6{grid-column:span 6}.col-sm-span-7{grid-column:span 7}.col-sm-span-8{grid-column:span 8}.col-sm-span-9{grid-column:span 9}.col-sm-span-10{grid-column:span 10}.col-sm-span-11{grid-column:span 11}.col-sm-span-12{grid-column:span 12}}@media (min-width: 768px){.col-md-span-1{grid-column:span 1}.col-md-span-2{grid-column:span 2}.col-md-span-3{grid-column:span 3}.col-md-span-4{grid-column:span 4}.col-md-span-5{grid-column:span 5}.col-md-span-6{grid-column:span 6}.col-md-span-7{grid-column:span 7}.col-md-span-8{grid-column:span 8}.col-md-span-9{grid-column:span 9}.col-md-span-10{grid-column:span 10}.col-md-span-11{grid-column:span 11}.col-md-span-12{grid-column:span 12}}@media (min-width: 992px){.col-lg-span-1{grid-column:span 1}.col-lg-span-2{grid-column:span 2}.col-lg-span-3{grid-column:span 3}.col-lg-span-4{grid-column:span 4}.col-lg-span-5{grid-column:span 5}.col-lg-span-6{grid-column:span 6}.col-lg-span-7{grid-column:span 7}.col-lg-span-8{grid-column:span 8}.col-lg-span-9{grid-column:span 9}.col-lg-span-10{grid-column:span 10}.col-lg-span-11{grid-column:span 11}.col-lg-span-12{grid-column:span 12}}@media (min-width: 1200px){.col-xl-span-1{grid-column:span 1}.col-xl-span-2{grid-column:span 2}.col-xl-span-3{grid-column:span 3}.col-xl-span-4{grid-column:span 4}.col-xl-span-5{grid-column:span 5}.col-xl-span-6{grid-column:span 6}.col-xl-span-7{grid-column:span 7}.col-xl-span-8{grid-column:span 8}.col-xl-span-9{grid-column:span 9}.col-xl-span-10{grid-column:span 10}.col-xl-span-11{grid-column:span 11}.col-xl-span-12{grid-column:span 12}}:host{--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}:host([theme=dark]){--primary:#008eff;--background:#1d1d27;--surface:#282937;--surface-light:#3c3c50;--surface-dark:#3a3a4e;--accent:#acacc1;--text:#fefefe;--subtle:#d6d6e2;--hint:#5b5b72;--secondary-dark:#18181f;--secondary-medium:#2d2e3d;--secondary-light:#1f1f2a;--playhead:#ffffff;--error:#ff0000}:host([theme=light]){--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}@media (prefers-color-scheme: light){:host([theme=system]){--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}}@media (prefers-color-scheme: dark){:host([theme=system]){--primary:#008eff;--background:#1d1d27;--surface:#282937;--surface-light:#3c3c50;--surface-dark:#3a3a4e;--accent:#acacc1;--text:#fefefe;--subtle:#d6d6e2;--hint:#5b5b72;--secondary-dark:#18181f;--secondary-medium:#2d2e3d;--secondary-light:#1f1f2a;--playhead:#ffffff;--error:#ff0000}}:host{margin:0px;padding:0px;box-sizing:border-box;font-family:\"Inter\", sans-serif;background-color:var(--background);user-select:none}img{vertical-align:middle}a{color:unset;text-decoration:none}ul{list-style-type:none}::-webkit-scrollbar-corner{background:transparent}.split{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.gutter{background:none;box-shadow:none;height:0.2rem;border-radius:0.5rem;background-repeat:no-repeat;background-position:50%;position:relative;z-index:1000;transition:background, box-shadow 0.2s ease-in}.gutter:hover{background:rgba(var(--primary), 0.5);box-shadow:0px 4px 8px 0px rgba(var(--primary), 0.1);transition:background, box-shadow 0.2s ease-out}.gutter__active{background:rgba(var(--primary), 1) !important;box-shadow:0px 4px 8px 0px rgba(var(--primary), 0.3) !important;transition:background, box-shadow 0.2s ease-out}.gutter.gutter-vertical:hover{cursor:row-resize}.playhead__moveable{overflow:hidden}::-webkit-scrollbar{width:7px;height:7px}::-webkit-scrollbar-track{background:var(--surface)}::-webkit-scrollbar-thumb{background:rgba(var(--hint), 0.8);border-radius:5px}::-webkit-scrollbar-thumb:hover{background:var(--hint)}.tabs__container{width:100%;display:flex;flex-direction:column}.tabs__headers{display:flex;gap:0.25rem;margin-bottom:1rem}.tabs__headers--header{padding:0.5rem 0.75rem;flex:1;border-radius:0.5rem;outline:none;border:0;cursor:pointer;font-size:0.75rem;font-weight:500;padding:0.5rem 0.75rem;text-align:center;background-color:var(--surface-dark);color:var(--accent)}.tabs__headers--header.active{background-color:var(--background);color:var(--accent);font-weight:bold}";
const VeTabsStyle0 = tabsStylesCss;

const Tabs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.activeTab = 0;
        this.tabs = [];
    }
    setActiveTab(index) {
        this.activeTab = index;
    }
    render() {
        return (index.h("div", { key: '96f7cbbb2796abc22bff4a8be269bbada69f1d67', class: "tabs" }, index.h("div", { key: '4e9d7c059d6d10cbb734071ebf63e8dbd3590506', class: "tabs__headers" }, this.tabs.map((tab, index$1) => (index.h("button", { class: {
                "tabs__headers--header": true,
                active: index$1 === this.activeTab,
            }, onClick: () => this.setActiveTab(index$1) }, tab.title)))), index.h("div", { key: 'f023bca8ef10d322e1b8acca4516b1602500115c', class: "tabs__content" }, this.tabs[this.activeTab].content())));
    }
};
Tabs.style = VeTabsStyle0;

exports.ve_no_subtitles_section = NoSubtitlesSection;
exports.ve_subtitle_row = SubtitleRow;
exports.ve_subtitle_row_divider = SubtitleRowDivider;
exports.ve_subtitles_styles_container = SubtitlesStylesContainer;
exports.ve_tabs = Tabs;
