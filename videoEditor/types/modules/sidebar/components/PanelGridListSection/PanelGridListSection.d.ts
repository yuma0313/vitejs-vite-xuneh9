export declare class PanelGridListSection {
    title: string;
    data: unknown[];
    class?: string;
    isLoading?: boolean;
    columns?: number;
    renderFirst?: () => HTMLElement;
    renderCard: (item: any) => HTMLElement;
    visibleItemsCount: number;
    isExtended?: boolean | undefined;
    onExtend?: () => void;
    render(): any;
}
