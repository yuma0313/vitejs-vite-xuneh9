declare class WindowStoreInstance {
    resolution: [number, number];
    canvasResolution: [number, number];
    constructor();
    setResolution(resolution: [number, number]): void;
    setCanvasResolution(resolution: [number, number]): void;
    reset(): void;
}
declare const WindowStore: WindowStoreInstance;
export { WindowStore };
