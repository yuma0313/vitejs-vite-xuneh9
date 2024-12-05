import { h } from "@stencil/core";
import { debounce } from "../../utils/debounce";
import { XIcon } from "../../assets/icons/XIcon";
import { CheckIcon } from "../../assets/icons/CheckIcon";
import clsx from "clsx";
export class EffectShowcaseCard {
    constructor() {
        this.handleMouseOver = debounce(() => {
            this.isHovering = true;
        }, 100);
        this.imageUrl = undefined;
        this.videoUrl = undefined;
        this.name = undefined;
        this.tooltip = undefined;
        this.onDelete = undefined;
        this.isSelected = undefined;
        this.onMouseDown = undefined;
        this.isHovering = false;
        this.imageLoaded = false;
        this.videoLoaded = false;
        this.isLoading = false;
    }
    handleImageLoaded() {
        this.imageLoaded = true;
    }
    handleVideoLoaded() {
        this.videoLoaded = true;
    }
    handleMouseOut() {
        this.videoLoaded = false;
        setTimeout(() => {
            this.isHovering = false;
        }, 100);
    }
    handleMouseDown(e) {
        if (this.onMouseDown == null) {
            return;
        }
        this.isLoading = true;
        Promise.resolve(this.onMouseDown(e)).then(() => {
            this.isLoading = false;
        });
    }
    render() {
        var _a;
        const isLoadingVisible = this.isLoading; /*|| (this.isHovering && !this.videoLoaded);*/
        const isVideoVisible = this.videoUrl != null && this.isHovering;
        const isDeleteVisible = this.isHovering && this.onDelete != null;
        const isSelectedVisible = (_a = this.isSelected) !== null && _a !== void 0 ? _a : false;
        return (h("div", { key: 'dcfbf1536a89f454065fa734a2061ae0ead19d6e', class: "effect-showcase", title: this.tooltip, onMouseOver: this.handleMouseOver.bind(this), onMouseOut: this.handleMouseOut.bind(this), onMouseDown: this.handleMouseDown.bind(this) }, h("div", { key: 'b1056139387fe4c1ab65352a9748f1444c83c307', class: clsx("effect-showcase__root", {
                "effect-showcase__root-selected": isSelectedVisible,
            }) }, isLoadingVisible && (h("div", { key: 'bf843d23dc4f1b061fcae12749a350fde32d1095', class: "effect-showcase__loading" }, h("ve-card-loading-overlay", { key: '3ba26b7fe8ee111d3097244aed3b7c63d5de1f6b' }))), isDeleteVisible && (h("div", { key: 'e5ef06701cb3654a2a82bd36eb471308e4835a16', class: "effect-showcase__delete" }, h(XIcon, { key: 'cedb812b0e2897ecd32d9a7848381b4999efd76d' }))), isSelectedVisible && (h("div", { key: '4269246e7cc9241671b0a3b83ee7c1c0fe3dff7f', class: "effect-showcase__selected" }, h(CheckIcon, { key: '8d668b8fa56f1047338381dd1b1df1afec387143' }))), h("img", { key: '6f22483ecc3f6c18b787b6bf7bfef9ff57ce8ce3', class: "effect-showcase__image", src: this.imageUrl, onLoad: this.handleImageLoaded.bind(this), style: { opacity: this.imageLoaded ? "1" : "0" } }), isVideoVisible && (h("video", { key: '2835850686b2ea9851baf54073e14adb5faba992', class: "effect-showcase__video", src: this.videoUrl, autoplay: true, loop: true, preload: "auto", crossOrigin: "anonymous", playsInline: true, style: { opacity: this.videoLoaded ? "1" : "0" }, onLoadedData: this.handleVideoLoaded.bind(this) }))), this.name != null && (h("span", { key: 'ca090d200bfae07bc8376ba89b118270c8fcbbe5', class: clsx("effect-showcase__title", {
                "effect-showcase__title-selected": isSelectedVisible,
            }) }, this.name))));
    }
    static get is() { return "ve-effect-showcase-card"; }
    static get originalStyleUrls() {
        return {
            "$": ["EffectShowcaseCard.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["EffectShowcaseCard.styles.css"]
        };
    }
    static get properties() {
        return {
            "imageUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "image-url",
                "reflect": false
            },
            "videoUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "video-url",
                "reflect": false
            },
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "name",
                "reflect": false
            },
            "tooltip": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "tooltip",
                "reflect": false
            },
            "onDelete": {
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
            },
            "isSelected": {
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
                "attribute": "is-selected",
                "reflect": false
            },
            "onMouseDown": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(event: MouseEvent) => Promise<unknown> | void",
                    "resolved": "((event: MouseEvent) => void | Promise<unknown>) | undefined",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        },
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    }
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
            "isHovering": {},
            "imageLoaded": {},
            "videoLoaded": {},
            "isLoading": {}
        };
    }
}
