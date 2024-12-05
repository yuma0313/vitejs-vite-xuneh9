export function secondsToTimecode(seconds, forceHoursDisplay = false) {
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
