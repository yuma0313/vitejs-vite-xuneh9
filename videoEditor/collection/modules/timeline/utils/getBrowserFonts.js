export function getBrowserFonts() {
    const fontList = [
        "Arial",
        "Verdana",
        "Helvetica",
        "Tahoma",
        "Trebuchet MS",
        "Times New Roman",
        "Georgia",
        "Garamond",
        "Courier New",
        "Brush Script MT",
        "Noto Sans JP",
    ];
    const testString = "abcdefghijklmnopqrstuvwxyz0123456789";
    const baseWidths = {};
    const defaultFonts = [];
    // Create a span to measure the width of the font
    const span = document.createElement("span");
    span.style.fontSize = "72px";
    span.textContent = testString;
    document.body.appendChild(span);
    // Get the width of each font
    for (const font of fontList) {
        span.style.fontFamily = font;
        const width = span.offsetWidth;
        if (!baseWidths[font] || width !== baseWidths["monospace"]) {
            defaultFonts.push(font);
            baseWidths[font] = width;
        }
    }
    document.body.removeChild(span);
    return defaultFonts;
}
