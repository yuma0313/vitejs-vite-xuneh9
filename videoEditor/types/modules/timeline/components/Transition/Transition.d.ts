export declare class Transition {
    type: "permanent" | "temporary" | null;
    permanentTransition?: {
        transitionId: string;
    };
    temporaryTransition?: {
        startTime: number;
        layerId: string;
        clipId: string;
    };
    isDraggingOver: boolean;
    isVisible: boolean;
    x: number;
    isSelected: boolean;
    private handleCreateTransitionOnDrop;
    private disposeAutorun?;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    get isTemporary(): boolean;
    get isPermanent(): boolean;
    handleCalculatePosition(): void;
    private updateVisibility;
    handleDragOver: (event: DragEvent) => void;
    handleDragLeave: (event: DragEvent) => void;
    handleDrop: (event: DragEvent) => Promise<null | undefined>;
    handleClick: () => void;
    render(): any;
}
