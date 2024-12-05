interface InteractivePlayheadListeners {
    onDrag?: (x: number) => void;
    onDragEnd?: () => void;
}
declare class InteractivePlayhead {
    private element;
    private containerElement;
    private listeners;
    private moveable?;
    constructor(element: HTMLElement, containerElement: HTMLElement, listeners: InteractivePlayheadListeners);
    mount(): void;
    dragStart(event: MouseEvent): void;
}
export { InteractivePlayhead };
