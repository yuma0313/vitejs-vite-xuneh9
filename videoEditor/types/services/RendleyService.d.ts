import { Engine, EngineOptions, LottieClip, Subtitles, TextBlock } from "@rendley/sdk";
export declare class RendleyService {
    private static get engine();
    static init(options: EngineOptions): Promise<void>;
    static getEngine(): Engine;
    static getCurrentTime(): number;
    static getFitDuration(): number;
    static getFps(): number;
    static play(): Promise<void>;
    static pause(): Promise<void>;
    static seek(time: number): Promise<void>;
    static setBackgroundColor(color: string): void;
    static setResolution(width: number, height: number): void;
    static getFonts(): FontFace[];
    static getMediaById(mediaId: string): import("@rendley/sdk").MediaData | undefined;
    static addMediaToGallery(file: File | string, mimeType?: string): Promise<string | null>;
    static getClipById(clipId: string): import("@rendley/sdk").Clip<import("pixi.js").Sprite, import("@rendley/sdk").ClipStyle<import("pixi.js").Sprite>> | undefined;
    static getLayerById(layerId: string): import("@rendley/sdk").Layer | undefined;
    static createLayer(index?: number): import("@rendley/sdk").Layer;
    static deleteLayer(layerId: string): boolean;
    static moveClipToLayer(clipId: string, layerId: string): Promise<void>;
    static addMediaToLayer(layerId: string, mediaId: string, dropTime?: number): Promise<import("@rendley/sdk").Clip<import("pixi.js").Sprite, import("@rendley/sdk").ClipStyle<import("pixi.js").Sprite>> | null>;
    static addTextClipToLayer(layerId: string, text?: string): Promise<import("@rendley/sdk").Clip<import("pixi.js").Sprite, import("@rendley/sdk").ClipStyle<import("pixi.js").Sprite>> | null> | null;
    static deleteMediaById(mediaId: string): Promise<void>;
    static deleteClipById(clipId: string): boolean;
    static deleteTransitionById(transitionId: string, layerId: string): void | undefined;
    static deleteAtCurrentTime(): boolean | void;
    static splitAtCurrentTime: () => void;
    static moveClipLeft: () => void;
    static export(): Promise<import("@rendley/sdk").ExportResult | null>;
    static importSubtitlesSrt(srtContent: string): Promise<string>;
    static addManualSubtitles(textBlocks?: TextBlock[]): Promise<string>;
    static addSubtitles(subtitles: Subtitles): Promise<string>;
    static createLottieClip(options: {
        dataUrl: string;
        propertiesUrl: string;
        startTime: number;
        layerId?: string;
    }): Promise<LottieClip | null>;
    static createTextClip(options: {
        text: string;
        startTime: number;
        layerId?: string;
    }): Promise<import("@rendley/sdk").Clip<import("pixi.js").Sprite, import("@rendley/sdk").ClipStyle<import("pixi.js").Sprite>> | null>;
    static replaceMedia(mediaDataId: string, file: File | Uint8Array): Promise<boolean>;
    static loadFont(fontName: string, url: string): Promise<void>;
}
