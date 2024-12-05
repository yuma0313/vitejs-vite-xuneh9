import { JSX } from "../../stencil-public-runtime";
type OptionItem = {
    icon?: () => JSX.Element;
    text: string;
    panel?: () => JSX.Element;
    onClick?: () => void;
    isHidden?: boolean;
};
declare const OPTIONS: Record<string, OptionItem>;
export declare class Sidebar {
    activeItemKey: string | null;
    private disposeAutorun?;
    private disposeReaction?;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    handleItemClick(id: keyof typeof OPTIONS): void;
    handleOpenPanel(id: string): void;
    handleClosePanel(): void;
    getActivePanelComponent(): JSX.Element | null;
    render(): any;
}
export {};
