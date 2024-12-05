import { Effect, Engine, Filter } from "@rendley/sdk";
import { h } from "@stencil/core";
import { ApplicationStore } from "../../../../store/ApplicationStore";
import { autorun } from "mobx";
import { RendleyStore } from "../../../../store/RendleyStore";
import { t } from "../../../../utils/translation";
export class FiltersPanelContainer {
    constructor() {
        this.filters = [];
        this.effects = [];
        this.onClose = undefined;
        this.selectedFiltersEffects = {};
    }
    componentWillLoad() {
        this.filters = Object.values(ApplicationStore.filters);
        this.effects = Object.values(ApplicationStore.effects);
        this.disposeAutorun = autorun(() => {
            var _a, _b;
            const selectedClipId = ApplicationStore.selectedClipId;
            if (selectedClipId == null) {
                this.selectedFiltersEffects = {};
                return;
            }
            const clipFilters = (_a = RendleyStore.clipFilters[selectedClipId]) !== null && _a !== void 0 ? _a : [];
            const clipEffects = (_b = RendleyStore.clipEffects[selectedClipId]) !== null && _b !== void 0 ? _b : [];
            const selectedFiltersEffects = {};
            [clipFilters, clipEffects].forEach((data) => {
                Object.entries(data).forEach(([key, value]) => {
                    key;
                    selectedFiltersEffects[value.sourceId] = value.id;
                });
            });
            this.selectedFiltersEffects = selectedFiltersEffects;
        });
    }
    componentWillUnmount() {
        var _a;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    handleSelectFilter(id) {
        const selectedClipId = ApplicationStore.selectedClipId;
        if (selectedClipId == null) {
            return;
        }
        const clip = Engine.getInstance().getClipById(selectedClipId);
        if (clip == null) {
            return;
        }
        const filter = ApplicationStore.filters[id];
        const selectedFilter = this.selectedFiltersEffects[filter.id];
        if (selectedFilter != null) {
            clip.removeFilter(selectedFilter);
        }
        else {
            clip.addFilter(new Filter({
                sourceId: filter.id,
                lutUrl: filter.lutUrl,
            }));
        }
    }
    async handleSelectEffect(id) {
        const selectedClipId = ApplicationStore.selectedClipId;
        if (selectedClipId == null) {
            return;
        }
        const clip = Engine.getInstance().getClipById(selectedClipId);
        if (clip == null) {
            return;
        }
        const effect = ApplicationStore.effects[id];
        const selectedEffect = this.selectedFiltersEffects[effect.id];
        // TODO: Cache this
        const fragmentSrc = await fetch(effect.shaderUrl).then((data) => data.text());
        if (selectedEffect != null) {
            clip.removeEffect(selectedEffect);
        }
        else {
            clip.addEffect(new Effect({
                sourceId: effect.id,
                fragmentSrc: fragmentSrc,
                textureWidth: clip.sprite.texture.width,
                textureHeight: clip.sprite.texture.height,
                frameWidth: clip.sprite.width / clip.sprite.scale.x,
                frameHeight: clip.sprite.height / clip.sprite.scale.y,
            }));
        }
    }
    render() {
        return (h("div", { key: 'cf5df912876e24b29807ae4c4aba737a3aa961fb' }, h("ve-panel-grid-list-section", { key: '81fbc6d0ba61bad3181f6517bc819065bba838d8', title: t("sidebar.tabs.filters", "Filters"), data: this.filters, visibleItemsCount: this.filters.length, renderCard: (filter) => (h("ve-effect-showcase-card", { isSelected: this.selectedFiltersEffects[filter.id] != null, name: filter.label, imageUrl: filter.thumbnailUrl, onClick: () => this.handleSelectFilter(filter.id) })) }), h("div", { key: '0691fdb6d199c04fe3fc551ec283e0633721406f', class: "spacer-2" }), h("ve-panel-grid-list-section", { key: '534238b5f9f696d9f03ed26e5df4b5d72c6a80b8', title: t("sidebar.filtersTab.effects", "Effects"), data: this.effects, visibleItemsCount: this.effects.length, renderCard: (effect) => (h("ve-effect-showcase-card", { isSelected: this.selectedFiltersEffects[effect.id] != null, name: effect.label, imageUrl: effect.thumbnailUrl, videoUrl: effect.videoPreviewUrl, onClick: () => this.handleSelectEffect(effect.id) })) })));
    }
    static get is() { return "ve-filters-panel-container"; }
    static get originalStyleUrls() {
        return {
            "$": ["./FilterPanelContainer.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["FilterPanelContainer.styles.css"]
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
            }
        };
    }
    static get states() {
        return {
            "selectedFiltersEffects": {}
        };
    }
}
