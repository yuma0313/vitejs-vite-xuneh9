export declare class EffectShowcaseCard {
    imageUrl?: string;
    videoUrl?: string;
    name?: string;
    tooltip?: string;
    onDelete?: () => void;
    isSelected?: boolean;
    onMouseDown?: (event: MouseEvent) => Promise<unknown> | void;
    isHovering: boolean;
    imageLoaded: boolean;
    videoLoaded: boolean;
    isLoading: boolean;
    handleImageLoaded(): void;
    handleVideoLoaded(): void;
    handleMouseOver: () => void;
    handleMouseOut(): void;
    handleMouseDown(e: MouseEvent): void;
    render(): any;
}
