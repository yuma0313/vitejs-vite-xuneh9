export declare class Layout {
    private contentContainerRef?;
    private timelineContainerRef?;
    private dragEnterCounter;
    isResizing: boolean;
    isDragOverlayVisible: boolean;
    onDropFiles?: (files: FileList) => Promise<void>;
    componentDidLoad(): void;
    handleUpdateStyleWhenResizing(): void;
    handleDragOver(event: DragEvent): void;
    handleDragEnter(event: DragEvent): void;
    handleDragLeave(event: DragEvent): void;
    handleDrop(event: DragEvent): void;
    render(): any;
}
