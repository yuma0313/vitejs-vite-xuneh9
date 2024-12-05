import { Engine } from "@rendley/sdk";
import { h } from "@stencil/core";
import { autorun } from "mobx";
import { BoldIcon } from "../../../../assets/icons/BoldIcon";
import { ItalicIcon } from "../../../../assets/icons/ItalicIcon";
import { RendleyStore } from "../../../../store/RendleyStore";
import { getBrowserFonts } from "../../../timeline/utils/getBrowserFonts";
import clsx from "clsx";
import { AlignLeftIcon } from "../../../../assets/icons/AlignLeftIcon";
import { AlignCenterIcon } from "../../../../assets/icons/AlignCenterIcon";
import { AlignRightIcon } from "../../../../assets/icons/AlignRightIcon";
import { RendleyService } from "../../../../services/RendleyService";
import { t } from "../../../../utils/translation";
export class EditTextPanel {
    constructor() {
        this.fonts = [];
        this.handleChangeText = (value) => {
            const clip = Engine.getInstance().getClipById(this.clipId);
            clip.setText(value);
        };
        this.handleChangeFontSize = (value) => {
            const clip = Engine.getInstance().getClipById(this.clipId);
            clip.style.setFontSize(parseInt(value, 10));
        };
        this.handleChangeColor = (color) => {
            const clip = Engine.getInstance().getClipById(this.clipId);
            clip.style.setColor(color);
        };
        this.handleChangeBackgroundColor = (color) => {
            const clip = Engine.getInstance().getClipById(this.clipId);
            clip.style.setBackgroundColor(color.length > 0 ? color : null);
        };
        this.handleToggleBold = () => {
            const clip = Engine.getInstance().getClipById(this.clipId);
            clip.style.setFontWeight(clip.style.getFontWeight() === "bold" ? "normal" : "bold");
        };
        this.handleToggleItalic = () => {
            const clip = Engine.getInstance().getClipById(this.clipId);
            clip.style.setFontStyle(clip.style.getFontStyle() === "italic" ? "normal" : "italic");
        };
        this.handleToggleAlignment = (position) => {
            const clip = Engine.getInstance().getClipById(this.clipId);
            clip.style.setTextAlign(clip.style.getTextAlign() === position ? "justify" : position);
        };
        this.handleChangeFontFamily = (event) => {
            const value = event.detail.value;
            const clip = Engine.getInstance().getClipById(this.clipId);
            clip.style.setFontFamily(value);
        };
        this.clipId = undefined;
        this.selectedClip = undefined;
        this.style = {};
        this.text = "";
    }
    componentWillLoad() {
        this.disposeAutorun = autorun(() => {
            var _a, _b;
            this.text = (_b = (_a = RendleyStore.clips[this.clipId]) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : "";
            this.style = RendleyStore.styles[this.clipId];
            this.handleSetFonts();
        });
    }
    watchClipChange(newClipId) {
        var _a;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
        this.disposeAutorun = autorun(() => {
            var _a, _b;
            this.text = (_b = (_a = RendleyStore.clips[newClipId]) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : "";
            this.style = RendleyStore.styles[newClipId];
            this.handleSetFonts();
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    handleSetFonts() {
        const installedFonts = RendleyService.getFonts();
        const browserFonts = getBrowserFonts();
        const allFonts = new Set([...installedFonts.map((font) => font.family), ...browserFonts]);
        this.fonts = [...allFonts];
    }
    render() {
        const isBold = this.style.fontWeight === "bold";
        const isItalic = this.style.fontStyle === "italic";
        const isAlignLeft = this.style.textAlign === "left";
        const isAlignCenter = this.style.textAlign === "center";
        const isAlignRight = this.style.textAlign === "right";
        return (h("ve-configuration-panel", { key: 'c474862d945d91557ab1036dff08926edb44f650' }, h("div", { key: '9eccadc9da2a1ad838fba78356061d4b3ca1aabe', class: "col-span-12" }, h("ve-textarea", { key: '3f28ddd13ba57e62dec704da9c07eb40a8675c7b', label: t("common.text", "Text"), placeholder: "Text", value: this.text, onChangeText: this.handleChangeText })), h("div", { key: '3eb83bcc12457e8e774c3617451695fc80386da4', class: "col-span-12" }, h("ve-select", { key: '4c84cdaa810f9f416a9959be05af148c28726023', value: this.style.fontFamily, label: t("common.font", "Font"), variant: "border", onOptionSelected: this.handleChangeFontFamily, selectStyle: { fontFamily: this.style.fontFamily } }, this.fonts.map((fontName) => (h("ve-option", { optionStyle: { fontFamily: fontName }, label: fontName, value: fontName }, fontName))))), h("div", { key: 'dd1b4fcd81516e934d5624d86b6b2d8eea32f584', class: "col-span-12" }, h("ve-input", { key: '8cea4cf6db802c2a67b7989296f4079afcaaab8c', type: "number", label: t("common.size", "Size"), value: this.style.fontSize, placeholder: "18", onChangeText: this.handleChangeFontSize })), h("div", { key: '4c3352045655e16600e8a4aa078224c88a877377', class: "col-span-12" }, h("ve-color-input", { key: 'a531b13b6d4ff8b75af704c01f243d406d1064e1', label: t("common.color", "Color"), color: this.style.color, onChangeColor: this.handleChangeColor })), h("div", { key: '2f54432a1640e0ba1218ec6e1c7d8667ef33c93b', class: "col-span-12" }, h("ve-color-input", { key: 'dff43eb2fa396039f0c629c5b72f58318faf940e', label: t("common.backgroundColor", "Background Color"), color: this.style.backgroundColor, onChangeColor: this.handleChangeBackgroundColor })), h("div", { key: '13b89d76adb85dc18380b4c129260c8645e29920', class: "col-span-12" }, h("ve-btn-group", { key: 'e69354f3c68edc7029b27e8f9114f6c9e81a50ff', label: t("common.style", "Style") }, h("ve-btn", { key: '90dc8dd47d6ccb120787a159377a7436b3b5979e', variant: isBold ? "primary" : "default", onClick: this.handleToggleBold }, h(BoldIcon, { key: '2f256df23d604a5f4f21d3efed93a753a1d7ec71', slot: "icon" })), h("ve-btn", { key: '5b850e130eadbb383f67006480d9bda64b57c748', variant: isItalic ? "primary" : "default", class: clsx({
                "edit-text__btn-selected": isItalic,
            }), onClick: this.handleToggleItalic }, h(ItalicIcon, { key: '3df78de1bb08895c857ff443f1395bfa631344e1', slot: "icon" })))), h("div", { key: '5d343de045daf1d44166f4803a6056ba7ca8258b', class: "col-span-12" }, h("ve-btn-group", { key: '00dd87a011b3627a1de331458e78ef9e76319e61', label: t("common.alignment", "Alignment") }, h("ve-btn", { key: 'c5a23ac17ec4314e1fcec567f6eb36b532e68142', variant: isAlignLeft ? "primary" : "default", onClick: () => this.handleToggleAlignment("left") }, h(AlignLeftIcon, { key: '8fd3c030645ee4f7ca831141bb1d43db3ab84b79', slot: "icon" })), h("ve-btn", { key: '30cb2e6b79b1dbebe19f060249c28de187d263e2', variant: isAlignCenter ? "primary" : "default", onClick: () => this.handleToggleAlignment("center") }, h(AlignCenterIcon, { key: '481392aed56c19649ae02c6d74b7c676f760e178', slot: "icon" })), h("ve-btn", { key: 'a392a1336bda49c498275721c346d36a0c89c055', variant: isAlignRight ? "primary" : "default", onClick: () => this.handleToggleAlignment("right") }, h(AlignRightIcon, { key: '6ab156ab057edb8122e12745bc9f002af0a48a6a', slot: "icon" }))))));
    }
    static get is() { return "ve-edit-text-panel"; }
    static get originalStyleUrls() {
        return {
            "$": ["./EditTextPanel.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["EditTextPanel.styles.css"]
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
            }
        };
    }
    static get states() {
        return {
            "selectedClip": {},
            "style": {},
            "text": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "clipId",
                "methodName": "watchClipChange"
            }];
    }
}
