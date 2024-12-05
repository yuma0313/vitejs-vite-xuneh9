import { Clip } from "../../../../store/RendleyStore";
export declare class Track {
    layerId: string;
    temporaryTransitions: {
        layerId: string;
        clipId: string;
        startTime: number;
    }[];
    clipsIds: string[];
    transitionIds: string[];
    clips: Record<string, Clip>;
    private placeholderRef?;
    private createDropClipPlaceholder;
    private disposeAutorun?;
    componentWillLoad(): void;
    handleDrop: (event: DragEvent) => Promise<null | undefined>;
    renderClip: (clipId: string, index: number) => any;
    renderTransition: (transitionId: string) => any;
    renderTransitionPlaceholder: ({ startTime, layerId, clipId }: any) => any;
    handleDragEnter: (event: DragEvent) => void;
    handleDragOver: (event: DragEvent) => void;
    handleDragLeave: (event: DragEvent) => void;
    render(): any;
}
