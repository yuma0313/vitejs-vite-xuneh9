export function calculateAspectRatioFit(elementWidth, elementHeight, parentWidth, parentHeight) {
    const aspectRatioElement = elementWidth / elementHeight;
    const aspectRatioParent = parentWidth / parentHeight;
    let newWidth, newHeight;
    if (aspectRatioElement > aspectRatioParent) {
        // The element is wider in proportion to its height than the parent.
        newWidth = parentWidth;
        newHeight = newWidth / aspectRatioElement;
    }
    else {
        // The element is taller in proportion to its width than the parent.
        newHeight = parentHeight;
        newWidth = newHeight * aspectRatioElement;
    }
    return { newWidth, newHeight };
}
