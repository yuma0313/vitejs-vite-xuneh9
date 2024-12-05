export declare class ShortcutService {
    private static instance;
    private shortcuts;
    private constructor();
    static getInstance(): ShortcutService;
    init(): void;
    private initializeShortcuts;
    private handleKeyDown;
    private registerShortcut;
    handleUnfocusAction(): void;
    handleSplit(): void;
    handleDelete(): boolean | void;
    moveClipLeft(): void;
    destroy(): void;
}
