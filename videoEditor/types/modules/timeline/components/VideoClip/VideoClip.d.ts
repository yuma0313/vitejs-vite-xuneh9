export declare class VideoClip {
    clipId: string;
    layerId: string;
    filename?: string;
    thumbnail?: string;
    private disposeAutorun?;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
