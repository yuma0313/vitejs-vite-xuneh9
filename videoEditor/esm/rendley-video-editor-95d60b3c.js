import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-f9f850bb.js';
import { R as RendleyStore, E as Engine, M as MediaDataStatusEnum, T as TextClip, a as EventsEnum, C as CANVAS_ID, F as FILTERS_PATH_CDN, b as EFFECTS_PATH_CDN, c as TRANSITIONS_PATH_CDN, d as TITLES_PATH_CDN, S as SUBTITLES_STYLES_PATH_CDN } from './RendleyStore-b5f665fd.js';
import { T as Tn, A as ApplicationStore, I as It } from './ApplicationStore-824bdfff.js';
import { c as clsx } from './clsx-1afe6a70.js';
import { R as RendleyService } from './RendleyService-23f7521e.js';
import { T as TimelineStore } from './TimelineStore-83e3c098.js';

class ContextMenuStoreInstance {
    constructor() {
        this.position = null;
        this.options = [];
        Tn(this);
    }
    show(x, y, options) {
        this.position = { x, y };
        this.options = options;
    }
    hide() {
        this.position = null;
    }
    reset() {
        this.position = null;
        this.options = [];
    }
}
const ContextMenuStore = new ContextMenuStoreInstance();

class ShortcutService {
    constructor() {
        this.shortcuts = new Map();
    }
    static getInstance() {
        if (!ShortcutService.instance) {
            ShortcutService.instance = new ShortcutService();
        }
        return ShortcutService.instance;
    }
    init() {
        this.initializeShortcuts();
        document.addEventListener("keydown", this.handleKeyDown.bind(this));
    }
    initializeShortcuts() {
        this.registerShortcut(["KeyS"], this.handleSplit);
        this.registerShortcut(["Delete"], this.handleDelete);
        this.registerShortcut(["Backspace"], this.handleDelete);
        this.registerShortcut(["ctrl", "Home"], this.moveClipLeft);
        this.registerShortcut(["Escape"], this.handleUnfocusAction);
    }
    handleKeyDown(event) {
        const actualTarget = event.composedPath()[0];
        if (actualTarget instanceof HTMLInputElement || actualTarget instanceof HTMLTextAreaElement) {
            return;
        }
        const combination = [
            event.ctrlKey ? "ctrl" : "",
            event.altKey ? "alt" : "",
            event.shiftKey ? "shift" : "",
            event.code,
        ]
            .filter(Boolean)
            .sort()
            .join("+");
        //console.log(combination);
        const action = this.shortcuts.get(combination);
        if (action) {
            action(event);
            event.preventDefault();
        }
    }
    registerShortcut(keys, action) {
        const keyCombination = keys.sort().join("+");
        this.shortcuts.set(keyCombination, action);
    }
    handleUnfocusAction() {
        ContextMenuStore.hide();
    }
    handleSplit() {
        return RendleyService.splitAtCurrentTime();
    }
    handleDelete() {
        return RendleyService.deleteAtCurrentTime();
    }
    moveClipLeft() {
        return RendleyService.moveClipLeft();
    }
    destroy() {
        document.removeEventListener("keydown", this.handleKeyDown.bind(this));
        this.shortcuts.clear();
        ShortcutService.instance = null;
    }
}
ShortcutService.instance = null;

