import { Engine, EventsEnum, TextClip } from "@rendley/sdk";
import { MediaDataStatusEnum, RendleyStore } from "./store/RendleyStore";
import { ApplicationStore } from "./store/ApplicationStore";
import { arrayToMap } from "./modules/timeline/utils/convertArrayToMap";
import { updateAdjacency } from "./modules/timeline/utils/updateLayerClipsAdjacency";
import { RendleyService } from "./services/RendleyService";
import { fontSources } from "./config/fonts.config";
class RendleyBridge {
    constructor() {
        this.handleReady = () => {
            const timeline = Engine.getInstance().getTimeline();
            const display = Engine.getInstance().getDisplay();
            const resolution = display.getResolution();
            const media = Object.values(Engine.getInstance().getLibrary().media).reduce((acc, cv) => {
                const data = {
                    id: cv.getId(),
                    thumbnail: cv.thumbnail,
                    type: cv.type,
                    filename: cv.filename,
                    duration: cv.duration,
                    status: MediaDataStatusEnum.READY,
                };
                acc[data.id] = data;
                return acc;
            }, {});
            const clips = timeline.getClips().reduce((acc, cv) => {
                const data = {
                    id: cv.id,
                    type: cv.getType(),
                    startTime: cv.getStartTime(),
                    leftTrim: cv.getLeftTrim(),
                    rightTrim: cv.getRightTrim(),
                    duration: cv.getDuration(),
                    trimmedDuration: cv.getTrimmedDuration(),
                    mediaDataId: cv.getMediaId(),
                    text: cv instanceof TextClip ? cv.text : "",
                };
                acc[data.id] = data;
                return acc;
            }, {});
            const layers = Object.values(timeline.layers).reduce((acc, cv) => {
                const data = {
                    id: cv.id,
                    clipsIds: cv.clipsIds,
                    transitionIds: cv.transitions.map((t) => t.id),
                };
                acc[data.id] = data;
                return acc;
            }, {});
            const transitions = Object.values(timeline.layers)
                .map((layer) => Object.values(layer.transitions))
                .flat()
                .reduce((acc, cv) => {
                const data = {
                    id: cv.id,
                    startClipId: cv.startClip.id,
                    endClipId: cv.endClip.id,
                    inDuration: cv.inDuration,
                    outDuration: cv.outDuration,
                };
                acc[data.id] = data;
                return acc;
            }, {});
            const styles = timeline.getClips().reduce((acc, cv) => {
                const data = cv.style && Object.keys(cv.style).length > 0 ? cv.style.serialize() : undefined;
                acc[cv.id] = data;
                return acc;
            }, {});
            ApplicationStore.setSelectedTransitionId(null);
            RendleyStore.setIsPlaying(false);
            RendleyStore.setCurrentTime(timeline.currentTime);
            RendleyStore.setDisplayResolution(resolution[0], resolution[1]);
            RendleyStore.setDisplayBackgroundColor(display.getBackgroundColor());
            RendleyStore.setMedia(media);
            RendleyStore.setClips(clips);
            RendleyStore.setLayers(layers);
            RendleyStore.setLayersOrder(timeline.layersOrder);
            RendleyStore.setTransitions(transitions);
            RendleyStore.setStyles(styles);
            RendleyStore.setUpdateTimestamp(Date.now());
            RendleyStore.updateTimelineDuration();
            RendleyStore.layersOrder.forEach((layerId) => {
                updateAdjacency(layerId);
            });
        };
        this.handlePlaying = (payload) => {
            RendleyStore.setIsPlaying(payload.isPlaying);
        };
        this.handleTime = (currentTime) => {
            const fitDuration = RendleyService.getEngine().getTimeline().getFitDuration();
            if (currentTime >= fitDuration && RendleyStore.isPlaying) {
                RendleyService.pause();
                RendleyService.seek(fitDuration);
                return;
            }
            RendleyStore.setCurrentTime(currentTime);
        };
        this.handleBackgroundUpdated = (payload) => {
            RendleyStore.setDisplayBackgroundColor(payload.backgroundColor);
        };
        this.handleResolutionUpdated = (payload) => {
            RendleyStore.setDisplayResolution(payload.width, payload.height);
        };
        this.handleAddTransition = (payload) => {
            const layer = Engine.getInstance().getTimeline().getLayerById(payload.layerId);
            if (!layer)
                return;
            const transition = layer.transitions.find((tx) => tx.id === payload.transitionId);
            if (!transition)
                return;
            RendleyStore.addTransition(transition.serialize());
            RendleyStore.updateLayer(layer.id, {
                transitionIds: [...RendleyStore.layers[layer.id].transitionIds, transition.id],
            });
        };
        this.handleRemoveTransition = (payload) => {
            ApplicationStore.setSelectedTransitionId(null);
            RendleyStore.deleteTransition(payload.transitionId, payload.layerId);
        };
        this.handleLayerUpdated = (payload) => {
            var _a;
            const layer = RendleyService.getLayerById(payload.layerId);
            if (!layer)
                return;
            RendleyStore.updateLayer(layer.id, {
                clipsIds: layer.clipsIds,
                transitionIds: layer.transitions.map((tx) => tx.id),
            });
            if (((_a = layer === null || layer === void 0 ? void 0 : layer.clipsIds) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                RendleyService.deleteLayer(payload.layerId);
            }
        };
        this.handleLayerAdded = (payload) => {
            const timeline = Engine.getInstance().getTimeline();
            const layer = timeline.layers[payload.layerId];
            if (!layer)
                return;
            RendleyStore.addLayer({
                id: layer.id,
                clipsIds: layer.clipsIds,
                transitionIds: layer.transitions.map((tx) => tx.id),
            });
            RendleyStore.setLayersOrder(timeline.layersOrder);
        };
        this.handleLayerRemoved = (payload) => {
            RendleyStore.deleteLayer(payload.layerId);
        };
        this.handleLayersOrderUpdated = (payload) => {
            payload;
            RendleyStore.setLayersOrder(Engine.getInstance().getTimeline().layersOrder);
        };
        this.handleClipUpdated = (payload) => {
            const clip = Engine.getInstance().getClipById(payload.clipId);
            if (!clip)
                return;
            RendleyStore.updateClip(payload.clipId, {
                startTime: clip.getStartTime(),
                duration: clip.getDuration(),
                leftTrim: clip.getLeftTrim(),
                rightTrim: clip.getRightTrim(),
                trimmedDuration: clip.getTrimmedDuration(),
            });
        };
        this.handleClipStyleUpdated = (payload) => {
            RendleyStore.updateStyles(payload.clipId, {
                [payload.property]: payload.value,
            });
        };
        this.handleClipFilterAdded = (payload) => {
            RendleyStore.addFilter(payload.clipId, {
                id: payload.filterId,
                sourceId: payload.sourceId,
            });
        };
        this.handleClipFilterRemoved = (payload) => {
            RendleyStore.deleteFilter(payload.clipId, payload.filterId);
        };
        this.handleClipEffectAdded = (payload) => {
            RendleyStore.addEffect(payload.clipId, {
                id: payload.effectId,
                sourceId: payload.sourceId,
            });
        };
        this.handleClipEffectRemoved = (payload) => {
            RendleyStore.deleteEffect(payload.clipId, payload.effectId);
        };
        this.handleClipUpdatedText = (payload) => {
            RendleyStore.updateClip(payload.clipId, {
                text: payload.text,
            });
        };
        this.handleClipAdded = (payload) => {
            var _a, _b;
            const clip = Engine.getInstance().getTimeline().getClipById(payload.clipId);
            if (!clip)
                return;
            if (clip instanceof TextClip) {
                clip.style.setBackgroundColor("#0B2A43");
            }
            const clipInstance = Engine.getInstance().getClipById(payload.clipId);
            RendleyStore.setClip({
                id: clip.id,
                type: clip.type,
                text: clip instanceof TextClip ? clip.text : "",
                startTime: clip.getStartTime(),
                leftTrim: clip.getLeftTrim(),
                rightTrim: clip.getRightTrim(),
                duration: clip.getDuration(),
                trimmedDuration: clip.getTrimmedDuration(),
                mediaDataId: clip.getMediaId(),
            });
            const styles = (_b = (_a = clipInstance === null || clipInstance === void 0 ? void 0 : clipInstance.style) === null || _a === void 0 ? void 0 : _a.serialize) === null || _b === void 0 ? void 0 : _b.call(_a);
            if (styles) {
                RendleyStore.updateStyles(clip.id, styles);
            }
            RendleyStore.updateTimelineDuration();
        };
        this.handleClipRemoved = (payload) => {
            var _a;
            const selectedClipId = ApplicationStore.selectedClipId;
            if (payload.clipId === selectedClipId) {
                ApplicationStore.setSelectedClipId(null);
            }
            RendleyStore.deleteClip(payload.clipId, payload.layerId);
            const layer = RendleyStore.layers[payload.layerId];
            if (((_a = layer === null || layer === void 0 ? void 0 : layer.clipsIds) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                RendleyService.deleteLayer(payload.layerId);
            }
            else {
                updateAdjacency(payload.layerId);
            }
        };
        this.handleLibraryAdded = (payload) => {
            const mediaData = Engine.getInstance().getLibrary().getMediaById(payload.mediaDataId);
            if (mediaData == null) {
                return;
            }
            RendleyStore.addMedia({
                id: mediaData.getId(),
                thumbnail: mediaData.thumbnail,
                type: mediaData.type,
                filename: mediaData.filename,
                duration: mediaData.duration,
                status: MediaDataStatusEnum.LOADING,
            });
        };
        this.handleLibraryRemoved = (payload) => {
            RendleyStore.deleteMedia(payload.mediaDataId);
        };
        this.handleLibraryMediaUpdated = (payload) => {
            if (payload.status === "ready") {
                this.handleLibraryMediaReplaced(payload);
            }
        };
        this.handleLibraryMediaReplaced = (payload) => {
            const mediaData = RendleyService.getMediaById(payload.mediaDataId);
            if (mediaData == null) {
                return;
            }
            RendleyStore.addMedia({
                id: mediaData.getId(),
                thumbnail: mediaData.thumbnail,
                type: mediaData.type,
                filename: mediaData.filename,
                duration: mediaData.duration,
                status: MediaDataStatusEnum.READY,
            });
        };
        this.handleLibraryError = (payload) => {
            console.error("Library Error:", payload);
        };
        this.handleClipError = (payload) => {
            console.error("Clip Error:", payload);
        };
    }
    async init(options) {
        try {
            this.setupEventListeners();
            ApplicationStore.setTitlesPath(options.titlesPath);
            ApplicationStore.setSubtitleStylesPath(options.subtitlesStylesPath);
            // Load fonts in the background
            await Promise.all(fontSources.map(async ({ family, cssUrl }) => {
                return Engine.getInstance().getFontRegistry().loadFromCssUrl(family, cssUrl);
            }));
            const transitionsRoot = options.transitionsPath;
            const filtersRoot = options.filtersPath;
            const effectsRoot = options.effectsPath;
            // Get transition descriptions
            fetch(transitionsRoot + "transitions.json")
                .then((data) => data.json())
                .then((data) => {
                const transitions = data.transitions.map((transition) => {
                    return {
                        id: transition.id,
                        label: transition.name,
                        thumbnailUrl: transitionsRoot + transition.path + "thumbnail.webp",
                        videoPreviewUrl: transitionsRoot + transition.path + "preview.mp4",
                        shaderUrl: transitionsRoot + transition.path + "shader.glsl",
                    };
                });
                ApplicationStore.setTransitions(arrayToMap(transitions, "id"));
            });
            // Get filter list
            fetch(filtersRoot + "filters.json")
                .then((data) => data.json())
                .then((data) => {
                const filters = data.filters.map((filter) => {
                    return {
                        id: filter.id,
                        label: filter.name,
                        thumbnailUrl: filtersRoot + filter.path + "thumbnail.webp",
                        lutUrl: filtersRoot + filter.path + "lut.png",
                    };
                });
                ApplicationStore.setFilters(arrayToMap(filters, "id"));
            });
            // Get Effect list
            fetch(effectsRoot + "effects.json")
                .then((data) => data.json())
                .then((data) => {
                const effects = data.effects.map((effect) => {
                    return {
                        id: effect.id,
                        label: effect.name,
                        thumbnailUrl: effectsRoot + effect.path + "thumbnail.webp",
                        videoPreviewUrl: effectsRoot + effect.path + "preview.mp4",
                        shaderUrl: effectsRoot + effect.path + "shader.glsl",
                    };
                });
                ApplicationStore.setEffects(arrayToMap(effects, "id"));
            });
        }
        finally {
            ApplicationStore.setIsLoading(false);
        }
        // TODO: Remove on production!
        window.engine = Engine.getInstance();
    }
    setupEventListeners() {
        const events = Engine.getInstance().events;
        events.on(EventsEnum.PLAYING, this.handlePlaying);
        events.on(EventsEnum.TIME, this.handleTime);
        events.on(EventsEnum.READY, this.handleReady);
        events.on(EventsEnum.DISPLAY_BACKGROUND_UPDATED, this.handleBackgroundUpdated);
        events.on(EventsEnum.DISPLAY_RESOLUTION_UPDATED, this.handleResolutionUpdated);
        events.on(EventsEnum.LAYER_ADDED, this.handleLayerAdded);
        events.on(EventsEnum.LAYER_REMOVED, this.handleLayerRemoved);
        events.on(EventsEnum.LAYER_UPDATED, this.handleLayerUpdated);
        events.on(EventsEnum.LAYERS_ORDER_UPDATED, this.handleLayersOrderUpdated);
        events.on(EventsEnum.TRANSITION_ADDED, this.handleAddTransition);
        events.on(EventsEnum.TRANSITION_REMOVED, this.handleRemoveTransition);
        events.on(EventsEnum.CLIP_ADDED, this.handleClipAdded);
        events.on(EventsEnum.CLIP_REMOVED, this.handleClipRemoved);
        events.on(EventsEnum.CLIP_UPDATED, this.handleClipUpdated);
        events.on(EventsEnum.CLIP_UPDATED_TEXT, this.handleClipUpdatedText);
        events.on(EventsEnum.CLIP_STYLE_UPDATED, this.handleClipStyleUpdated);
        events.on(EventsEnum.CLIP_EFFECT_ADDED, this.handleClipEffectAdded);
        events.on(EventsEnum.CLIP_EFFECT_REMOVED, this.handleClipEffectRemoved);
        events.on(EventsEnum.CLIP_FILTER_ADDED, this.handleClipFilterAdded);
        events.on(EventsEnum.CLIP_FILTER_REMOVED, this.handleClipFilterRemoved);
        events.on(EventsEnum.CLIP_ERROR, this.handleClipError);
        events.on(EventsEnum.LIBRARY_ADDED, this.handleLibraryAdded);
        events.on(EventsEnum.LIBRARY_REMOVED, this.handleLibraryRemoved);
        events.on(EventsEnum.LIBRARY_ERROR, this.handleLibraryError);
        events.on(EventsEnum.LIBRARY_MEDIA_UPDATED, this.handleLibraryMediaUpdated);
        events.on(EventsEnum.LIBRARY_REPLACED, this.handleLibraryMediaReplaced);
    }
    destroy() {
        Engine.getInstance().events.removeAllListeners();
    }
}
export default new RendleyBridge();
