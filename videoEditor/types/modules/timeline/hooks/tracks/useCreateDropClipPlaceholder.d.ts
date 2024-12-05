declare function useCreateDropClipPlaceholder(placeholder?: () => HTMLElement | null | undefined): {
    onDragEnter: (event: DragEvent) => void;
    onDragOver: (event: DragEvent) => void;
    onDragLeave: (event: DragEvent) => void;
};
export { useCreateDropClipPlaceholder };