const PEXELS_BASE_URL = "https://api.pexels.com/v1";
const GIPHY_BASE_URL = "https://api.giphy.com/v1";
const PER_PAGE_LIMIT = 14;
class StockMediaService {
    constructor() {
        // 新しいGCS関連の設定を追加
        this.gcsBaseUrl = "https://storage.googleapis.com/revot-public-object/rendly-default-files";
    }
    static getInstance() {
        if (!StockMediaService.instance) {
            StockMediaService.instance = new StockMediaService();
        }
        return StockMediaService.instance;
    }
    init(options) {
        this.pexelsApiKey = options.pexelsApiKey;
        this.giphyApiKey = options.giphyApiKey;
        if (options.gcsBaseUrl) {
            this.gcsBaseUrl = options.gcsBaseUrl;
        }
    }
    async getGCSImages() {
        try {
            // 矢印の色と対応する画像番号の範囲を定義
            const arrowRanges = {
                yellow: { start: 1, end: 8 },
                blue: { start: 9, end: 16 },
                red: { start: 17, end: 24 },
                gray: { start: 25, end: 32 },
                black: { start: 33, end: 40 },
                white: { start: 41, end: 48 },
            };
            const photos = [];
            // 各色のフォルダから画像を取得
            for (const [color, range] of Object.entries(arrowRanges)) {
                for (let i = range.start; i <= range.end; i++) {
                    const imageUrl = `${this.gcsBaseUrl}/arrows/${color}/Arrow ${i}.png`;
                    photos.push({
                        src: {
                            original: imageUrl,
                            large2x: imageUrl,
                            large: imageUrl,
                            medium: imageUrl,
                            small: imageUrl,
                            portrait: imageUrl,
                            landscape: imageUrl,
                            tiny: imageUrl,
                        },
                        id: i,
                        width: 800,
                        height: 600,
                        photographer: "GCS",
                        photographer_url: "",
                        photographer_id: 1,
                        avg_color: "#FFFFFF",
                        url: imageUrl,
                        alt: `${color} arrow ${i}`,
                        liked: false,
                    });
                }
            }
            return {
                page: 1,
                per_page: photos.length,
                photos: photos,
                next_page: "",
            };
        }
        catch (error) {
            console.error("GCS画像の取得に失敗:", error);
            return {
                page: 1,
                per_page: 0,
                photos: [],
                next_page: "",
            };
        }
    }
    async getGCSTexts() {
        try {
            // テキスト画像の名前を定義
            const textNames = [
                "alert",
                "check",
                "confirm",
                "danger",
                "need-confirmation",
                "ng",
                "ok",
                "point",
                "safety",
            ];
            const photos = [];
            // 各テキスト画像を取得
            textNames.forEach((name, index) => {
                const imageUrl = `${this.gcsBaseUrl}/texts/${name}.png`;
                photos.push({
                    src: {
                        original: imageUrl,
                        large2x: imageUrl,
                        large: imageUrl,
                        medium: imageUrl,
                        small: imageUrl,
                        portrait: imageUrl,
                        landscape: imageUrl,
                        tiny: imageUrl,
                    },
                    id: index + 1,
                    width: 800,
                    height: 600,
                    photographer: "GCS",
                    photographer_url: "",
                    photographer_id: 1,
                    avg_color: "#FFFFFF",
                    url: imageUrl,
                    alt: name,
                    liked: false,
                });
            });
            return {
                page: 1,
                per_page: photos.length,
                photos: photos,
                next_page: "",
            };
        }
        catch (error) {
            console.error("GCS texts画像の取得に失敗:", error);
            return {
                page: 1,
                per_page: 0,
                photos: [],
                next_page: "",
            };
        }
    }
    async getGCSShapes() {
        try {
            // 色の定義
            const colors = ["yellow", "blue", "red", "gray", "black", "white"];
            // シェイプの種類を定義
            const shapeTypes = ["Ellipse", "Group", "Polygon", "Rectangle"];
            const photos = [];
            let id = 1;
            // 各色のフォルダから画像を取得
            for (const color of colors) {
                for (const shape of shapeTypes) {
                    const imageUrl = `${this.gcsBaseUrl}/shapes/${color}/${shape}.png`;
                    photos.push({
                        src: {
                            original: imageUrl,
                            large2x: imageUrl,
                            large: imageUrl,
                            medium: imageUrl,
                            small: imageUrl,
                            portrait: imageUrl,
                            landscape: imageUrl,
                            tiny: imageUrl,
                        },
                        id: id++,
                        width: 800,
                        height: 600,
                        photographer: "GCS",
                        photographer_url: "",
                        photographer_id: 1,
                        avg_color: "#FFFFFF",
                        url: imageUrl,
                        alt: `${color} ${shape.toLowerCase()}`,
                        liked: false,
                    });
                }
            }
            return {
                page: 1,
                per_page: photos.length,
                photos: photos,
                next_page: "",
            };
        }
        catch (error) {
            console.error("GCS shapes画像の取得に失敗:", error);
            return {
                page: 1,
                per_page: 0,
                photos: [],
                next_page: "",
            };
        }
    }
    hasApiKeys() {
        return !!this.pexelsApiKey && !!this.giphyApiKey;
    }
    getCurratedImages() {
        return this.pexelsFetcher(`${PEXELS_BASE_URL}/curated?per_page=${PER_PAGE_LIMIT}`);
    }
    getCurratedVideos() {
        return this.pexelsFetcher(`${PEXELS_BASE_URL}/videos/popular?per_page=${PER_PAGE_LIMIT}`);
    }
    getCurratedGifs() {
        return this.giphyFetcher(`${GIPHY_BASE_URL}/gifs/trending?rating=g`);
    }
    getCurratedStickers() {
        return this.giphyFetcher(`${GIPHY_BASE_URL}/stickers/trending?rating=g`);
    }
    searchImages(query) {
        if (!query) {
            return this.getCurratedImages();
        }
        return this.pexelsFetcher(`${PEXELS_BASE_URL}/search?query=${query}&per_page=${PER_PAGE_LIMIT}`);
    }
    searchVideos(query) {
        if (!query) {
            return this.getCurratedVideos();
        }
        return this.pexelsFetcher(`${PEXELS_BASE_URL}/videos/search?query=${query}&per_page=${PER_PAGE_LIMIT}`);
    }
    searchGifs(query) {
        if (!query) {
            return this.getCurratedGifs();
        }
        return this.giphyFetcher(`${GIPHY_BASE_URL}/gifs/search?q=${query}`);
    }
    searchStickers(query) {
        if (!query) {
            return this.getCurratedStickers();
        }
        return this.giphyFetcher(`${GIPHY_BASE_URL}/stickers/search?q=${query}`);
    }
    pexelsFetcher(url) {
        return fetch(url, {
            headers: {
                Authorization: `${this.pexelsApiKey}`,
                "Content-Type": "application/json",
            },
        }).then((response) => response.json());
    }
    giphyFetcher(url) {
        return fetch(`${url}&api_key=${this.giphyApiKey}&limit=${PER_PAGE_LIMIT}`).then((response) => response.json());
    }
    destroy() {
        this.pexelsApiKey = undefined;
        this.giphyApiKey = undefined;
        StockMediaService.instance = null;
    }
}
StockMediaService.instance = null;

