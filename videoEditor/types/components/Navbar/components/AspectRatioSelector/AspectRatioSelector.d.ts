type AspectOption = {
    label: string;
    width: number;
    height: number;
};
export declare class AspectRatioSelector {
    modalOpen: boolean;
    display: import("../../../../store/RendleyStore").Display;
    options: AspectOption[];
    selectedLabel?: string;
    private disposeAutorun?;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    handleOptionSelect(event: CustomEvent<{
        value: {
            label: string;
            width: number;
            height: number;
        };
    }>): void;
    renderIcon(width: number, height: number): any;
    handleCloseModal(): void;
    handleSubmitCustomResolution(width: number, height: number): void;
    render(): any;
}
export {};
