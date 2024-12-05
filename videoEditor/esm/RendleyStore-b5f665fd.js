import { T as Tn, r as rr, M as Mi } from './ApplicationStore-824bdfff.js';


const COMPOSITION_CONTAINER_ID = "composition";
const CANVAS_ID = "rendley";
const TIMELINE_RULER_TICK_WIDTH_PX = 100;
const TIMELINE_MIN_DURATION = 30;
const ASSETS_PATH_CDN = "https://cdn.rendley.com/sdk/assets";
const FILTERS_PATH_CDN = `${ASSETS_PATH_CDN}/filters/`;
const EFFECTS_PATH_CDN = `${ASSETS_PATH_CDN}/effects/`;
const TRANSITIONS_PATH_CDN = `${ASSETS_PATH_CDN}/transitions/`;
const TITLES_PATH_CDN = `${ASSETS_PATH_CDN}/titles/`;
const IMAGES_PATH_CDN = `${ASSETS_PATH_CDN}/images/`;
const SUBTITLES_STYLES_PATH_CDN = `${ASSETS_PATH_CDN}/subtitles/`;

var MediaDataStatusEnum;
(function (MediaDataStatusEnum) {
    MediaDataStatusEnum["LOADING"] = "loading";
    MediaDataStatusEnum["READY"] = "ready";
})(MediaDataStatusEnum || (MediaDataStatusEnum = {}));
class RendleyStoreInstance {
    constructor() {
        this.isPlaying = false;
        this.currentTime = 0;
        this.duration = TIMELINE_MIN_DURATION;
        this.display = {
            width: 1920,
            height: 1080,
            backgroundColor: "#FFFFFF",
        };
        this.media = {};
        this.clips = {};
        this.layers = {};
        this.transitions = {};
        this.layersOrder = [];
        this.clipFilters = {};
        this.clipEffects = {};
        this.styles = {};
        this.updateTimestamp = 0;
        this.render = {
            blobUrl: undefined,
            error: undefined,
            extension: "mp4",
        };
        this.subtitlesStyles = {
            selectedMode: "full",
            selectedAnimation: null,
            selectedStyle: null,
        };
        Tn(this, {
            setDuration: rr,
            updateTimelineDuration: rr,
            resetRender: rr,
            updateRender: rr,
            setDisplayResolution: rr,
            setDisplayBackgroundColor: rr,
            setIsPlaying: rr,
            setCurrentTime: rr,
            addLayer: rr,
            deleteLayer: rr,
            setClip: rr,
            setClips: rr,
            addFilter: rr,
            addEffect: rr,
            deleteFilter: rr,
            deleteEffect: rr,
            updateClip: rr,
            updateLayer: rr,
            updateStyles: rr,
            setStyles: rr,
            addClip: rr,
            addMedia: rr,
            deleteMedia: rr,
            setLayersOrder: rr,
            addTransition: rr,
            setTransitions: rr,
            deleteTransition: rr,
            setUpdateTimestamp: rr,
            getLayerFromClipId: Mi,
            getLayerFromTransitionId: Mi,
            getFilenameByClipId: Mi,
            getTextByClipId: Mi,
            getThumbnailByClipId: Mi,
        });
    }
    getFilenameByClipId(clipId) {
        var _a, _b;
        const mediaDataId = (_a = RendleyStore.clips[clipId]) === null || _a === void 0 ? void 0 : _a.mediaDataId;
        if (mediaDataId == null) {
            return undefined;
        }
        return (_b = RendleyStore.media[mediaDataId]) === null || _b === void 0 ? void 0 : _b.filename;
    }
    getThumbnailByClipId(clipId) {
        var _a, _b;
        const mediaDataId = (_a = RendleyStore.clips[clipId]) === null || _a === void 0 ? void 0 : _a.mediaDataId;
        if (mediaDataId == null) {
            return undefined;
        }
        return (_b = RendleyStore.media[mediaDataId]) === null || _b === void 0 ? void 0 : _b.thumbnail;
    }
    getTextByClipId(clipId) {
        var _a;
        return (_a = RendleyStore.clips[clipId]) === null || _a === void 0 ? void 0 : _a.text;
    }
    setDuration(duration) {
        this.duration = duration;
    }
    updateTimelineDuration() {
        // 10 second offset
        const duration = Math.max(TIMELINE_MIN_DURATION, Engine.getInstance().getTimeline().getFitDuration() + 10);
        this.setDuration(duration);
    }
    resetRender() {
        this.render = {
            error: undefined,
            blobUrl: undefined,
        };
    }
    updateRender(payload) {
        this.render = Object.assign(Object.assign({}, this.render), payload);
    }
    getLayerFromClipId(clipId) {
        const layerId = this.layersOrder.find((layerId) => this.layers[layerId].clipsIds.includes(clipId));
        if (layerId == null) {
            return null;
        }
        return this.layers[layerId];
    }
    getLayerFromTransitionId(transitionId) {
        const layerId = this.layersOrder.find((layerId) => this.layers[layerId].transitionIds.includes(transitionId));
        if (layerId == null) {
            return null;
        }
        return this.layers[layerId];
    }
    setDisplayResolution(width, height) {
        this.display.width = width;
        this.display.height = height;
    }
    setDisplayBackgroundColor(backgroundColor) {
        this.display.backgroundColor = backgroundColor;
    }
    setIsPlaying(isPlaying) {
        this.isPlaying = isPlaying;
    }
    setCurrentTime(currentTime) {
        this.currentTime = currentTime;
    }
    addLayer(layer) {
        this.layers[layer.id] = layer;
    }
    deleteLayer(layerId) {
        const layer = this.layers[layerId];
        if (layer == null) {
            return;
        }
        this.layersOrder = this.layersOrder.filter((l) => l !== layerId);
        delete this.layers[layerId];
    }
    setClip(clip) {
        this.clips[clip.id] = clip;
    }
    setClips(payload) {
        this.clips = payload;
    }
    addFilter(clipId, filter) {
        var _a;
        this.clipFilters[clipId] = [...((_a = this.clipFilters[clipId]) !== null && _a !== void 0 ? _a : []), filter];
    }
    addEffect(clipId, effect) {
        var _a;
        this.clipEffects[clipId] = [...((_a = this.clipEffects[clipId]) !== null && _a !== void 0 ? _a : []), effect];
    }
    deleteFilter(clipId, filterId) {
        this.clipFilters[clipId] = this.clipFilters[clipId].filter((f) => f.id !== filterId);
    }
    deleteEffect(clipId, effectId) {
        this.clipEffects[clipId] = this.clipEffects[clipId].filter((e) => e.id !== effectId);
    }
    updateClip(clipId, payload) {
        this.clips[clipId] = Object.assign(Object.assign({}, this.clips[clipId]), payload);
    }
    updateLayer(layerId, payload) {
        this.layers[layerId] = Object.assign(Object.assign({}, this.layers[layerId]), payload);
    }
    updateStyles(clipId, styles) {
        var _a;
        this.styles[clipId] = Object.assign(Object.assign({}, ((_a = this.styles[clipId]) !== null && _a !== void 0 ? _a : {})), styles);
    }
    setStyles(styles) {
        this.styles = styles;
    }
    addClip(clip) {
        this.clips[clip.id] = clip;
    }
    deleteClip(clipId, layerId) {
        this.layers[layerId].clipsIds = this.layers[layerId].clipsIds.filter((id) => id !== clipId);
        delete this.clips[clipId];
    }
    setMedia(payload) {
        this.media = payload;
    }
    setLayers(payload) {
        this.layers = payload;
    }
    addMedia(mediaData) {
        this.media[mediaData.id] = mediaData;
    }
    deleteMedia(mediaId) {
        delete this.media[mediaId];
    }
    setLayersOrder(layersIds) {
        this.layersOrder = layersIds;
    }
    addTransition(transition) {
        this.transitions[transition.id] = transition;
    }
    setTransitions(payload) {
        this.transitions = payload;
    }
    deleteTransition(transitionId, layerId) {
        this.layers[layerId] = Object.assign(Object.assign({}, this.layers[layerId]), { transitionIds: this.layers[layerId].transitionIds.filter((t) => t !== transitionId) });
        delete this.transitions[transitionId];
    }
    setUpdateTimestamp(timestamp) {
        this.updateTimestamp = timestamp;
    }
    setSubtitlesMode(value) {
        this.subtitlesStyles.selectedMode = value;
    }
    setSubtitlesAnimation(value) {
        this.subtitlesStyles.selectedAnimation = value;
    }
    setSubtitlesStyle(value) {
        this.subtitlesStyles.selectedStyle = value;
    }
    reset() {
        this.isPlaying = false;
        this.currentTime = 0;
        this.duration = TIMELINE_MIN_DURATION;
        this.display = {
            width: 1920,
            height: 1080,
            backgroundColor: "#FFFFFF",
        };
        this.media = {};
        this.clips = {};
        this.layers = {};
        this.transitions = {};
        this.layersOrder = [];
        this.clipFilters = {};
        this.clipEffects = {};
        this.styles = {};
        this.updateTimestamp = 0;
        this.render = {
            blobUrl: undefined,
            error: undefined,
            extension: "mp4",
        };
        this.subtitlesStyles = {
            selectedMode: "full",
            selectedAnimation: null,
            selectedStyle: null,
        };
    }
}
const RendleyStore = new RendleyStoreInstance();

export { CANVAS_ID as C, Engine as E, FILTERS_PATH_CDN as F, HighlightAnimationEnum as H, IMAGES_PATH_CDN as I, LottieClip as L, MediaDataStatusEnum as M, RendleyStore as R, SUBTITLES_STYLES_PATH_CDN as S, TextClip as T, EventsEnum as a, EFFECTS_PATH_CDN as b, TRANSITIONS_PATH_CDN as c, TITLES_PATH_CDN as d, ClipTypeEnum as e, Subtitles as f, SubtitlesClip as g, TIMELINE_RULER_TICK_WIDTH_PX as h, COMPOSITION_CONTAINER_ID as i, Transition as j, Filter as k, Effect as l };