function arrayToMap(array, key) {
    return array.reduce((map, item) => {
        map[item[key]] = item;
        return map;
    }, {});
}

const removeTransitionIfClipsAreNotAdjacent = (clipId, layerId, hasNearby) => {
    if (!hasNearby) {
        // remove transition if clips are not adjacent
        const transitionId = RendleyStore.layers[layerId].transitionIds.find((id) => {
            const transition = RendleyStore.transitions[id];
            return transition.startClipId === clipId || transition.endClipId === clipId;
        });
        if (transitionId) {
            const layer = Engine.getInstance().getTimeline().getLayerById(layerId);
            layer === null || layer === void 0 ? void 0 : layer.removeTransition(transitionId);
        }
    }
};
function numberToFixed(number) {
    return Number(number.toFixed(3));
}
function updateAdjacency(currentLayerId) {
    var _a, _b;
    const clipsIds = (_b = (_a = RendleyService.getLayerById(currentLayerId)) === null || _a === void 0 ? void 0 : _a.clipsIds) !== null && _b !== void 0 ? _b : [];
    for (let i = 0; i < clipsIds.length; i++) {
        const previousClipId = clipsIds[i - 1];
        const currentClipId = clipsIds[i];
        const nextClipId = clipsIds[i + 1];
        const currentClip = RendleyService.getClipById(currentClipId);
        if (currentClip == null) {
            return;
        }
        let hasPredecessor = false;
        let hasSuccessor = false;
        const differenceThreshold = numberToFixed(1 / RendleyService.getFps());
        if (previousClipId != null) {
            const prevClip = RendleyService.getClipById(previousClipId);
            if (prevClip == null) {
                return;
            }
            const difference = numberToFixed(Math.abs(currentClip.getLeftBound() - prevClip.getRightBound()));
            hasPredecessor = difference < differenceThreshold;
        }
        if (nextClipId != null) {
            const nextClip = RendleyService.getClipById(nextClipId);
            if (nextClip == null) {
                return;
            }
            const difference = numberToFixed(Math.abs(nextClip.getLeftBound() - currentClip.getRightBound()));
            hasSuccessor = difference < differenceThreshold;
        }
        removeTransitionIfClipsAreNotAdjacent(currentClipId, currentLayerId, hasPredecessor || hasSuccessor);
        RendleyStore.updateClip(currentClipId, {
            hasPredecessor,
            hasSuccessor,
        });
    }
}

