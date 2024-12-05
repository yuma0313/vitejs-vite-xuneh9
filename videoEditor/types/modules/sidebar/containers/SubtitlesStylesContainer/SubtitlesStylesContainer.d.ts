interface StyleConfiguration {
    name?: string;
    value: string;
    thumbnailUrl: string;
    videoPreviewUrl?: string;
}
export declare class SubtitlesStylesContainer {
    modes: StyleConfiguration[];
    animations: StyleConfiguration[];
    styles: StyleConfiguration[];
    selectedStyle: string | null;
    selectedAnimation: string | null;
    selectedMode: string | null;
    private disposeAutorun?;
    componentWillLoad(): void;
    componentWillUnmount(): void;
    init(): void;
    handleSetMode(value: StyleConfiguration): void;
    handleSetStyle(value: StyleConfiguration): Promise<void>;
    handleSetAnimation(value: StyleConfiguration): void;
    render(): any;
}
export {};
