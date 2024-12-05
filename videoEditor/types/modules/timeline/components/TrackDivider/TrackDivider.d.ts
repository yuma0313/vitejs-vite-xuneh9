import { ClipDragOverDividerEvent } from "../../types/timeline.types";
import { TitleDescription } from "../../../../config/config";
export declare class TrackDivider {
    isDraggingOver: boolean;
    index: number;
    onDropMediaClip?: (event: DragEvent, mediaId: string) => void;
    onDropTextClip?: (event: DragEvent, title: TitleDescription) => void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    handleDragClipOver: (event: CustomEvent<ClipDragOverDividerEvent>) => void;
    handleDragOver: (event: DragEvent) => void;
    handleDragLeave: (event: DragEvent) => void;
    handleDrop: (event: DragEvent) => Promise<null | undefined>;
    render(): any;
}
