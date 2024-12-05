import { h } from "@stencil/core";
import { IMAGES_PATH_CDN } from "../../../../config/config";
import { ApplicationStore } from "../../../../store/ApplicationStore";
import { RendleyService } from "../../../../services/RendleyService";
import { RendleyStore } from "../../../../store/RendleyStore";
import { t } from "../../../../utils/translation";
export class TextPanelContainer {
    constructor() {
        this.handleDragStart = (payload) => {
            ApplicationStore.setDraggingObject({
                type: "text-preset",
                payload,
            });
        };
        this.handleDragEnd = () => {
            ApplicationStore.setDraggingObject(null);
        };
        this.handleAddTitle = async (title) => {
            const clip = await RendleyService.createLottieClip({
                dataUrl: title.dataUrl,
                propertiesUrl: title.propertiesUrl,
                startTime: RendleyStore.currentTime,
            });
            if (clip == null) {
                return;
            }
            ApplicationStore.setSelectedClipId(clip.id);
        };
        this.handleAddPlainText = async () => {
            const clip = await RendleyService.createTextClip({ text: "Text", startTime: RendleyStore.currentTime });
            if (clip == null) {
                return;
            }
            ApplicationStore.setSelectedClipId(clip.id);
        };
        this.data = [];
    }
    componentWillLoad() {
        this.init();
    }
    init() {
        const titlesRoot = ApplicationStore.titlesPath;
        fetch(titlesRoot + "titles.json")
            .then((data) => data.json())
            .then((data) => {
            const titles = data.titles.map((title) => {
                return {
                    id: title.id,
                    name: title.name,
                    thumbnailUrl: titlesRoot + title.path + "thumbnail.webp",
                    videoPreviewUrl: titlesRoot + title.path + "preview.mp4",
                    propertiesUrl: titlesRoot + title.path + "properties.json",
                    duration: parseInt(title.duration),
                    dataUrl: titlesRoot + title.path + "data.json",
                };
            });
            this.data = titles;
        });
    }
    render() {
        return (h("div", { key: 'dcd19e69ec1b4209e1f042e2cdd1912532202782' }, h("ve-panel-grid-list-section", { key: '4cf9bd55ad2091b45fd443e1f2ac8eb166bbf35d', title: t("sidebar.textTab.title", "Title"), data: [{ name: "", thumbnailUrl: `${IMAGES_PATH_CDN}text.webp` }], visibleItemsCount: 1, renderCard: (item) => (h("ve-ve-draggable", { onDragStart: () => this.handleDragStart(item), onDragEnd: this.handleDragEnd }, h("ve-effect-showcase-card", { name: item.name, imageUrl: item.thumbnailUrl, onClick: () => this.handleAddPlainText() }))) })));
    }
    static get is() { return "ve-text-panel-container"; }
    static get originalStyleUrls() {
        return {
            "$": ["./TextPanelContainer.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["TextPanelContainer.styles.css"]
        };
    }
    static get states() {
        return {
            "data": {}
        };
    }
}
