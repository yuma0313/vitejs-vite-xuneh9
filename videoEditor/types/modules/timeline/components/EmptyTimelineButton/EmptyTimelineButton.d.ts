export declare class EmptyTimelineButton {
    onUploadClip?: (event: DragEvent, mediaId: string) => void;
    isDraggingOver: boolean;
    private fileInputRef?;
    handleClickUpload: () => void;
    handleUpload: (e: Event) => Promise<void>;
    handleDragOver: (event: DragEvent) => void;
    handleDragLeave: (event: DragEvent) => void;
    handleDrop: (event: DragEvent) => Promise<null | undefined>;
    render(): any;
}
