import { h } from "@stencil/core";
import { XIcon } from "../../../../assets/icons/XIcon";
import { Engine } from "@rendley/sdk";
import { UploadIcon } from "../../../../assets/icons/UploadIcon";
export class Panel {
    constructor() {
        this.isMedia = undefined;
        this.onClose = undefined;
    }
    handleClickUpload() {
        if (this.fileInputRef == null) {
            return;
        }
        this.fileInputRef.value = "";
        this.fileInputRef.click();
    }
    async handleUpload(e) {
        const files = e.target.files;
        if (files == null) {
            return;
        }
        const library = Engine.getInstance().getLibrary();
        const promises = [];
        for (let i = 0; i < files.length; i++) {
            promises.push(library.addMedia(files[i]));
        }
        try {
            await Promise.all(promises);
        }
        catch (e) {
            console.log(e);
        }
    }
    render() {
        return (h("div", { key: 'c0e58e0a1919765bb326f217b46325b37f110ad2', class: "panel" }, h("div", { key: '258eef2394d0146c2b2bda9e41f0c3495d95980f', class: "panel__header" }, h("div", { key: 'b6090ffe61a3dba5f781733f0eea5460a1b4bf80' }, this.isMedia && (h("ve-btn", { key: '915cf309f8275300deb3197c400539c836585872', onClick: this.handleClickUpload.bind(this) }, h(UploadIcon, { key: 'b5f4626be2d0242b5a50a4833eb2c1cb05327101', slot: "icon" })))), h("ve-btn", { key: 'bcc8073d6823eff3f22d5ff8bd4b5aeab187d4da', variant: "default", onClick: this.onClose }, h(XIcon, { key: 'e7ca135c4e191c39b1b86ec454f90c68680aa057', slot: "icon" }))), h("slot", { key: 'ba5a65b8f3bf982c4fe25822f18a0dced6e91cfa' }), this.isMedia && (h("input", { key: '39fa3c189bab106fa27831054151be61cbb5673c', class: "media-panel-container__file-input", ref: (el) => (this.fileInputRef = el), type: "file", hidden: true, multiple: true, accept: "image/*, video/*, audio/*", onChange: this.handleUpload.bind(this) }))));
    }
    static get is() { return "ve-panel"; }
    static get originalStyleUrls() {
        return {
            "$": ["Panel.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Panel.styles.css"]
        };
    }
    static get properties() {
        return {
            "isMedia": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is-media",
                "reflect": false
            },
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
}
