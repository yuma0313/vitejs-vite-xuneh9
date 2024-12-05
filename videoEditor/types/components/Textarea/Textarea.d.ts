export declare class Textarea {
    placeholder?: string;
    label?: string;
    error?: string;
    name?: string;
    value?: string;
    defaultValue?: string;
    onChangeText?: (value: string) => void;
    handleChangeText: (event: Event) => void | undefined;
    render(): any;
}
