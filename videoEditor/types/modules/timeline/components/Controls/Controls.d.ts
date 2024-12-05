export declare class Controls {
    isPlaying: boolean;
    displayTime: string;
    selectedClipId: string | null;
    selectedTransitionId: string | null;
    private disposeAutorun?;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    handlePlay(): Promise<void>;
    handlePause(): Promise<void>;
    handleTrash(): boolean | void;
    handleSplit: () => void;
    decrementZoom: () => void;
    incrementZoom: () => void;
    handleStop: () => void;
    render(): any;
}
