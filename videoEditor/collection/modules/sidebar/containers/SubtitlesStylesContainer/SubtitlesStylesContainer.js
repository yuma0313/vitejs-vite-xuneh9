import { h } from "@stencil/core";
import { Engine, HighlightAnimationEnum } from "@rendley/sdk";
import { t } from "../../../../utils/translation";
import { RendleyStore } from "../../../../store/RendleyStore";
import { autorun } from "mobx";
import { ApplicationStore } from "../../../../store/ApplicationStore";
export class SubtitlesStylesContainer {
    constructor() {
        this.modes = [];
        this.animations = [];
        this.styles = [];
        this.selectedStyle = RendleyStore.subtitlesStyles.selectedStyle;
        this.selectedAnimation = RendleyStore.subtitlesStyles.selectedAnimation;
        this.selectedMode = RendleyStore.subtitlesStyles.selectedMode;
    }
    componentWillLoad() {
        this.init();
        this.disposeAutorun = autorun(() => {
            this.selectedStyle = RendleyStore.subtitlesStyles.selectedStyle;
            this.selectedAnimation = RendleyStore.subtitlesStyles.selectedAnimation;
            this.selectedMode = RendleyStore.subtitlesStyles.selectedMode;
        });
    }
    componentWillUnmount() {
        if (this.disposeAutorun) {
            this.disposeAutorun();
        }
    }
    init() {
        const subtitleStylesRoot = ApplicationStore.subtitleStylesPath;
        fetch(subtitleStylesRoot + "subtitles.json")
            .then((data) => data.json())
            .then((data) => {
            this.modes = data.modes.map((mode) => ({
                name: mode.name,
                value: mode.value,
                thumbnailUrl: subtitleStylesRoot + mode.path + "thumbnail.webp",
                videoPreviewUrl: subtitleStylesRoot + mode.path + "preview.mp4",
            }));
            this.animations = data.animations.map((animation) => ({
                name: animation.name,
                value: animation.value,
                thumbnailUrl: subtitleStylesRoot + animation.path + "thumbnail.webp",
                videoPreviewUrl: subtitleStylesRoot + animation.path + "preview.mp4",
            }));
            this.styles = data.styles.map((style) => ({
                name: style.name,
                value: subtitleStylesRoot + style.path + "data.json",
                thumbnailUrl: subtitleStylesRoot + style.path + "thumbnail.webp",
                videoPreviewUrl: subtitleStylesRoot + style.path + "preview.mp4",
            }));
        });
    }
    handleSetMode(value) {
        const subtitlesManager = Engine.getInstance().getSubtitlesManager();
        RendleyStore.setSubtitlesMode(value.value);
        subtitlesManager.setTextMode(value.value);
    }
    async handleSetStyle(value) {
        const subtitlesManager = Engine.getInstance().getSubtitlesManager();
        if (value.value === this.selectedStyle) {
            RendleyStore.setSubtitlesStyle(null);
            const defaultStyles = {};
            // resets to default styles
            subtitlesManager.setMainTextStyle(defaultStyles, true);
            subtitlesManager.setHighlightedTextStyle(defaultStyles, true);
            return;
        }
        RendleyStore.setSubtitlesStyle(value.value);
        const data = await fetch(value.value).then((data) => data.json());
        subtitlesManager.setMainTextStyle(data.mainTextStyle, true);
        subtitlesManager.setHighlightedTextStyle(data.highlightTextStyle, true);
    }
    handleSetAnimation(value) {
        const subtitlesManager = Engine.getInstance().getSubtitlesManager();
        if (value.value === this.selectedAnimation) {
            RendleyStore.setSubtitlesAnimation(null);
            subtitlesManager.setHighlightAnimation(HighlightAnimationEnum.NONE);
            return;
        }
        RendleyStore.setSubtitlesAnimation(value.value);
        subtitlesManager.setHighlightAnimation(value.value, 1);
    }
    render() {
        return (h("div", { key: '1e15c5c5412c21697b1005d9d84f1becdae0ed78' }, h("ve-panel-grid-list-section", { key: '1ea0c005dec7e0820fb14e5cc3450d25d48468be', title: t("sidebar.subtitlesTab.styles.mode", "Mode"), data: this.modes, columns: 1, renderCard: (mode) => (h("ve-effect-showcase-card", { isSelected: this.selectedMode === mode.value, tooltip: mode.name, imageUrl: mode.thumbnailUrl, onClick: () => this.handleSetMode(mode) })) }), h("div", { key: 'bfffc54854663a7e68999930f98cf871b3a3163f', class: "spacer-2" }), h("ve-panel-grid-list-section", { key: '0ffcb14c3c42aae3ea1e865bb1422bd68e01f4f1', title: t("sidebar.subtitlesTab.styles.animations", "Animations"), data: this.animations, columns: 1, renderCard: (animation) => (h("ve-effect-showcase-card", { isSelected: this.selectedAnimation === animation.value, tooltip: animation.name, imageUrl: animation.thumbnailUrl, videoUrl: animation.videoPreviewUrl, onClick: () => this.handleSetAnimation(animation) })) }), h("div", { key: '668df041391a190b166667ba05d1ed519a87cd8e', class: "spacer-2" }), h("ve-panel-grid-list-section", { key: 'c9cef63be8d80925a4d909bb98b11b91aecd8855', title: t("sidebar.subtitlesTab.styles.styles", "Styles"), data: this.styles, visibleItemsCount: this.styles.length, columns: 1, renderCard: (style) => (h("ve-effect-showcase-card", { isSelected: this.selectedStyle === style.value, tooltip: style.name, imageUrl: style.thumbnailUrl, videoUrl: style.videoPreviewUrl, onClick: () => this.handleSetStyle(style) })) })));
    }
    static get is() { return "ve-subtitles-styles-container"; }
    static get originalStyleUrls() {
        return {
            "$": ["./SubtitlesStylesContainer.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["SubtitlesStylesContainer.styles.css"]
        };
    }
    static get states() {
        return {
            "modes": {},
            "animations": {},
            "styles": {},
            "selectedStyle": {},
            "selectedAnimation": {},
            "selectedMode": {}
        };
    }
}
