export declare const COMPOSITION_CONTAINER_ID = "composition";
export declare const CANVAS_ID = "rendley";
export declare const TIMELINE_RULER_TICK_WIDTH_PX = 100;
export declare const TIMELINE_MIN_DURATION = 30;
export declare const ASSETS_PATH_CDN = "https://cdn.rendley.com/sdk/assets";
export declare const FILTERS_PATH_CDN = "https://cdn.rendley.com/sdk/assets/filters/";
export declare const EFFECTS_PATH_CDN = "https://cdn.rendley.com/sdk/assets/effects/";
export declare const TRANSITIONS_PATH_CDN = "https://cdn.rendley.com/sdk/assets/transitions/";
export declare const TITLES_PATH_CDN = "https://cdn.rendley.com/sdk/assets/titles/";
export declare const IMAGES_PATH_CDN = "https://cdn.rendley.com/sdk/assets/images/";
export declare const SUBTITLES_STYLES_PATH_CDN = "https://cdn.rendley.com/sdk/assets/subtitles/";
export interface TransitionDescription {
    id: string;
    label: string;
    thumbnailUrl: string;
    videoPreviewUrl: string;
    shaderUrl: string;
}
export interface FilterDescription {
    id: string;
    label: string;
    thumbnailUrl: string;
    lutUrl: string;
}
export interface TitleDescription {
    id: string;
    name: string;
    thumbnailUrl: string;
    videoPreviewUrl: string;
    propertiesUrl: string;
    dataUrl: string;
    duration: number;
}
export interface EffectDescription {
    id: string;
    label: string;
    thumbnailUrl: string;
    videoPreviewUrl: string;
    shaderUrl: string;
}
export interface FontSource {
    family: string;
    cssUrl: string;
}
export interface SubtitlesStylesDescription {
    modes: StyleDescription[];
    animations: StyleDescription[];
    styles: StyleDescription[];
}
export interface StyleDescription {
    name?: string;
    value: string;
    path: string;
}
