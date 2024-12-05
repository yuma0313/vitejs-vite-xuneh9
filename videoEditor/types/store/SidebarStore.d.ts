declare class SidebarStoreInstance {
    activeItemKey: string | null;
    constructor();
    setActiveItemKey(id: string | null): void;
    reset(): void;
}
declare const SidebarStore: SidebarStoreInstance;
export { SidebarStore };
