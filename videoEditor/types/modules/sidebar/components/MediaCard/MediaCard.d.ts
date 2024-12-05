import { MediaData } from "../../../../store/RendleyStore";
export declare class MediaCard {
    mediaData: MediaData;
    isLoaded: boolean;
    onClick: () => void;
    onDelete: () => void;
    handleDelete: (e: MouseEvent) => void;
    handleDragStart: () => void;
    handleDragEnd: () => void;
    render(): any;
}
