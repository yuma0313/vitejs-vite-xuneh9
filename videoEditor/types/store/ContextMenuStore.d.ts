import { ContextMenuOption } from "../components/ContextMenu/ContextMenu";
interface ContextMenuPosition {
    x: number;
    y: number;
}
declare class ContextMenuStoreInstance {
    position: ContextMenuPosition | null;
    options: ContextMenuOption[];
    constructor();
    show(x: number, y: number, options: ContextMenuOption[]): void;
    hide(): void;
    reset(): void;
}
declare const ContextMenuStore: ContextMenuStoreInstance;
export { ContextMenuStore };
