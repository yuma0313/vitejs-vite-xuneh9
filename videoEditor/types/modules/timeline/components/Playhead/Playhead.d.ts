import { EventEmitter } from "../../../../stencil-public-runtime";
export declare class Playhead {
    private elementRef?;
    private interaction?;
    private disposeAutorun?;
    scrollToPage: EventEmitter<number>;
    private scrollPage;
    x: number;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleDrag(deltaX: number): void;
    handleDragEnd(): void;
    handleSeekingTimeRulerStart(event: CustomEvent<{
        event: MouseEvent;
        x: number;
    }>): void;
    handleFollowPlayhead(): void;
    render(): any;
}
