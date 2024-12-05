import { Engine } from "@rendley/sdk";
import { Host, h } from "@stencil/core";
import { autorun } from "mobx";
import clsx from "clsx";
import { ShortcutService } from "./services/ShortcutService";
import { ApplicationStore } from "./store/ApplicationStore";
import { StockMediaService } from "./services/StockMediaService";
import { RendleyStore } from "./store/RendleyStore";
import { EFFECTS_PATH_CDN, FILTERS_PATH_CDN, SUBTITLES_STYLES_PATH_CDN, TITLES_PATH_CDN, TRANSITIONS_PATH_CDN, } from "./config/config";
import { RendleyService } from "./services/RendleyService";
import RendleyBridge from "./RendleyBridge";
import { getCanvasElement } from "./utils/dom/getCanvasElement";
import { ContextMenuStore } from "./store/ContextMenuStore";
import { SidebarStore } from "./store/SidebarStore";
import { TimelineStore } from "./store/TimelineStore";
import { WindowStore } from "./store/WindowStore";
export class RendleyVideoEditor {
    constructor() {
        this.theme = ApplicationStore.theme;
        this.licensename = undefined;
        this.licensekey = undefined;
        this.pexelsapikey = undefined;
        this.giphyapikey = undefined;
        this.filtersPath = FILTERS_PATH_CDN;
        this.effectsPath = EFFECTS_PATH_CDN;
        this.transitionsPath = TRANSITIONS_PATH_CDN;
        this.titlesPath = TITLES_PATH_CDN;
        this.subtitlesStylesPath = SUBTITLES_STYLES_PATH_CDN;
        this.isLoading = ApplicationStore.isLoading;
        this.isRendering = ApplicationStore.isRendering;
    }
    componentWillLoad() {
        if (this.pexelsapikey && this.giphyapikey) {
            StockMediaService.getInstance().init({
                pexelsApiKey: this.pexelsapikey,
                giphyApiKey: this.giphyapikey,
            });
        }
        ShortcutService.getInstance().init();
        ApplicationStore.setTheme(this.theme);
        this.disposeAutorun = autorun(() => {
            var _a, _b, _c;
            this.isLoading = ApplicationStore.isLoading;
            this.isRendering = ApplicationStore.isRendering;
            const renderSuccessBlobUrl = RendleyStore.render.blobUrl;
            const renderErrorMessage = RendleyStore.render.error;
            if (renderSuccessBlobUrl) {
                (_a = this.onRenderSuccess) === null || _a === void 0 ? void 0 : _a.emit(renderSuccessBlobUrl);
            }
            if (renderErrorMessage) {
                (_b = this.onRenderError) === null || _b === void 0 ? void 0 : _b.emit(renderErrorMessage);
            }
            (_c = this.el) === null || _c === void 0 ? void 0 : _c.setAttribute("theme", ApplicationStore.theme);
        });
    }
    componentDidLoad() {
        this.init();
    }
    disconnectedCallback() {
        this.destroy();
    }
    async destroy() {
        var _a;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
        ShortcutService.getInstance().destroy();
        StockMediaService.getInstance().destroy();
        RendleyBridge.destroy();
        await Engine.getInstance().destroy(true);
        ApplicationStore.reset();
        ContextMenuStore.reset();
        RendleyStore.reset();
        SidebarStore.reset();
        TimelineStore.reset();
        WindowStore.reset();
    }
    async init() {
        var _a, _b, _c, _d, _e, _f, _g;
        try {
            let license;
            if (this.licensename && this.licensekey) {
                license = {
                    licenseName: this.licensename,
                    licenseKey: this.licensekey,
                };
            }
            await RendleyService.init({
                display: {
                    width: 1920,
                    height: 1080,
                    backgroundColor: "#FFFFFF",
                    view: getCanvasElement(),
                },
                license,
            });
            await RendleyBridge.init({
                filtersPath: (_a = this.filtersPath) !== null && _a !== void 0 ? _a : "",
                effectsPath: (_b = this.effectsPath) !== null && _b !== void 0 ? _b : "",
                transitionsPath: (_c = this.transitionsPath) !== null && _c !== void 0 ? _c : "",
                titlesPath: (_d = this.titlesPath) !== null && _d !== void 0 ? _d : "",
                subtitlesStylesPath: (_e = this.subtitlesStylesPath) !== null && _e !== void 0 ? _e : "",
            });
            (_f = this.onReady) === null || _f === void 0 ? void 0 : _f.emit();
        }
        catch (error) {
            (_g = this.onError) === null || _g === void 0 ? void 0 : _g.emit(error);
            return null;
        }
    }
    async getElement() {
        return Promise.resolve(this.el);
    }
    async getEngine() {
        return Engine;
    }
    async handleDropFiles(files) {
        const library = Engine.getInstance().getLibrary();
        const promises = [];
        for (let i = 0; i < files.length; i++) {
            promises.push(library.addMedia(files[i]));
        }
        await Promise.all(promises);
    }
    render() {
        return (h(Host, { key: 'f1dd25bceaae89261248afb473818ab259bbd984' }, h("div", { key: 'ecf98b4b0f15d4c10a5e5fab123584075517930d', class: clsx("relative w-ful h-full") }, this.isLoading && h("ve-loading-layout", { key: '9fb73c19fe775eba03112019bc8bf3f7884799d9' }), this.isRendering && h("ve-rendering-layout", { key: '59f286597653ab2d94ffe7e09ca528ffc9350fea' }), h("ve-layout", { key: 'a50482294ccc873a1ca68df78a3664d1ccb4aa6c', onDropFiles: this.handleDropFiles }, h("ve-composition", { key: '8c07a2cfcc8ee002736bf9c6667cff7de84ccaee', slot: "rendley-container" }), h("ve-timeline", { key: 'c217ccdc0bdc2287bef07e55fbcfbe970b7f0982', slot: "timeline" })), h("ve-context-menu", { key: '3327458ffc6648d3a788dbf8feee85d5be0a0030' }))));
    }
    static get is() { return "rendley-video-editor"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "theme": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ThemeVariants",
                    "resolved": "\"dark\" | \"light\" | \"system\" | undefined",
                    "references": {
                        "ThemeVariants": {
                            "location": "import",
                            "path": "./store/ApplicationStore",
                            "id": "src/store/ApplicationStore.ts::ThemeVariants"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "theme",
                "reflect": false,
                "defaultValue": "ApplicationStore.theme"
            },
            "licensename": {
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
                "attribute": "licensename",
                "reflect": false
            },
            "licensekey": {
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
                "attribute": "licensekey",
                "reflect": false
            },
            "pexelsapikey": {
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
                "attribute": "pexelsapikey",
                "reflect": false
            },
            "giphyapikey": {
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
                "attribute": "giphyapikey",
                "reflect": false
            },
            "filtersPath": {
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
                "attribute": "filters-path",
                "reflect": false,
                "defaultValue": "FILTERS_PATH_CDN"
            },
            "effectsPath": {
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
                "attribute": "effects-path",
                "reflect": false,
                "defaultValue": "EFFECTS_PATH_CDN"
            },
            "transitionsPath": {
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
                "attribute": "transitions-path",
                "reflect": false,
                "defaultValue": "TRANSITIONS_PATH_CDN"
            },
            "titlesPath": {
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
                "attribute": "titles-path",
                "reflect": false,
                "defaultValue": "TITLES_PATH_CDN"
            },
            "subtitlesStylesPath": {
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
                "attribute": "subtitles-styles-path",
                "reflect": false,
                "defaultValue": "SUBTITLES_STYLES_PATH_CDN"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "isRendering": {}
        };
    }
    static get events() {
        return [{
                "method": "onReady",
                "name": "onReady",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "onError",
                "name": "onError",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "unknown",
                    "resolved": "unknown",
                    "references": {}
                }
            }, {
                "method": "onRenderSuccess",
                "name": "onRenderSuccess",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "onRenderError",
                "name": "onRenderError",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "getElement": {
                "complexType": {
                    "signature": "() => Promise<HTMLElement | undefined>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    },
                    "return": "Promise<HTMLElement | undefined>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "getEngine": {
                "complexType": {
                    "signature": "() => Promise<typeof Engine>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<typeof Engine>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
