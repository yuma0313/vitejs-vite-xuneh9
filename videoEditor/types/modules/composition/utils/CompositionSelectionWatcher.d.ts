export declare class SelectionWatcher {
    private static instance;
    private element;
    private isDragging;
    static getInstance(): SelectionWatcher;
    init(element: HTMLCanvasElement): void;
    destroy(): void;
    private getPositionFromEvent;
    private onMouseDown;
    private onMouseUp;
}
