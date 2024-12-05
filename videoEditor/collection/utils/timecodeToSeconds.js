export function timecodeToSeconds(timecode) {
    const parts = timecode.split(":");
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    if (parts.length === 3) {
        // Format HH:MM:SS
        hours = parseInt(parts[0], 10);
        minutes = parseInt(parts[1], 10);
        seconds = parseFloat(parts[2]);
    }
    else if (parts.length === 2) {
        // Format MM:SS
        minutes = parseInt(parts[0], 10);
        seconds = parseFloat(parts[1]);
    }
    else {
        return null;
    }
    // Convert the parsed components to total seconds
    return hours * 3600 + minutes * 60 + seconds;
}
