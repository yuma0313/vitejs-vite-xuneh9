export declare class TextClip {
    clipId: string;
    layerId: string;
    text?: string;
    private disposeAutorun?;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