const fontSources = [
    {
        family: "Roboto",
        cssUrl: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
    },
    {
        family: "Open Sans",
        cssUrl: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
    },
    {
        family: "Montserrat",
        cssUrl: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
    },
    {
        family: "Poppins",
        cssUrl: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
    },
    {
        family: "Lato",
        cssUrl: "https://fonts.googleapis.com/css2?family=Lato&display=swap",
    },
    {
        family: "Oswald",
        cssUrl: "https://fonts.googleapis.com/css2?family=Oswald&display=swap",
    },
    {
        family: "Rubik",
        cssUrl: "https://fonts.googleapis.com/css2?family=Rubik&display=swap",
    },
    {
        family: "Ubuntu",
        cssUrl: "https://fonts.googleapis.com/css2?family=Ubuntu&display=swap",
    },
    {
        family: "PT Sans",
        cssUrl: "https://fonts.googleapis.com/css2?family=PT+Sans&display=swap",
    },
    {
        family: "Kanit",
        cssUrl: "https://fonts.googleapis.com/css2?family=Kanit&display=swap",
    },
    {
        family: "Lora",
        cssUrl: "https://fonts.googleapis.com/css2?family=Lora&display=swap",
    },
    {
        family: "Dancing Script",
        cssUrl: "https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap",
    },
    {
        family: "Bangers",
        cssUrl: "https://fonts.googleapis.com/css2?family=Bangers&display=swap",
    },
    {
        family: "Noto Sans JP",
        cssUrl: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap",
    },
];

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
const RendleyBridge$1 = new RendleyBridge();

function getDomRoot() {
    return document.querySelector("rendley-video-editor");
}

function getShadowRoot() {
    var _a;
    return (_a = getDomRoot()) === null || _a === void 0 ? void 0 : _a.shadowRoot;
}

function getCanvasElement() {
    return getShadowRoot().getElementById(CANVAS_ID);
}

function isMobile() {
    return window.innerWidth < 768;
}

class SidebarStoreInstance {
    constructor() {
        this.activeItemKey = isMobile() ? null : "stock";
        Tn(this);
    }
    setActiveItemKey(id) {
        this.activeItemKey = id;
    }
    reset() {
        this.activeItemKey = null;
    }
}
const SidebarStore = new SidebarStoreInstance();

class WindowStoreInstance {
    constructor() {
        this.resolution = [window.innerWidth, window.innerHeight];
        this.canvasResolution = [0, 0];
        Tn(this);
    }
    setResolution(resolution) {
        this.resolution = resolution;
    }
    setCanvasResolution(resolution) {
        this.canvasResolution = resolution;
    }
    reset() {
        this.resolution = [window.innerWidth, window.innerHeight];
        this.canvasResolution = [0, 0];
    }
}
const WindowStore = new WindowStoreInstance();

