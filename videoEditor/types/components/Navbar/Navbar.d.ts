export declare class Navbar {
    backgroundColor: string;
    theme: import("../../store/ApplicationStore").ThemeVariants;
    private disposeAutorun?;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    handleChangeBackgroundColor: (color: string) => void;
    getIsExportEnabled(): boolean;
    exportHandler: () => Promise<void>;
    handleToggleTheme: () => void;
    render(): any;
}
