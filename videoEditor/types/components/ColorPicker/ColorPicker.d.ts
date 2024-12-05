export declare class ColorPicker {
    private inputRef?;
    color?: string;
    onChangeColor?: (color: string) => void;
    handleOpen(): void;
    handleChangeColor: (event: Event) => void | undefined;
    render(): any;
}
