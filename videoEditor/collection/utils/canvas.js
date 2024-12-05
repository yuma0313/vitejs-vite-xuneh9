/**
 * Utility to create a high PPI (pixels per inch) canvas.
 * This function adjusts the canvas dimensions and scales the context to ensure high-resolution rendering on high-DPI displays.
 *
 * @param context - The 2D rendering context of the canvas.
 * @param width - The desired width of the canvas in CSS pixels.
 * @param height - The desired height of the canvas in CSS pixels.
 */
export const createHighPPICanvas = (context, width, height) => {
    const devicePixelRatio = window.devicePixelRatio;
    const adjustedWidth = width * devicePixelRatio;
    const adjustedHeight = height * devicePixelRatio;
    context.canvas.width = adjustedWidth;
    context.canvas.height = adjustedHeight;
    context.canvas.style.width = `${width}px`;
    context.canvas.style.height = `${height}px`;
    context.scale(devicePixelRatio, devicePixelRatio);
};
