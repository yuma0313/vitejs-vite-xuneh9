import { TIMELINE_RULER_TICK_WIDTH_PX } from "../../../../../config/config";
import { secondsToTimecode } from "../../../../../utils/secondsToTimecode";
const TICK_LINE_WIDTH = 1;
const MINOR_TICK_VERTICAL_OFFSET = 28;
const MINOR_TICK_HEIGHT_PX = 4;
const MEDIUM_TICK_VERTICAL_OFFSET = 24;
const MEDIUM_TICK_HEIGHT_PX = 8;
const MAJOR_TICK_VERTICAL_OFFSET = 20;
const MAJOR_TICK_HEIGHT_PX = 12;
const TIME_LABEL_VERTICAL_OFFSET = 14;
export const drawCanvasTimelineRuler = (context, duration, options) => {
    const height = context.canvas.height / window.devicePixelRatio;
    const width = context.canvas.width / window.devicePixelRatio;
    const tickWidth = TIMELINE_RULER_TICK_WIDTH_PX * options.zoom;
    initCanvas(context, width, height, { fillColor: options.fillColor, scrollOffset: options.scrollOffset });
    const startMajorTick = Math.floor(options.scrollOffset / tickWidth);
    const startFrom = startMajorTick * tickWidth;
    const nrMajorTicks = Math.ceil(width / tickWidth) + 1;
    // Draw Major lines
    context.beginPath();
    for (let x = 0; x < nrMajorTicks; x++) {
        context.moveTo(x * tickWidth + startFrom, MAJOR_TICK_VERTICAL_OFFSET);
        context.lineTo(x * tickWidth + startFrom, MAJOR_TICK_VERTICAL_OFFSET + MAJOR_TICK_HEIGHT_PX);
    }
    //context.stroke();
    // Draw Minor lines
    const minorTicksPerMajorTick = tickWidth > 80 ? 10 : 5;
    const minorTickWidth = tickWidth / minorTicksPerMajorTick;
    const nrMinorTicks = Math.ceil(width / minorTickWidth) + minorTicksPerMajorTick; // We add one chunk to fill the right side because we use startFrom as a full majorTick offset to fill any space to the left
    //context.beginPath();
    for (let x = 0; x < nrMinorTicks; x++) {
        if (x % minorTicksPerMajorTick === 0) {
            continue;
        }
        // This will draw a bigger small tick in the middle where it is divisible by 2 (ex: 10/2 = 5 OK, 5/2 = 2.5 not OK)
        if (x % (minorTicksPerMajorTick / 2) === 0) {
            context.moveTo(x * minorTickWidth + startFrom, MEDIUM_TICK_VERTICAL_OFFSET);
            context.lineTo(x * minorTickWidth + startFrom, MEDIUM_TICK_VERTICAL_OFFSET + MEDIUM_TICK_HEIGHT_PX);
        }
        else {
            context.moveTo(x * minorTickWidth + startFrom, MINOR_TICK_VERTICAL_OFFSET);
            context.lineTo(x * minorTickWidth + startFrom, MINOR_TICK_VERTICAL_OFFSET + MINOR_TICK_HEIGHT_PX);
        }
    }
    context.stroke();
    // Draw Time Labels
    let timeLabelAlign;
    for (let x = 0; x < nrMajorTicks; x++) {
        const absoluteIndex = x + startMajorTick;
        // Skip ticks that are too small
        if (tickWidth < 50 && absoluteIndex % 2 != 0)
            continue;
        if (tickWidth < 25 && absoluteIndex % 4 != 0)
            continue;
        const formattedTime = secondsToTimecode(absoluteIndex);
        // Pick an alignment based on the position
        if (absoluteIndex === 0) {
            timeLabelAlign = "left";
        }
        else if ((absoluteIndex > duration || Math.abs(absoluteIndex - duration) < 0.2) && // Check if it's the tick past duration and if it's close enough to the end
            x * tickWidth + startFrom - options.scrollOffset > width - 15.0 // Check if it's near the edge
        ) {
            timeLabelAlign = "right";
        }
        else {
            timeLabelAlign = "center";
        }
        drawTimeLabel(context, x * tickWidth + startFrom, formattedTime, timeLabelAlign);
    }
    context.restore();
};
const initCanvas = (context, width, height, options) => {
    context.clearRect(0, 0, width, height);
    context.strokeStyle = options.fillColor;
    context.fillStyle = options.fillColor;
    context.lineWidth = TICK_LINE_WIDTH;
    context.textAlign = "center";
    context.save();
    context.translate(-options.scrollOffset, 0);
};
const drawTimeLabel = (context, x, time, align) => {
    context.textAlign = align;
    context.fillText(time, x, TIME_LABEL_VERTICAL_OFFSET);
};
