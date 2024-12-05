import * as GiphyTypes from "../types/giphy.types";
import * as PexelsTypes from "../types/pexels.types";
interface StockMediaServiceOptions {
    pexelsApiKey: string;
    giphyApiKey: string;
    gcsBaseUrl?: string;
}
export declare class StockMediaService {
    private static instance;
    private pexelsApiKey?;
    private giphyApiKey?;
    private gcsBaseUrl;
    private constructor();
    static getInstance(): StockMediaService;
    init(options: StockMediaServiceOptions): void;
    getGCSImages(): Promise<PexelsTypes.GetImagesResponse>;
    getGCSTexts(): Promise<PexelsTypes.GetImagesResponse>;
    getGCSShapes(): Promise<PexelsTypes.GetImagesResponse>;
    hasApiKeys(): boolean;
    getCurratedImages(): Promise<PexelsTypes.GetImagesResponse>;
    getCurratedVideos(): Promise<PexelsTypes.GetVideosResponse>;
    getCurratedGifs(): Promise<GiphyTypes.GetGiphyResponse>;
    getCurratedStickers(): Promise<GiphyTypes.GetGiphyResponse>;
    searchImages(query: string): Promise<PexelsTypes.GetImagesResponse>;
    searchVideos(query: string): Promise<PexelsTypes.GetVideosResponse>;
    searchGifs(query: string): Promise<GiphyTypes.GetGiphyResponse>;
    searchStickers(query: string): Promise<GiphyTypes.GetGiphyResponse>;
    private pexelsFetcher;
    private giphyFetcher;
    destroy(): void;
}
export {};
