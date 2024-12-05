import { h } from "@stencil/core";
import { TrashIcon } from "../../../../assets/icons/TrashIcon";
import { isLetter } from "../../../../utils/isLetter";
import { secondsToTimecode } from "../../../../utils/secondsToTimecode";
import { timecodeToSeconds } from "../../../../utils/timecodeToSeconds";
import clsx from "clsx";
export class SubtitleRow {
    constructor() {
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
                this.tempInValue = secondsToTimecode(this.subtitle.time);
                return;
            }
            const changed = this.onChangeIn(nextValue);
            if (changed) {
                this.tempInValue = secondsToTimecode(nextValue);
            }
            else {
                this.tempInValue = secondsToTimecode(this.subtitle.time);
            }
        };
        this.handleBlurOut = () => {
            this.isEditing = false;
            const nextValue = timecodeToSeconds(this.tempOutValue);
            if (nextValue == null) {
                this.tempOutValue = secondsToTimecode(this.subtitle.time + this.subtitle.duration);
                return;
            }
            const changed = this.onChangeOut(nextValue);
            if (changed) {
                this.tempOutValue = secondsToTimecode(nextValue);
            }
            else {
                this.tempOutValue = secondsToTimecode(this.subtitle.time + this.subtitle.duration);
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
        this.tempInValue = secondsToTimecode(this.subtitle.time);
        this.tempOutValue = secondsToTimecode(this.subtitle.time + this.subtitle.duration);
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
        return (h("div", { key: '8f587d423ad7db6affdd4cf15307f2cf225c5632', class: "subtitle-row" }, h("div", { key: 'ec529972f5b3440e01ac32f77c111492e710cb00', class: clsx("subtitle-row__indicator", {
                "subtitle-row__indicator--active": this.isEditing || this.isActive,
            }) }), h("div", { key: '471108fc75648007bfabc9ae015c73294c81af6f', class: "subtitle-row__content" }, h("div", { key: '0a19e4f3ccbd39446a19ec61053cd000d1916f76', class: "subtitle-row__header" }, h("div", { key: 'a2ee563a1b230c0b6ca3506a142078459c69252a', class: "subtitle-row__subtitles" }, h("input", { key: '0a63ea4d72f2cbc9e06a92fce035f410546a2451', type: "text", class: "subtitle-row__subtitles--label", value: this.tempInValue, size: this.tempInValue.length, onFocus: this.handleFocus, onInput: this.handleChangeIn, onBlur: this.handleBlurIn, onKeyDown: this.handleTimeLabelKeydown }), h("span", { key: '4162dd93d94abff31b70ac8b447fd1073e3bf218', class: "subtitle-row__subtitles--separator" }, "-"), h("input", { key: 'c8685184a093b57bccfdd0b0c840b4e9bf58e4d6', type: "text", class: "subtitle-row__subtitles--label", value: this.tempOutValue, size: this.tempOutValue.length > 10 ? 10 : this.tempOutValue.length, onFocus: this.handleFocus, onInput: this.handleChangeOut, onBlur: this.handleBlurOut, onKeyDown: this.handleTimeLabelKeydown })), h("ve-btn", { key: '7d7b7605b63f8f4bfb1d52a3ce270aea6cb6bc65', onClick: this.onDelete.bind(this) }, h("div", { key: 'd00b3125a103ac4c61a9cf564b58f2763f499a5a', slot: "icon" }, h(TrashIcon, { key: '9652a6e52992695d63815c7728092e309fdec056' })))), h("textarea", { key: '3ef67ce63b76e40906c7e96898be8a3a0e29c030', class: "subtitle-row__text", ref: (el) => (this.contentTextarea = el), onFocus: this.handleFocus, onInput: this.handleChangeText, onBlur: this.handleBlur }, this.subtitle.text))));
    }
    static get is() { return "ve-subtitle-row"; }
    static get originalStyleUrls() {
        return {
            "$": ["SubtitleRow.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["SubtitleRow.styles.css"]
        };
    }
    static get properties() {
        return {
            "subtitle": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TextBlock",
                    "resolved": "TextBlock",
                    "references": {
                        "TextBlock": {
                            "location": "import",
                            "path": "@rendley/sdk",
                            "id": "node_modules::TextBlock"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "isActive": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is-active",
                "reflect": false
            },
            "onChangeIn": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(value: number) => boolean",
                    "resolved": "(value: number) => boolean",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "onChangeOut": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(value: number) => boolean",
                    "resolved": "(value: number) => boolean",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "onChangeText": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(value: string) => void",
                    "resolved": "(value: string) => void",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "onDelete": {
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
    static get states() {
        return {
            "isEditing": {},
            "tempInValue": {},
            "tempOutValue": {}
        };
    }
}
