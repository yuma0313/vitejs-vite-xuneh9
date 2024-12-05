import * as PexelsTypes from "../../../../types/pexels.types";
import * as GiphyTypes from "../../../../types/giphy.types";
export declare class StockPanelContainer {
    onClose?: () => void;
    isLoading: boolean;
    hasError: boolean;
    images: PexelsTypes.Photo[];
    texts: PexelsTypes.Photo[];
    shapes: PexelsTypes.Photo[];
    isImagesExtended: boolean;
    isTextsExtended: boolean;
    isShapesExtended: boolean;
    private StockMediaService;
    componentWillLoad(): void;
    handleInitialLoad: () => Promise<void>;
    handleSelectImage: (data: PexelsTypes.Photo) => Promise<void>;
    handleSelectVideo: (data: PexelsTypes.Video) => Promise<void>;
    handleSelectGif: (data: GiphyTypes.Gif) => Promise<void>;
    handleClickStock: (url: string, mimeType?: string) => Promise<void>;
    handleDebounceSearch: (text: string) => void;
    handleSearch: (text: string) => Promise<void>;
    handleExtendImages: () => void;
    handleExtendTexts: () => void;
    handleExtendShapes: () => void;
    render(): any;
}
