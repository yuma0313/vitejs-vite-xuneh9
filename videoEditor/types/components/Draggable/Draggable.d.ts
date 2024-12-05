export declare class Draggable {
    isDraggable: boolean;
    payload?: object;
    onDragStart?: (event: DragEvent) => void;
    onDragEnd?: (event: DragEvent) => void;
    private ref?;
    handleDragStart(event: DragEvent): void;
    handleDragEnd(event: DragEvent): void;
    render(): any;
}
