import { ResizeDirectionEnum } from "../../utils/InteractiveClip";
export declare class Clip {
    clipId: string;
    layerId: string;
    filename?: string;
    thumbnail?: string;
    isResizeEnabled?: boolean;
    startTime: number;
    duration: number;
    leftTrim: number;
    rightTrim: number;
    trimmedDuration: number;
    width: number;
    x: number;
    y: number;
    isFocused: boolean;
    hasSuccessor: boolean;
    hasPredecessor: boolean;
    focusEvent?: MouseEvent;
    elementRef?: HTMLDivElement;
    private initialPosition;
    private layerSnapPositions;
    private clipSnapPositions;
    private interaction?;
    private disposeAutorun?;
    private disposeReaction?;
    private readonly cachedValuesClass;
    readonly cachedValues: InstanceType<typeof this.cachedValuesClass>;
    handleUpdateStyles(): void;
    handleUpdateClip(): void;
    get containerElementRef(): HTMLElement | null | undefined;
    componentWillLoad(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    componentDidLoad(): void;
    handleFocusChange(): void;
    drag(clientX: number, clientY: number): void;
    resize(clientX: number, direction: ResizeDirectionEnum): void;
    resizeStart(): void;
    resizeEnd(direction: ResizeDirectionEnum, distance: number): void;
    dragStart(clientX: number, clientY: number): void;
    dragEnd(clientX: number, clientY: number): void;
    private dispatchClipDragOverDividerEvent;
    private findLayerSnapPosition;
    private setLayerSnapPositions;
    private setClipSnapPositions;
    handlePostUpdateClip(): void;
    handleMouseDown(event: MouseEvent): void;
    render(): any;
}
