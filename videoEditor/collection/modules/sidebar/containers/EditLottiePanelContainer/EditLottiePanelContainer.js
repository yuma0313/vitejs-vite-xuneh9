import { Engine } from "@rendley/sdk";
import { h } from "@stencil/core";
export class EditLottiePanelContainer {
    constructor() {
        this.clip = null;
        this.handleSetProperty = (name, value) => {
            var _a;
            (_a = this.clip) === null || _a === void 0 ? void 0 : _a.setProperty(name, value);
        };
        this.clipId = undefined;
        this.properties = [];
    }
    componentWillLoad() {
        this.watchClipChange(this.clipId);
    }
    watchClipChange(newClipId) {
        var _a, _b;
        this.clip = Engine.getInstance().getClipById(newClipId);
        this.properties = Object.values((_b = (_a = this.clip) === null || _a === void 0 ? void 0 : _a.getProperties()) !== null && _b !== void 0 ? _b : {});
    }
    render() {
        return (h("ve-configuration-panel", { key: '649dfeeb2de16dec9c05b54e3644a9ccfa3dbbcc' }, h("div", { key: 'a04bc22f5a219f59a8b06a05c510be51301ce14a', class: "col-span-12" }, this.properties.map((property) => {
            var _a;
            return (h("div", { key: `${this.clipId}-${property.name}` }, h("ve-textarea", { label: property.label, placeholder: property.label, defaultValue: (_a = this.clip) === null || _a === void 0 ? void 0 : _a.getPropertyValue(property.name), onChangeText: (value) => this.handleSetProperty(property.name, value) }), h("div", { class: "spacer-1" })));
        }))));
    }
    static get is() { return "ve-edit-lottie-panel"; }
    static get originalStyleUrls() {
        return {
            "$": ["./EditLottiePanelContainer.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["EditLottiePanelContainer.styles.css"]
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
            "properties": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "clipId",
                "methodName": "watchClipChange"
            }];
    }
}
