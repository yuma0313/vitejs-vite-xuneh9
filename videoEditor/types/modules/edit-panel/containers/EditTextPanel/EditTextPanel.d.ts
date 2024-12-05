import { TextClip } from "@rendley/sdk";
export declare class EditTextPanel {
    clipId: string;
    selectedClip?: TextClip;
    style: Record<string, any>;
    text: string;
    private fonts;
    private disposeAutorun?;
    componentWillLoad(): void;
    watchClipChange(newClipId: string): void;
    disconnectedCallback(): void;
    handleSetFonts(): void;
    handleChangeText: (value: string) => void;
    handleChangeFontSize: (value: string) => void;
    handleChangeColor: (color: string) => void;
    handleChangeBackgroundColor: (color: string) => void;
    handleToggleBold: () => void;
    handleToggleItalic: () => void;
    handleToggleAlignment: (position: "left" | "center" | "right") => void;
    handleChangeFontFamily: (event: any) => void;
    render(): any;
}
