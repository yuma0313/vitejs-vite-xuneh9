declare class TimelineStoreInstance {
    width: number;
    tracksContainerWidth: number;
    draggedClips: Record<string, true>;
    draggedTransitions: Record<string, true>;
    zoom: number;
    constructor();
    setWidth(width: number): void;
    setTracksContainerWidth(width: number): void;
    setDraggingClip(clipId: string, isDragging: boolean): void;
    setDraggingTransition(transitionId: string, isDragging: boolean): void;
    setZoom(zoom: number): void;
    reset(): void;
}
declare const TimelineStore: TimelineStoreInstance;
export { TimelineStore };
