import { h } from "@stencil/core";
import { autorun } from "mobx";
import { RendleyStore } from "../../../../store/RendleyStore";
import { Engine } from "@rendley/sdk";
import { t } from "../../../../utils/translation";
const CUSTOM_LABEL = "custom";
const OPTIONS = [
    { label: "resolutions.youtube", width: 1920, height: 1080 },
    { label: "resolutions.instagram", width: 1080, height: 1080 },
    { label: "resolutions.twitter", width: 1200, height: 600 },
    { label: "resolutions.tiktok", width: 1080, height: 1920 },
];
export class AspectRatioSelector {
    constructor() {
        this.modalOpen = false;
        this.display = RendleyStore.display;
        this.options = OPTIONS;
        this.selectedLabel = undefined;
    }
    componentWillLoad() {
        this.disposeAutorun = autorun(() => {
            this.display = RendleyStore.display;
            const { width, height } = this.display;
            const option = OPTIONS.find((option) => option.width === width && option.height === height);
            if (option) {
                this.selectedLabel = t(option.label);
            }
            else {
                this.selectedLabel = `${width}x${height}`;
            }
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    handleOptionSelect(event) {
        const value = event.detail.value;
        // user selected custom resolution
        if (value.label === CUSTOM_LABEL) {
            this.modalOpen = true;
            return;
        }
        this.selectedLabel = t(value.label);
        const { width, height } = value;
        Engine.getInstance().getDisplay().setResolution(width, height);
    }
    renderIcon(width, height) {
        const maxSize = 16;
        const scaleFactor = Math.min(maxSize / width, maxSize / height);
        const adjustedWidth = width * scaleFactor;
        const adjustedHeight = height * scaleFactor;
        return (h("svg", { width: adjustedWidth, height: adjustedHeight, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("rect", { width: adjustedWidth, height: adjustedHeight, rx: "2", fill: "#CCC" })));
    }
    handleCloseModal() {
        this.modalOpen = false;
    }
    handleSubmitCustomResolution(width, height) {
        Engine.getInstance().getDisplay().setResolution(width, height);
        this.selectedLabel = `${width}x${height}`;
    }
    render() {
        return (h("div", { key: '072e92906846530378af080c8fb8d7571bb8c066', class: "aspect-ratio-selector" }, h("ve-select", { key: '457391be414c7230a879d5db500614d015c6bafc', value: this.selectedLabel, onOptionSelected: (event) => this.handleOptionSelect(event) }, OPTIONS.map((option, index) => (h("ve-option", { index: index, key: option.label, label: option.label, value: { label: option.label, width: option.width, height: option.height } }, h("div", { class: "aspect-ratio-selector__icon-container" }, option.width && option.height && this.renderIcon(option.width, option.height)), t(option.label)))), h("ve-option", { key: 'b43572a53053d94bd74869a7faf303639b5cad4d', index: OPTIONS.length, value: { label: CUSTOM_LABEL } }, t("resolutions.custom", "Custom resolution"))), h("ve-modal", { key: 'fb034782d11ce4576e8182d78147b793f7be735e', open: this.modalOpen, content: h("ve-aspect-ratio-form", { onClose: this.handleCloseModal.bind(this), onSubmitAspectRatio: this.handleSubmitCustomResolution.bind(this) }) })));
    }
    static get is() { return "ve-aspect-ratio-selector"; }
    static get originalStyleUrls() {
        return {
            "$": ["AspectRatioSelector.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["AspectRatioSelector.styles.css"]
        };
    }
    static get states() {
        return {
            "modalOpen": {},
            "display": {},
            "options": {},
            "selectedLabel": {}
        };
    }
}
