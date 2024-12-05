/**
 * Utility to create a high PPI (pixels per inch) canvas.
 * This function adjusts the canvas dimensions and scales the context to ensure high-resolution rendering on high-DPI displays.
 *
 * @param context - The 2D rendering context of the canvas.
 * @param width - The desired width of the canvas in CSS pixels.
 * @param height - The desired height of the canvas in CSS pixels.
 */
export declare const createHighPPICanvas: (context: CanvasRenderingContext2D, width: number, height: number) => void;
