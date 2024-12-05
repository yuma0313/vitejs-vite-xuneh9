import { TextBlock } from "@rendley/sdk";
export declare class SubtitleRow {
    subtitle: TextBlock;
    isActive: boolean;
    onChangeIn: (value: number) => boolean;
    onChangeOut: (value: number) => boolean;
    onChangeText: (value: string) => void;
    onDelete: () => void;
    isEditing: boolean;
    tempInValue: string;
    tempOutValue: string;
    contentTextarea?: HTMLTextAreaElement;
    componentWillLoad(): void;
    componentDidLoad(): void;
    adjustContentTextareaHeight(): void;
    handleChangeText: (event: Event) => void;
    handleChangeIn: (event: Event) => void;
    handleChangeOut: (event: Event) => void;
    handleBlurIn: () => void;
    handleBlurOut: () => void;
    handleTimeLabelKeydown: (event: KeyboardEvent) => void;
    handleFocus: () => void;
    handleBlur: () => void;
    render(): any;
}
