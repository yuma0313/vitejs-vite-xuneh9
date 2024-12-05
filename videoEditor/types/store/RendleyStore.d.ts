import { ClipTypeEnum } from "@rendley/sdk";
export declare enum MediaDataStatusEnum {
    LOADING = "loading",
    READY = "ready"
}
export interface ClipFilter {
    id: string;
    sourceId: string;
}
export type ClipEffect = ClipFilter;
export interface Clip {
    id: string;
    type: ClipTypeEnum;
    startTime: number;
    leftTrim: number;
    rightTrim: number;
    duration: number;
    trimmedDuration: number;
    mediaDataId?: string;
    text?: string;
    hasPredecessor?: boolean;
    hasSuccessor?: boolean;
}
export interface Transition {
    id: string;
    startClipId: string;
    endClipId: string;
    inDuration: number;
    outDuration: number;
}
export interface Layer {
    id: string;
    clipsIds: string[];
    transitionIds: string[];
}
export interface Display {
    width: number;
    height: number;
    backgroundColor: string;
}
export interface MediaData {
    id: string;
    thumbnail?: string;
    type?: string;
    filename?: string;
    status: MediaDataStatusEnum;
    duration?: number;
}
export interface Render {
    blobUrl?: string;
    error?: string;
    extension?: string;
}
export interface SubtitlesStyles {
    selectedMode: string | null;
    selectedAnimation: string | null;
    selectedStyle: string | null;
}
declare class RendleyStoreInstance {
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    display: Display;
    media: Record<string, MediaData>;
    clips: Record<string, Clip>;
    layers: Record<string, Layer>;
    transitions: Record<string, Transition>;
    layersOrder: string[];
    clipFilters: Record<string, ClipFilter[]>;
    clipEffects: Record<string, ClipEffect[]>;
    styles: Record<string, any>;
    updateTimestamp: number;
    render: Render;
    subtitlesStyles: SubtitlesStyles;
    constructor();
    getFilenameByClipId(clipId: string): string | undefined;
    getThumbnailByClipId(clipId: string): string | undefined;
    getTextByClipId(clipId: string): string | undefined;
    setDuration(duration: number): void;
    updateTimelineDuration(): void;
    resetRender(): void;
    updateRender(payload: Partial<RendleyStoreInstance["render"]>): void;
    getLayerFromClipId(clipId: string): Layer | null;
    getLayerFromTransitionId(transitionId: string): Layer | null;
    setDisplayResolution(width: number, height: number): void;
    setDisplayBackgroundColor(backgroundColor: string): void;
    setIsPlaying(isPlaying: boolean): void;
    setCurrentTime(currentTime: number): void;
    addLayer(layer: Layer): void;
    deleteLayer(layerId: string): void;
    setClip(clip: Clip): void;
    setClips(payload: RendleyStoreInstance["clips"]): void;
    addFilter(clipId: string, filter: ClipFilter): void;
    addEffect(clipId: string, effect: ClipEffect): void;
    deleteFilter(clipId: string, filterId: string): void;
    deleteEffect(clipId: string, effectId: string): void;
    updateClip(clipId: string, payload: Record<string, any>): void;
    updateLayer(layerId: string, payload: Record<string, any>): void;
    updateStyles(clipId: string, styles: Record<string, any>): void;
    setStyles(styles: Record<string, any>): void;
    addClip(clip: Clip): void;
    deleteClip(clipId: string, layerId: string): void;
    setMedia(payload: RendleyStoreInstance["media"]): void;
    setLayers(payload: RendleyStoreInstance["layers"]): void;
    addMedia(mediaData: MediaData): void;
    deleteMedia(mediaId: string): void;
    setLayersOrder(layersIds: string[]): void;
    addTransition(transition: Transition): void;
    setTransitions(payload: RendleyStoreInstance["transitions"]): void;
    deleteTransition(transitionId: string, layerId: string): void;
    setUpdateTimestamp(timestamp: number): void;
    setSubtitlesMode(value: string): void;
    setSubtitlesAnimation(value: string | null): void;
    setSubtitlesStyle(value: string | null): void;
    reset(): void;
}
declare const RendleyStore: RendleyStoreInstance;
export { RendleyStore };
