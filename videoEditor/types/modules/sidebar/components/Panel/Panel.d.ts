export declare class Panel {
    isMedia?: boolean;
    onClose?: () => void;
    private fileInputRef?;
    handleClickUpload(): void;
    handleUpload(e: Event): Promise<void>;
    render(): any;
}
