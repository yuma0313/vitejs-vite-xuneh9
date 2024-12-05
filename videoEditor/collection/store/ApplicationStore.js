import { action, makeAutoObservable } from "mobx";
class ApplicationStoreInstance {
    constructor() {
        this.isLoading = true;
        this.isRendering = false;
        this.selectedClipId = null;
        this.selectedTransitionId = null;
        this.transitions = {};
        this.filters = {};
        this.effects = {};
        this.draggingObject = null;
        this.theme = "system";
        this.filtersPath = null;
        this.effectsPath = null;
        this.transitionsPath = null;
        this.titlesPath = null;
        this.subtitleStylesPath = null;
        makeAutoObservable(this, {
            setIsLoading: action,
            setIsRendering: action,
            setSelectedClipId: action,
            setSelectedTransitionId: action,
            setDraggingObject: action,
            setTheme: action,
            setFiltersPath: action,
            setEffectsPath: action,
            setTitlesPath: action,
            setTransitionsPath: action,
            setTransitions: action,
            setFilters: action,
            setEffects: action,
        });
    }
    setIsLoading(value) {
        this.isLoading = value;
    }
    setIsRendering(value) {
        this.isRendering = value;
    }
    setSelectedClipId(id) {
        this.selectedClipId = id;
        this.setSelectedTransitionId(null);
    }
    setSelectedTransitionId(id) {
        this.selectedTransitionId = id;
    }
    setDraggingObject(draggingObject) {
        this.draggingObject = draggingObject;
    }
    setTheme(value = "dark") {
        if (value === "system") {
            const isDarkTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            ApplicationStore.theme = isDarkTheme ? "dark" : "light";
        }
        else {
            ApplicationStore.theme = value;
        }
    }
    setFiltersPath(path) {
        this.filtersPath = path;
    }
    setEffectsPath(path) {
        this.effectsPath = path;
    }
    setTransitionsPath(path) {
        this.transitionsPath = path;
    }
    setSubtitleStylesPath(path) {
        this.subtitleStylesPath = path;
    }
    setTitlesPath(path) {
        this.titlesPath = path;
    }
    setTransitions(transitions) {
        this.transitions = transitions;
    }
    setFilters(filters) {
        this.filters = filters;
    }
    setEffects(effects) {
        this.effects = effects;
    }
    reset() {
        this.isLoading = true;
        this.isRendering = false;
        this.selectedClipId = null;
        this.selectedTransitionId = null;
        this.transitions = {};
        this.filters = {};
        this.effects = {};
        this.draggingObject = null;
        this.theme = "system";
        this.filtersPath = null;
        this.effectsPath = null;
        this.transitionsPath = null;
        this.titlesPath = null;
        this.subtitleStylesPath = null;
    }
}
const ApplicationStore = new ApplicationStoreInstance();
export { ApplicationStore };
