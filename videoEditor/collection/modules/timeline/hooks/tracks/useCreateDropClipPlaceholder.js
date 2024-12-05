import { ApplicationStore } from "../../../../store/ApplicationStore";
import { convertTimeToUnits } from "../../../../utils/dom/convertTimeToUnits";
function useCreateDropClipPlaceholder(placeholder) {
    const handleDragEnter = (event) => {
        var _a, _b;
        event;
        const placeholderRef = placeholder === null || placeholder === void 0 ? void 0 : placeholder();
        if (!placeholderRef) {
            return;
        }
        const draggingObject = ApplicationStore.draggingObject;
        if (draggingObject == null) {
            return;
        }
        if (draggingObject.type !== "media" && draggingObject.type !== "text-preset") {
            return;
        }
        const duration = (_b = (_a = draggingObject === null || draggingObject === void 0 ? void 0 : draggingObject.payload) === null || _a === void 0 ? void 0 : _a.duration) !== null && _b !== void 0 ? _b : 1;
        const durationPx = convertTimeToUnits(duration);
        placeholderRef.style.visibility = "visible";
        placeholderRef.style.width = `${durationPx}px`;
    };
    const handleDragOver = (event) => {
        const placeholderRef = placeholder === null || placeholder === void 0 ? void 0 : placeholder();
        if (!placeholderRef) {
            return;
        }
        placeholderRef.style.left = `${event.offsetX}px`;
    };
    const handleDragLeave = (event) => {
        event;
        const placeholderRef = placeholder === null || placeholder === void 0 ? void 0 : placeholder();
        if (!placeholderRef) {
            return;
        }
        placeholderRef.style.visibility = "hidden";
    };
    return { onDragEnter: handleDragEnter, onDragOver: handleDragOver, onDragLeave: handleDragLeave };
}
export { useCreateDropClipPlaceholder };
