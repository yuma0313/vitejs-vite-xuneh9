export declare class SubtitlesPanelContainer {
    onClose?: () => void;
    rerender: number;
    activeSubtitleIndex: number;
    private disposeAutorun?;
    private disposeReaction?;
    private subtitles;
    componentWillLoad(): void;
    componentWillUnmount(): void;
    handleAddSubtitle(index: number): void;
    handleChangeSubtitle: (index: number, text: string) => void;
    handleDeleteSubtitle: (index: number) => void;
    handleChangeIn: (index: number, value: number) => boolean;
    handleUpdateSubtitlesDuration: () => void;
    handleChangeOut: (index: number, value: number) => boolean;
    handleImportSrt: (content: string) => Promise<void>;
    handleAddManual: () => Promise<void>;
    handleMergeSubtitles: (index: number) => void;
    triggerRerender: () => void;
    render(): any;
}
