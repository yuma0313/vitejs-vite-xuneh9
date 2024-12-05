export type InputType = "number" | "text";
export declare class Input {
    type: InputType;
    placeholder?: string;
    label?: string;
    error?: string;
    name?: string;
    value?: string;
    onChangeText?: (value: string) => void;
    handleChangeText: (event: Event) => void | undefined;
    render(): any;
}
