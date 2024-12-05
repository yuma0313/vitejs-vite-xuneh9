export declare class RenderingLayout {
    progress: number;
    error: string | undefined;
    blobUrl: string | undefined;
    extension: string | undefined;
    private disposeAutorun?;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    handleClose: () => void;
    handleDownload: () => void;
    renderRenderingContent(): any;
    renderFinishedContent(): any;
    renderErrorContent(): any;
    render(): any;
}
