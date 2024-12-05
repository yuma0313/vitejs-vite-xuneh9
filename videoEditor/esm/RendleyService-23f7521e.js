import { e as ClipTypeEnum, R as RendleyStore, E as Engine, f as Subtitles, g as SubtitlesClip, L as LottieClip } from './RendleyStore-b5f665fd.js';
import { A as ApplicationStore } from './ApplicationStore-824bdfff.js';

var _a;
class RendleyService {
    static get engine() {
        return Engine.getInstance();
    }
    static init(options) {
        return this.engine.init(options);
    }
    static getEngine() {
        return this.engine;
    }
    static getCurrentTime() {
        return _a.engine.getTimeline().currentTime;
    }
    static getFitDuration() {
        return _a.engine.getTimeline().getFitDuration();
    }
    static getFps() {
        return _a.engine.getTimeline().fps;
    }
    static play() {
        return _a.engine.play();
    }
    static pause() {
        return _a.engine.pause();
    }
    static seek(time) {
        return _a.engine.seek(time);
    }
    static setBackgroundColor(color) {
        return _a.engine.getDisplay().setBackgroundColor(color);
    }
    static setResolution(width, height) {
        return _a.engine.getDisplay().setResolution(width, height);
    }
    static getFonts() {
        return _a.engine.getFontRegistry().fonts.map((font) => font.font);
    }
    static getMediaById(mediaId) {
        return _a.engine.getLibrary().getMediaById(mediaId);
    }
    static addMediaToGallery(file, mimeType) {
        return _a.engine.getLibrary().addMedia(file, mimeType);
    }
    static getClipById(clipId) {
        return _a.engine.getClipById(clipId);
    }
    static getLayerById(layerId) {
        return _a.engine.getTimeline().getLayerById(layerId);
    }
    static createLayer(index) {
        return _a.engine.getTimeline().createLayer({ index });
    }
    static deleteLayer(layerId) {
        return _a.engine.getTimeline().removeLayer(layerId);
    }
    static async moveClipToLayer(clipId, layerId) {
        return _a.engine.getTimeline().moveClipToLayer(clipId, layerId);
    }
    static async addMediaToLayer(layerId, mediaId, dropTime = _a.getCurrentTime()) {
        const layer = _a.getLayerById(layerId);
        if (layer == null) {
            return null;
        }
        return layer.addClip({
            mediaDataId: mediaId,
            startTime: dropTime,
        });
    }
    static addTextClipToLayer(layerId, text = "Hello World") {
        const layer = _a.getLayerById(layerId);
        const currentTime = _a.getCurrentTime();
        if (layer == null) {
            return null;
        }
        return layer.addClip({
            text,
            startTime: currentTime,
            duration: 1,
            style: {
                color: "#FFFFFF",
            },
        });
    }
    static deleteMediaById(mediaId) {
        return _a.engine.getLibrary().deleteMedia(mediaId);
    }
    static deleteClipById(clipId) {
        return _a.engine.getTimeline().removeClip(clipId);
    }
    static deleteTransitionById(transitionId, layerId) {
        const layer = _a.getLayerById(layerId);
        return layer === null || layer === void 0 ? void 0 : layer.removeTransition(transitionId);
    }
    static deleteAtCurrentTime() {
        var _b;
        const selectedClipId = ApplicationStore.selectedClipId;
        if (selectedClipId != null) {
            return _a.deleteClipById(selectedClipId);
        }
        const selectedTransitionId = ApplicationStore.selectedTransitionId;
        if (selectedTransitionId != null) {
            const layerId = (_b = RendleyStore.getLayerFromTransitionId(selectedTransitionId)) === null || _b === void 0 ? void 0 : _b.id;
            if (layerId != null) {
                return _a.deleteTransitionById(selectedTransitionId, layerId);
            }
        }
    }
    static export() {
        return _a.engine.export();
    }
    static async importSubtitlesSrt(srtContent) {
        const subtitles = Engine.getInstance().getSubtitlesManager().convertSRTToSubtitles(srtContent);
        return await _a.addSubtitles(subtitles);
    }
    static async addManualSubtitles(textBlocks) {
        const subtitles = new Subtitles({
            textBlocks: textBlocks !== null && textBlocks !== void 0 ? textBlocks : [
                {
                    text: "Sample",
                    time: 0,
                    duration: 1,
                },
            ],
        });
        return await _a.addSubtitles(subtitles);
    }
    static async addSubtitles(subtitles) {
        const subtitlesId = Engine.getInstance().getLibrary().addSubtitles(subtitles);
        const layer = _a.createLayer();
        const subtitlesClip = new SubtitlesClip({
            subtitlesId: subtitlesId,
        });
        await layer.addClip(subtitlesClip);
        return subtitlesClip.id;
    }
    static async createLottieClip(options) {
        const layer = options.layerId ? _a.getLayerById(options.layerId) : _a.createLayer();
        if (layer == null) {
            return null;
        }
        const lottieClip = new LottieClip({
            dataUrl: options.dataUrl,
            propertiesUrl: options.propertiesUrl,
            startTime: options.startTime,
        });
        await layer.addClip(lottieClip);
        return lottieClip;
    }
    static async createTextClip(options) {
        const layer = options.layerId ? _a.getLayerById(options.layerId) : _a.createLayer();
        if (layer == null) {
            console.log("cannot create layer");
            return null;
        }
        const clip = await layer.addClip({
            type: "text",
            text: options.text,
            startTime: options.startTime,
        });
        return clip;
    }
    static async replaceMedia(mediaDataId, file) {
        return _a.getEngine().getLibrary().replaceMedia(mediaDataId, file);
    }
    static loadFont(fontName, url) {
        return this.engine.getFontRegistry().loadFromCssUrl(fontName, url);
    }
}
_a = RendleyService;
RendleyService.splitAtCurrentTime = () => {
    var _b;
    const selectedClipId = ApplicationStore.selectedClipId;
    if (selectedClipId == null) {
        return;
    }
    const currentTime = RendleyStore.currentTime;
    const clip = RendleyStore.clips[selectedClipId];
    if (clip == null) {
        return;
    }
    if ((clip === null || clip === void 0 ? void 0 : clip.type) === ClipTypeEnum.SUBTITLES) {
        return;
    }
    const layerId = (_b = Object.values(RendleyStore.layers).find((layer) => layer.clipsIds.includes(selectedClipId))) === null || _b === void 0 ? void 0 : _b.id;
    if (layerId == null) {
        return;
    }
    const layer = _a.engine.getTimeline().getLayerById(layerId);
    if (layer == null) {
        return;
    }
    layer.splitClip(clip.id, currentTime);
};
RendleyService.moveClipLeft = () => {
    var _b;
    const selectedClipId = ApplicationStore.selectedClipId;
    if (selectedClipId == null) {
        return;
    }
    const layerId = (_b = Object.values(RendleyStore.layers).find((layer) => layer.clipsIds.includes(selectedClipId))) === null || _b === void 0 ? void 0 : _b.id;
    if (layerId == null) {
        return;
    }
    const layer = _a.engine.getTimeline().getLayerById(layerId);
    if (layer == null) {
        return;
    }
    for (let i = 0; i < layer.clipsIds.length; i++) {
        if (layer.clipsIds[i] === selectedClipId) {
            if (i > 0) {
                layer.clips[selectedClipId].setStartTime(layer.clips[layer.clipsIds[i - 1]].getRightBound() - layer.clips[selectedClipId].getLeftTrim());
                RendleyStore.clips[selectedClipId].startTime = layer.clips[selectedClipId].getStartTime();
            }
            else {
                RendleyStore.clips[selectedClipId].startTime = -layer.clips[selectedClipId].getLeftTrim();
                layer.clips[selectedClipId].setStartTime(RendleyStore.clips[selectedClipId].startTime);
            }
            break;
        }
    }
};

export { RendleyService as R };
