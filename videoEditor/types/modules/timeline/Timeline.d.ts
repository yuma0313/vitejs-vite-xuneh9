import { type EventEmitter } from "../../stencil-public-runtime";
import { TitleDescription } from "../../config/config";
export declare class Timeline {
    layersOrder: string[];
    duration: number;
    zoom: number;
    playheadX: number;
    private timelineTracksResizeObserver?;
    private disposeAutorun?;
    private timelineTracksRef?;
    private handleScroll;
    tracksScrollLeft: EventEmitter<number>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    durationUpdated(): void;
    addScrollSync(): void;
    removeScrollSync(): void;
    handleTimelineTracksResize(entries: ResizeObserverEntry[]): void;
    handleCreateLayerMedia: (event: DragEvent, mediaId: string, index: number) => Promise<null | undefined>;
    handleCreateLayerText: (event: DragEvent, title: TitleDescription, index: number) => Promise<null | undefined>;
    handleWheel: (event: WheelEvent) => void;
    renderTrackDivider: (index: number) => any;
    handleScrollToPage(event: CustomEvent<number>): void;
    render(): any;
}
