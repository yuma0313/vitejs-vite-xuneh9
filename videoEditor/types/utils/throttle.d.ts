export declare function throttle<T extends (...args: any[]) => any>(func: T, wait: number): (...funcArgs: Parameters<T>) => void;
