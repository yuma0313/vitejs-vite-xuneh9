export declare class Composition {
    private canvasContainerElement?;
    private canvasResizeObserver?;
    private canvasMutationObserver?;
    private canvasElement?;
    private disposeAutorun?;
    displayWidth: number;
    displayHeight: number;
    updateTimestamp: number;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleCanvasResize(): void;
    private setupObservers;
    private cleanupObservers;
    private onCanvasContainerResize;
    private onCanvasMutations;
    private initializeCanvas;
    private calculateWidthForComposition;
    private updateCanvasSize;
    private setCanvasSize;
    handleMouseDown: () => void;
    render(): any;
}
