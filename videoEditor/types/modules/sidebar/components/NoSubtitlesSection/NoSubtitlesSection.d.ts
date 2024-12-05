export declare class NoSubtitlesSection {
    onImportSrt: (srtContent: string) => void;
    onAdd: () => void;
    fileInputRef?: HTMLInputElement;
    handleClickImport: () => void;
    handleImport: (e: Event) => void;
    render(): any;
}
