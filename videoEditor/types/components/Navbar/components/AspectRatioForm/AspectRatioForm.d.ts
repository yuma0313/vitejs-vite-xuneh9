interface FormEvent extends Event {
    target: HTMLFormElement;
}
export declare class AspectRatioForm {
    onClose?: () => void;
    onSubmitAspectRatio?: (width: number, height: number) => void;
    widthError?: string;
    heightError?: string;
    handleSubmit: (e: FormEvent) => void;
    render(): any;
}
export {};
