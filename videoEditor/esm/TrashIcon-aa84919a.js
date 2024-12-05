import { h } from './index-f9f850bb.js';

function secondsToTimecode(seconds, forceHoursDisplay = false) {
    const hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    const minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    const wholeSeconds = Math.floor(seconds);
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = wholeSeconds.toString().padStart(2, "0");
    let timecode = `${formattedMinutes}:${formattedSeconds}`;
    if (hours > 0 || forceHoursDisplay) {
        const formattedHours = hours.toString().padStart(2, "0");
        timecode = `${formattedHours}:${timecode}`;
    }
    return timecode;
}

const TrashIcon = () => {
    return (h("svg", { width: "16", height: "16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        h("path", { d: "M2 4h12M12.667 4v9.333c0 .667-.667 1.334-1.334 1.334H4.667c-.667 0-1.334-.667-1.334-1.334V4M5.333 4V2.667C5.333 2 6 1.334 6.667 1.334h2.666c.667 0 1.334.666 1.334 1.333V4M6.667 7.333v4M9.333 7.333v4", stroke: "currentColor", "stroke-width": "1.25", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};

export { TrashIcon as T, secondsToTimecode as s };
