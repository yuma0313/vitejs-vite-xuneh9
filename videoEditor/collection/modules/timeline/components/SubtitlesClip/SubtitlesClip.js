import { h } from "@stencil/core";
export class SubtitlesClip {
    constructor() {
        this.clipId = undefined;
        this.layerId = undefined;
    }
    render() {
        return (h("ve-clip", { key: '3c29baf8880ae69c88a061fce84845f3e4804670', clipId: this.clipId, layerId: this.layerId, isResizeEnabled: false, filename: "Subtitles" }, h("svg", { key: '12d147e14a382d9eec7ab3f989a31df85ba2442b', slot: "icon", xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-file-text" }, h("path", { key: 'b8f7688861c3859266ea063cbdb5359f2060b1a6', d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }), h("polyline", { key: '9387f945ec8d8cae13ed00cbc8b73bb4aa5f7d90', points: "14 2 14 8 20 8" }), h("line", { key: 'b7bf8811835c8de028a3a781560857c33a628035', x1: "16", y1: "13", x2: "8", y2: "13" }), h("line", { key: '426220b1506ff1a15cf2926e1769a1d819cf1626', x1: "16", y1: "17", x2: "8", y2: "17" }), h("polyline", { key: 'db691bee169fa1a87d053a9984b6dbeb1a50168c', points: "10 9 9 9 8 9" }))));
    }
    static get is() { return "ve-subtitles-clip"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["./SubtitlesClip.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["SubtitlesClip.styles.css"]
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
            },
            "layerId": {
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
                "attribute": "layer-id",
                "reflect": false
            }
        };
    }
}
