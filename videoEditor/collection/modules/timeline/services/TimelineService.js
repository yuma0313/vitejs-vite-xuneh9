import { RendleyStore } from "../../../store/RendleyStore";
import { TimelineStore } from "../../../store/TimelineStore";
export class TimelineService {
    static getTemporaryTransitions(layerId) {
        const layer = RendleyStore.layers[layerId];
        if (layer == null) {
            return [];
        }
        const draggedTransitions = Object.keys(TimelineStore.draggedTransitions);
        if (draggedTransitions.length == 0) {
            return [];
        }
        const clips = RendleyStore.clips;
        const transitions = RendleyStore.transitions;
        // the transition is always going to be rendered at the end clip
        // set it in the map for faster lookup
        const transitionsMap = Object.values(transitions).reduce((acc, cv) => {
            acc[cv.endClipId] = {};
            return acc;
        }, {});
        return layer.clipsIds.reduce((acc, cv) => {
            const clip = clips[cv];
            // if it's a clip that has a predecessor, it's going to be rendered at the start clip
            if (clip.hasPredecessor && !transitionsMap[cv]) {
                const startTime = clip.startTime + clip.leftTrim;
                acc.push({ layerId: layer.id, clipId: clip.id, startTime });
            }
            return acc;
        }, []);
    }
}
