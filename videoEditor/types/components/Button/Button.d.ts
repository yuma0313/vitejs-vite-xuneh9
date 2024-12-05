export type ButtonVariant = "default" | "ghost" | "primary";
export declare class Button {
    variant: ButtonVariant;
    disabled?: boolean;
    class?: string;
    render(): any;
}
