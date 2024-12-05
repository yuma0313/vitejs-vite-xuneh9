import Moveable from "moveable";
export declare enum ResizeDirectionEnum {
    LEFT = -1,
    RIGHT = 1
}
interface InteractiveClipOptions {
    onDragStart?: (clientX: number, clientY: number) => void;
    onResizeStart?: (clientX: number) => void;
    onDrag?: (clientX: number, clientY: number) => void;
    onResize?: (clientX: number, direction: ResizeDirectionEnum) => void;
    onResizeEnd?: (direction: ResizeDirectionEnum, distance: number) => void;
    onDragEnd?: (clientX: number, clientY: number) => void;
    onClick?: () => void;
}
interface InteractiveClipMountOptions {
    isResizeEnabled?: boolean;
    elementGuidelines?: string[];
}
declare class InteractiveClip {
    private element;
    private containerElement;
    private options;
    moveable: Moveable | null;
    constructor(element: HTMLElement, containerElement: HTMLElement, options: InteractiveClipOptions);
    mount(event?: MouseEvent, options?: InteractiveClipMountOptions): void;
    destroy(): void;
}
export { InteractiveClip };
