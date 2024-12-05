import { EventEmitter } from "../../../../stencil-public-runtime";
export declare class CanvasTimeRuler {
    seekingTimeRulerStart: EventEmitter<{
        event: MouseEvent;
        x: number;
    }>;
    duration: number;
    timelineZoom: number;
    scrollLeft: number;
    private canvasContainerRef?;
    private canvasRef?;
    private canvasContext?;
    private canvasFillColor?;
    private disposeAutorun?;
    private disposeReaction?;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleTracksScrollLeft(event: CustomEvent<number>): void;
    handleMouseDown: (event: MouseEvent) => void;
    updateTheme: () => void;
    handleStateChanged(): void;
    resizeCanvas: () => void;
    redrawCanvas(): void;
    render(): any;
}