const RendleyVideoEditor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onReady = createEvent(this, "onReady", 7);
        this.onError = createEvent(this, "onError", 7);
        this.onRenderSuccess = createEvent(this, "onRenderSuccess", 7);
        this.onRenderError = createEvent(this, "onRenderError", 7);
        this.theme = ApplicationStore.theme;
        this.licensename = undefined;
        this.licensekey = undefined;
        this.pexelsapikey = undefined;
        this.giphyapikey = undefined;
        this.filtersPath = FILTERS_PATH_CDN;
        this.effectsPath = EFFECTS_PATH_CDN;
        this.transitionsPath = TRANSITIONS_PATH_CDN;
        this.titlesPath = TITLES_PATH_CDN;
        this.subtitlesStylesPath = SUBTITLES_STYLES_PATH_CDN;
        this.isLoading = ApplicationStore.isLoading;
        this.isRendering = ApplicationStore.isRendering;
    }
    componentWillLoad() {
        if (this.pexelsapikey && this.giphyapikey) {
            StockMediaService.getInstance().init({
                pexelsApiKey: this.pexelsapikey,
                giphyApiKey: this.giphyapikey,
            });
        }
        ShortcutService.getInstance().init();
        ApplicationStore.setTheme(this.theme);
        this.disposeAutorun = It(() => {
            var _a, _b, _c;
            this.isLoading = ApplicationStore.isLoading;
            this.isRendering = ApplicationStore.isRendering;
            const renderSuccessBlobUrl = RendleyStore.render.blobUrl;
            const renderErrorMessage = RendleyStore.render.error;
            if (renderSuccessBlobUrl) {
                (_a = this.onRenderSuccess) === null || _a === void 0 ? void 0 : _a.emit(renderSuccessBlobUrl);
            }
            if (renderErrorMessage) {
                (_b = this.onRenderError) === null || _b === void 0 ? void 0 : _b.emit(renderErrorMessage);
            }
            (_c = this.el) === null || _c === void 0 ? void 0 : _c.setAttribute("theme", ApplicationStore.theme);
        });
    }
    componentDidLoad() {
        this.init();
    }
    disconnectedCallback() {
        this.destroy();
    }
    async destroy() {
        var _a;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
        ShortcutService.getInstance().destroy();
        StockMediaService.getInstance().destroy();
        RendleyBridge$1.destroy();
        await Engine.getInstance().destroy(true);
        ApplicationStore.reset();
        ContextMenuStore.reset();
        RendleyStore.reset();
        SidebarStore.reset();
        TimelineStore.reset();
        WindowStore.reset();
    }
    async init() {
        var _a, _b, _c, _d, _e, _f, _g;
        try {
            let license;
            if (this.licensename && this.licensekey) {
                license = {
                    licenseName: this.licensename,
                    licenseKey: this.licensekey,
                };
            }
            await RendleyService.init({
                display: {
                    width: 1920,
                    height: 1080,
                    backgroundColor: "#FFFFFF",
                    view: getCanvasElement(),
                },
                license,
            });
            await RendleyBridge$1.init({
                filtersPath: (_a = this.filtersPath) !== null && _a !== void 0 ? _a : "",
                effectsPath: (_b = this.effectsPath) !== null && _b !== void 0 ? _b : "",
                transitionsPath: (_c = this.transitionsPath) !== null && _c !== void 0 ? _c : "",
                titlesPath: (_d = this.titlesPath) !== null && _d !== void 0 ? _d : "",
                subtitlesStylesPath: (_e = this.subtitlesStylesPath) !== null && _e !== void 0 ? _e : "",
            });
            (_f = this.onReady) === null || _f === void 0 ? void 0 : _f.emit();
        }
        catch (error) {
            (_g = this.onError) === null || _g === void 0 ? void 0 : _g.emit(error);
            return null;
        }
    }
    async getElement() {
        return Promise.resolve(this.el);
    }
    async getEngine() {
        return Engine;
    }
    async handleDropFiles(files) {
        const library = Engine.getInstance().getLibrary();
        const promises = [];
        for (let i = 0; i < files.length; i++) {
            promises.push(library.addMedia(files[i]));
        }
        await Promise.all(promises);
    }
    render() {
        return (h(Host, { key: 'f1dd25bceaae89261248afb473818ab259bbd984' }, h("div", { key: 'ecf98b4b0f15d4c10a5e5fab123584075517930d', class: clsx("relative w-ful h-full") }, this.isLoading && h("ve-loading-layout", { key: '9fb73c19fe775eba03112019bc8bf3f7884799d9' }), this.isRendering && h("ve-rendering-layout", { key: '59f286597653ab2d94ffe7e09ca528ffc9350fea' }), h("ve-layout", { key: 'a50482294ccc873a1ca68df78a3664d1ccb4aa6c', onDropFiles: this.handleDropFiles }, h("ve-composition", { key: '8c07a2cfcc8ee002736bf9c6667cff7de84ccaee', slot: "rendley-container" }), h("ve-timeline", { key: 'c217ccdc0bdc2287bef07e55fbcfbe970b7f0982', slot: "timeline" })), h("ve-context-menu", { key: '3327458ffc6648d3a788dbf8feee85d5be0a0030' }))));
    }
    get el() { return getElement(this); }
};

export { ContextMenuStore as C, RendleyVideoEditor as R, SidebarStore as S, WindowStore as W, getShadowRoot as a, getCanvasElement as b, StockMediaService as c, getDomRoot as g, updateAdjacency as u };
