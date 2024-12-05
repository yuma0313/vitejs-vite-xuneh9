export declare class DragResizeRotateContainer {
    private containerRef?;
    private interaction?;
    private disposeReaction?;
    selectedClipId: string | null;
    pixelRatio: number;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    get selectedClip(): import("@rendley/sdk").Clip<import("pixi.js").Sprite, import("@rendley/sdk").ClipStyle<import("pixi.js").Sprite>> | null;
    handleDrag(x: number, y: number): void;
    handleScale(deltaWidth: number, deltaHeight: number): void;
    handleResize(deltaWidth: number, deltaHeight: number): void;
    handleChangeTextWarp(deltaWidth: number): void;
    handleRotate(rotation: number): void;
    private handleUpdate;
    render(): any;
}
