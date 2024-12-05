'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2d7e747d.js');
const RendleyStore = require('./RendleyStore-63f6242b.js');
const ApplicationStore = require('./ApplicationStore-a449587b.js');
const translation = require('./translation-a01c6ba3.js');

const filterPanelContainerStylesCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.flex{display:flex}.flex-col{flex-direction:column}.justify-center{justify-content:center}.items-center{align-items:center}.w-full{width:100%}.h-full{height:100%}.w-screen{width:100vw}.h-screen{height:100vh}.flex-grow{flex-grow:1}.absolute{position:absolute}.relative{position:relative}.text-elipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-center{text-align:center}.visibility-visible-important{visibility:visible !important}.visibility-hidden-important{visibility:hidden !important}.spacer-1{height:1rem;width:100%}.spacer-2{height:2rem;width:100%}.grid{display:grid;grid-template-columns:repeat(12, 1fr)}.grid.gap-1{grid-gap:5px}.grid.gap-2{grid-gap:10px}.grid.gap-3{grid-gap:15px}.grid.gap-4{grid-gap:20px}.grid.gap-5{grid-gap:25px}.col-span-1{grid-column:span 1}.col-span-2{grid-column:span 2}.col-span-3{grid-column:span 3}.col-span-4{grid-column:span 4}.col-span-5{grid-column:span 5}.col-span-6{grid-column:span 6}.col-span-7{grid-column:span 7}.col-span-8{grid-column:span 8}.col-span-9{grid-column:span 9}.col-span-10{grid-column:span 10}.col-span-11{grid-column:span 11}.col-span-12{grid-column:span 12}@media (min-width: 576px){.col-sm-span-1{grid-column:span 1}.col-sm-span-2{grid-column:span 2}.col-sm-span-3{grid-column:span 3}.col-sm-span-4{grid-column:span 4}.col-sm-span-5{grid-column:span 5}.col-sm-span-6{grid-column:span 6}.col-sm-span-7{grid-column:span 7}.col-sm-span-8{grid-column:span 8}.col-sm-span-9{grid-column:span 9}.col-sm-span-10{grid-column:span 10}.col-sm-span-11{grid-column:span 11}.col-sm-span-12{grid-column:span 12}}@media (min-width: 768px){.col-md-span-1{grid-column:span 1}.col-md-span-2{grid-column:span 2}.col-md-span-3{grid-column:span 3}.col-md-span-4{grid-column:span 4}.col-md-span-5{grid-column:span 5}.col-md-span-6{grid-column:span 6}.col-md-span-7{grid-column:span 7}.col-md-span-8{grid-column:span 8}.col-md-span-9{grid-column:span 9}.col-md-span-10{grid-column:span 10}.col-md-span-11{grid-column:span 11}.col-md-span-12{grid-column:span 12}}@media (min-width: 992px){.col-lg-span-1{grid-column:span 1}.col-lg-span-2{grid-column:span 2}.col-lg-span-3{grid-column:span 3}.col-lg-span-4{grid-column:span 4}.col-lg-span-5{grid-column:span 5}.col-lg-span-6{grid-column:span 6}.col-lg-span-7{grid-column:span 7}.col-lg-span-8{grid-column:span 8}.col-lg-span-9{grid-column:span 9}.col-lg-span-10{grid-column:span 10}.col-lg-span-11{grid-column:span 11}.col-lg-span-12{grid-column:span 12}}@media (min-width: 1200px){.col-xl-span-1{grid-column:span 1}.col-xl-span-2{grid-column:span 2}.col-xl-span-3{grid-column:span 3}.col-xl-span-4{grid-column:span 4}.col-xl-span-5{grid-column:span 5}.col-xl-span-6{grid-column:span 6}.col-xl-span-7{grid-column:span 7}.col-xl-span-8{grid-column:span 8}.col-xl-span-9{grid-column:span 9}.col-xl-span-10{grid-column:span 10}.col-xl-span-11{grid-column:span 11}.col-xl-span-12{grid-column:span 12}}:host{--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}:host([theme=dark]){--primary:#008eff;--background:#1d1d27;--surface:#282937;--surface-light:#3c3c50;--surface-dark:#3a3a4e;--accent:#acacc1;--text:#fefefe;--subtle:#d6d6e2;--hint:#5b5b72;--secondary-dark:#18181f;--secondary-medium:#2d2e3d;--secondary-light:#1f1f2a;--playhead:#ffffff;--error:#ff0000}:host([theme=light]){--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}@media (prefers-color-scheme: light){:host([theme=system]){--primary:#008eff;--background:#fafafa;--surface:#ffffff;--surface-light:#bfbfbf;--surface-dark:#ebebeb;--accent:#666666;--text:#000000;--subtle:#999999;--hint:#707070;--secondary-dark:#ffffff;--secondary-medium:#eeeeee;--secondary-light:#ffffff;--playhead:#757575;--error:#ff0000}}@media (prefers-color-scheme: dark){:host([theme=system]){--primary:#008eff;--background:#1d1d27;--surface:#282937;--surface-light:#3c3c50;--surface-dark:#3a3a4e;--accent:#acacc1;--text:#fefefe;--subtle:#d6d6e2;--hint:#5b5b72;--secondary-dark:#18181f;--secondary-medium:#2d2e3d;--secondary-light:#1f1f2a;--playhead:#ffffff;--error:#ff0000}}:host{margin:0px;padding:0px;box-sizing:border-box;font-family:\"Inter\", sans-serif;background-color:var(--background);user-select:none}img{vertical-align:middle}a{color:unset;text-decoration:none}ul{list-style-type:none}::-webkit-scrollbar-corner{background:transparent}.split{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.gutter{background:none;box-shadow:none;height:0.2rem;border-radius:0.5rem;background-repeat:no-repeat;background-position:50%;position:relative;z-index:1000;transition:background, box-shadow 0.2s ease-in}.gutter:hover{background:rgba(var(--primary), 0.5);box-shadow:0px 4px 8px 0px rgba(var(--primary), 0.1);transition:background, box-shadow 0.2s ease-out}.gutter__active{background:rgba(var(--primary), 1) !important;box-shadow:0px 4px 8px 0px rgba(var(--primary), 0.3) !important;transition:background, box-shadow 0.2s ease-out}.gutter.gutter-vertical:hover{cursor:row-resize}.playhead__moveable{overflow:hidden}::-webkit-scrollbar{width:7px;height:7px}::-webkit-scrollbar-track{background:var(--surface)}::-webkit-scrollbar-thumb{background:rgba(var(--hint), 0.8);border-radius:5px}::-webkit-scrollbar-thumb:hover{background:var(--hint)}ve-filters-panel-container{width:100%}";
const VeFiltersPanelContainerStyle0 = filterPanelContainerStylesCss;

const FiltersPanelContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filters = [];
        this.effects = [];
        this.onClose = undefined;
        this.selectedFiltersEffects = {};
    }
    componentWillLoad() {
        this.filters = Object.values(ApplicationStore.ApplicationStore.filters);
        this.effects = Object.values(ApplicationStore.ApplicationStore.effects);
        this.disposeAutorun = ApplicationStore.It(() => {
            var _a, _b;
            const selectedClipId = ApplicationStore.ApplicationStore.selectedClipId;
            if (selectedClipId == null) {
                this.selectedFiltersEffects = {};
                return;
            }
            const clipFilters = (_a = RendleyStore.RendleyStore.clipFilters[selectedClipId]) !== null && _a !== void 0 ? _a : [];
            const clipEffects = (_b = RendleyStore.RendleyStore.clipEffects[selectedClipId]) !== null && _b !== void 0 ? _b : [];
            const selectedFiltersEffects = {};
            [clipFilters, clipEffects].forEach((data) => {
                Object.entries(data).forEach(([key, value]) => {
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
        const selectedClipId = ApplicationStore.ApplicationStore.selectedClipId;
        if (selectedClipId == null) {
            return;
        }
        const clip = RendleyStore.Engine.getInstance().getClipById(selectedClipId);
        if (clip == null) {
            return;
        }
        const filter = ApplicationStore.ApplicationStore.filters[id];
        const selectedFilter = this.selectedFiltersEffects[filter.id];
        if (selectedFilter != null) {
            clip.removeFilter(selectedFilter);
        }
        else {
            clip.addFilter(new RendleyStore.Filter({
                sourceId: filter.id,
                lutUrl: filter.lutUrl,
            }));
        }
    }
    async handleSelectEffect(id) {
        const selectedClipId = ApplicationStore.ApplicationStore.selectedClipId;
        if (selectedClipId == null) {
            return;
        }
        const clip = RendleyStore.Engine.getInstance().getClipById(selectedClipId);
        if (clip == null) {
            return;
        }
        const effect = ApplicationStore.ApplicationStore.effects[id];
        const selectedEffect = this.selectedFiltersEffects[effect.id];
        // TODO: Cache this
        const fragmentSrc = await fetch(effect.shaderUrl).then((data) => data.text());
        if (selectedEffect != null) {
            clip.removeEffect(selectedEffect);
        }
        else {
            clip.addEffect(new RendleyStore.Effect({
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
        return (index.h("div", { key: 'cf5df912876e24b29807ae4c4aba737a3aa961fb' }, index.h("ve-panel-grid-list-section", { key: '81fbc6d0ba61bad3181f6517bc819065bba838d8', title: translation.t("sidebar.tabs.filters", "Filters"), data: this.filters, visibleItemsCount: this.filters.length, renderCard: (filter) => (index.h("ve-effect-showcase-card", { isSelected: this.selectedFiltersEffects[filter.id] != null, name: filter.label, imageUrl: filter.thumbnailUrl, onClick: () => this.handleSelectFilter(filter.id) })) }), index.h("div", { key: '0691fdb6d199c04fe3fc551ec283e0633721406f', class: "spacer-2" }), index.h("ve-panel-grid-list-section", { key: '534238b5f9f696d9f03ed26e5df4b5d72c6a80b8', title: translation.t("sidebar.filtersTab.effects", "Effects"), data: this.effects, visibleItemsCount: this.effects.length, renderCard: (effect) => (index.h("ve-effect-showcase-card", { isSelected: this.selectedFiltersEffects[effect.id] != null, name: effect.label, imageUrl: effect.thumbnailUrl, videoUrl: effect.videoPreviewUrl, onClick: () => this.handleSelectEffect(effect.id) })) })));
    }
};
FiltersPanelContainer.style = VeFiltersPanelContainerStyle0;

exports.ve_filters_panel_container = FiltersPanelContainer;
