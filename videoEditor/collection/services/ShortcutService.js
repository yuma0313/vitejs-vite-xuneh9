import { ContextMenuStore } from "../store/ContextMenuStore";
import { RendleyService } from "./RendleyService";
export class ShortcutService {
    constructor() {
        this.shortcuts = new Map();
    }
    static getInstance() {
        if (!ShortcutService.instance) {
            ShortcutService.instance = new ShortcutService();
        }
        return ShortcutService.instance;
    }
    init() {
        this.initializeShortcuts();
        document.addEventListener("keydown", this.handleKeyDown.bind(this));
    }
    initializeShortcuts() {
        this.registerShortcut(["KeyS"], this.handleSplit);
        this.registerShortcut(["Delete"], this.handleDelete);
        this.registerShortcut(["Backspace"], this.handleDelete);
        this.registerShortcut(["ctrl", "Home"], this.moveClipLeft);
        this.registerShortcut(["Escape"], this.handleUnfocusAction);
    }
    handleKeyDown(event) {
        const actualTarget = event.composedPath()[0];
        if (actualTarget instanceof HTMLInputElement || actualTarget instanceof HTMLTextAreaElement) {
            return;
        }
        const combination = [
            event.ctrlKey ? "ctrl" : "",
            event.altKey ? "alt" : "",
            event.shiftKey ? "shift" : "",
            event.code,
        ]
            .filter(Boolean)
            .sort()
            .join("+");
        //console.log(combination);
        const action = this.shortcuts.get(combination);
        if (action) {
            action(event);
            event.preventDefault();
        }
    }
    registerShortcut(keys, action) {
        const keyCombination = keys.sort().join("+");
        this.shortcuts.set(keyCombination, action);
    }
    handleUnfocusAction() {
        ContextMenuStore.hide();
    }
    handleSplit() {
        return RendleyService.splitAtCurrentTime();
    }
    handleDelete() {
        return RendleyService.deleteAtCurrentTime();
    }
    moveClipLeft() {
        return RendleyService.moveClipLeft();
    }
    destroy() {
        document.removeEventListener("keydown", this.handleKeyDown.bind(this));
        this.shortcuts.clear();
        ShortcutService.instance = null;
    }
}
ShortcutService.instance = null;
