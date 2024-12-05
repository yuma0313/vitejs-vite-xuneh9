import { Engine } from "@rendley/sdk";
import { RendleyStore } from "../../../store/RendleyStore";
import { RendleyService } from "../../../services/RendleyService";
const removeTransitionIfClipsAreNotAdjacent = (clipId, layerId, hasNearby) => {
    if (!hasNearby) {
        // remove transition if clips are not adjacent
        const transitionId = RendleyStore.layers[layerId].transitionIds.find((id) => {
            const transition = RendleyStore.transitions[id];
            return transition.startClipId === clipId || transition.endClipId === clipId;
        });
        if (transitionId) {
            const layer = Engine.getInstance().getTimeline().getLayerById(layerId);
            layer === null || layer === void 0 ? void 0 : layer.removeTransition(transitionId);
        }
    }
};
function numberToFixed(number) {
    return Number(number.toFixed(3));
}
export function updateAdjacency(currentLayerId) {
    var _a, _b;
    const clipsIds = (_b = (_a = RendleyService.getLayerById(currentLayerId)) === null || _a === void 0 ? void 0 : _a.clipsIds) !== null && _b !== void 0 ? _b : [];
    for (let i = 0; i < clipsIds.length; i++) {
        const previousClipId = clipsIds[i - 1];
        const currentClipId = clipsIds[i];
        const nextClipId = clipsIds[i + 1];
        const currentClip = RendleyService.getClipById(currentClipId);
        if (currentClip == null) {
            return;
        }
        let hasPredecessor = false;
        let hasSuccessor = false;
        const differenceThreshold = numberToFixed(1 / RendleyService.getFps());
        if (previousClipId != null) {
            const prevClip = RendleyService.getClipById(previousClipId);
            if (prevClip == null) {
                return;
            }
            const difference = numberToFixed(Math.abs(currentClip.getLeftBound() - prevClip.getRightBound()));
            hasPredecessor = difference < differenceThreshold;
        }
        if (nextClipId != null) {
            const nextClip = RendleyService.getClipById(nextClipId);
            if (nextClip == null) {
                return;
            }
            const difference = numberToFixed(Math.abs(nextClip.getLeftBound() - currentClip.getRightBound()));
            hasSuccessor = difference < differenceThreshold;
        }
        removeTransitionIfClipsAreNotAdjacent(currentClipId, currentLayerId, hasPredecessor || hasSuccessor);
        RendleyStore.updateClip(currentClipId, {
            hasPredecessor,
            hasSuccessor,
        });
    }
}
