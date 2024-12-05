import { RendleyStore } from "../../store/RendleyStore";
import { TimelineStore } from "../../store/TimelineStore";
export function convertUnitsToTime(time) {
    const timelineWidth = TimelineStore.width;
    const timelineZoom = TimelineStore.zoom;
    const duration = RendleyStore.duration;
    const ratio = (timelineWidth / duration) * timelineZoom;
    return time / ratio;
}
