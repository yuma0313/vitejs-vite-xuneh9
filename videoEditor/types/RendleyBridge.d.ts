declare class RendleyBridge {
    init(options: {
        transitionsPath: string;
        filtersPath: string;
        effectsPath: string;
        titlesPath: string;
        subtitlesStylesPath: string;
    }): Promise<void>;
    private setupEventListeners;
    destroy(): void;
    private handleReady;
    private handlePlaying;
    private handleTime;
    private handleBackgroundUpdated;
    private handleResolutionUpdated;
    private handleAddTransition;
    private handleRemoveTransition;
    private handleLayerUpdated;
    private handleLayerAdded;
    private handleLayerRemoved;
    private handleLayersOrderUpdated;
    private handleClipUpdated;
    private handleClipStyleUpdated;
    private handleClipFilterAdded;
    private handleClipFilterRemoved;
    private handleClipEffectAdded;
    private handleClipEffectRemoved;
    private handleClipUpdatedText;
    private handleClipAdded;
    private handleClipRemoved;
    private handleLibraryAdded;
    private handleLibraryRemoved;
    private handleLibraryMediaUpdated;
    private handleLibraryMediaReplaced;
    private handleLibraryError;
    private handleClipError;
}
declare const _default: RendleyBridge;
export default _default;
