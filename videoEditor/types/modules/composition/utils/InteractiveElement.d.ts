interface InteractiveElementListeners {
    onRotate?: (rotation: number) => void;
    onDrag?: (x: number, y: number) => void;
    onScale?: (deltaWidth: number, deltaHeight: number) => void;
    onResize?: (deltaWidth: number, deltaHeight: number) => void;
    dragEnd?: () => void;
    rotateEnd?: () => void;
    resizeEnd?: () => void;
    scaleEnd?: () => void;
    onUpdate?: () => void;
}
export declare class InteractiveElement {
    private moveable;
    private element;
    private listeners?;
    constructor(element: HTMLElement, listeners?: InteractiveElementListeners);
    init(): void;
    showHandlers(): void;
    hideHandlers(): void;
    destroy(): void;
    updateStyle(style: Partial<CSSStyleDeclaration>): void;
}
export {};
