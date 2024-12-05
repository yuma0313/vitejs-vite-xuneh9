import { h } from "@stencil/core";
import { XIcon } from "../../../../assets/icons/XIcon";
import { z } from "zod";
import { t } from "../../../../utils/translation";
const aspectRatioScheme = z.object({
    width: z.number().positive().min(50).max(2000),
    height: z.number().positive().min(50).max(2000),
});
export class AspectRatioForm {
    constructor() {
        this.handleSubmit = (e) => {
            var _a, _b, _c, _d, _e, _f;
            try {
                e.preventDefault();
                const width = e.target.width.value;
                const height = e.target.height.value;
                const result = aspectRatioScheme.parse({ width: Number(width), height: Number(height) });
                if (result) {
                    (_a = this.onSubmitAspectRatio) === null || _a === void 0 ? void 0 : _a.call(this, result.width, result.height);
                    (_b = this.onClose) === null || _b === void 0 ? void 0 : _b.call(this);
                }
            }
            catch (error) {
                const formatted = error.format();
                this.widthError = (_d = (_c = formatted === null || formatted === void 0 ? void 0 : formatted.width) === null || _c === void 0 ? void 0 : _c._errors) === null || _d === void 0 ? void 0 : _d[0];
                this.heightError = (_f = (_e = formatted === null || formatted === void 0 ? void 0 : formatted.height) === null || _e === void 0 ? void 0 : _e._errors) === null || _f === void 0 ? void 0 : _f[0];
            }
        };
        this.onClose = undefined;
        this.onSubmitAspectRatio = undefined;
        this.widthError = undefined;
        this.heightError = undefined;
    }
    render() {
        return (h("div", { key: 'd0bab39c5448f0bd68d5b90d4fbf0e818ea15d60', class: "aspect-ratio-form" }, h("div", { key: '53b69a94a4eb2d607bebbdaabb7b1f17dae3bacd', class: "aspect-ratio-form__close-btn" }, h("ve-btn", { key: '2922bc384cd9e2833b5e6396f952bf000c6f7753', onClick: () => { var _a; return (_a = this.onClose) === null || _a === void 0 ? void 0 : _a.call(this); } }, h(XIcon, { key: 'd307bc823a215e1f1fd94c5685ded0a48be45aca' }))), h("form", { key: 'ef6e6765296218d79d5b25b2b539723aa9296437', class: "aspect-ratio-form__content", onSubmit: (e) => this.handleSubmit(e) }, h("ve-input", { key: 'fcab7c801cfab5d3e44373e50b7cf0fdf16ea56c', type: "number", placeholder: t("common.width", "Width"), name: "width", error: this.widthError }), h("ve-input", { key: '37918bc095f6f1d0076b30fecbc9b96a02a023ae', type: "number", placeholder: t("common.height", "Height"), name: "height", error: this.heightError }), h("ve-btn", { key: '2c2b52f1b6f54a7bfb44a687c9a9f8325ba0988a', variant: "primary" }, t("common.save", "Save")))));
    }
    static get is() { return "ve-aspect-ratio-form"; }
    static get originalStyleUrls() {
        return {
            "$": ["./AspectRatioForm.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["AspectRatioForm.styles.css"]
        };
    }
    static get properties() {
        return {
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
            },
            "onSubmitAspectRatio": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(width: number, height: number) => void",
                    "resolved": "((width: number, height: number) => void) | undefined",
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
    static get states() {
        return {
            "widthError": {},
            "heightError": {}
        };
    }
}
