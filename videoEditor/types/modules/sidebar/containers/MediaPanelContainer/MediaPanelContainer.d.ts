import { MediaData } from "../../../../store/RendleyStore";
export declare class MediaPanelContainer {
    onClose?: () => void;
    data: MediaData[];
    private disposeAutorun?;
    private fileInputRef?;
    handleOpenFileViewer: (mediaId?: string) => void;
    handleUpload: (e: Event) => Promise<void>;
    handleReplaceFile: (e: Event) => Promise<void>;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    handleClickMedia(mediaId: string): Promise<import("@rendley/sdk").Clip<import("pixi.js").Sprite, import("@rendley/sdk").ClipStyle<import("pixi.js").Sprite>> | null>;
    handleDeleteMedia(id: string): Promise<void>;
    onContextMenu: (e: MouseEvent, mediaId: string) => void;
    render(): any;
}
