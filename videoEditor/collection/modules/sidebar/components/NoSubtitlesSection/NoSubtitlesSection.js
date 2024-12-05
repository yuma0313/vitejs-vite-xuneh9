import { h } from "@stencil/core";
import { SubtitlesIcon } from "../../../../assets/icons/SubtitlesIcon";
import { ImportSrtIcon } from "../../../../assets/icons/ImportSrtIcon";
import { t } from "../../../../utils/translation";
export class NoSubtitlesSection {
    constructor() {
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
        return (h("div", { key: 'ad329422142478aee47948603e2fe26f2795bb62', class: "no-subtitles" }, h("div", { key: '2abe80b56c50118eceb3e5a5ee25757ac8d9c63e', class: "no-subtitles__section", onClick: this.handleClickImport }, h(ImportSrtIcon, { key: 'd7e90cd39cd4418c760372c2864c0066570ca6b4' }), h("span", { key: '85f8fc645bb9f97b06d75a64d500023b8ee8e1a4', class: "no-subtitles__section--title" }, t("sidebar.subtitlesTab.import.title", "Import SRT file")), h("span", { key: '44bb5e5e9845d88194a671455bf1665b21e02937', class: "no-subtitles__section--description" }, t("sidebar.subtitlesTab.import.description", "Upload an srt file containing subtitles"))), h("div", { key: '90eeabee8b9744b0b019943547357aae8de640d9', class: "no-subtitles__section", onClick: this.onAdd }, h(SubtitlesIcon, { key: '485786160aba3ff0ecdcfb9b48e0c249752febe6' }), h("span", { key: '294e1f85bc668f10d09c13e97d4ae15197b1ce35', class: "no-subtitles__section--title" }, t("sidebar.subtitlesTab.create.title", "Add Manually")), h("span", { key: 'a743fc0654eb8b85a6b0e2282ef5f1289ecacb92', class: "no-subtitles__section--description" }, t("sidebar.subtitlesTab.create.description", "Create subtitles manually"))), h("input", { key: '371f4e4f16c56fe850824d524e49ced2cfa09d4d', ref: (el) => (this.fileInputRef = el), type: "file", hidden: true, accept: ".srt", onChange: this.handleImport })));
    }
    static get is() { return "ve-no-subtitles-section"; }
    static get originalStyleUrls() {
        return {
            "$": ["NoSubtitlesSection.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["NoSubtitlesSection.styles.css"]
        };
    }
    static get properties() {
        return {
            "onImportSrt": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(srtContent: string) => void",
                    "resolved": "(srtContent: string) => void",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "onAdd": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
}
