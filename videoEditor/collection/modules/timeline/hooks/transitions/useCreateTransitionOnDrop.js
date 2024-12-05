import { RendleyStore } from "../../../../store/RendleyStore";
import { Engine, Transition } from "@rendley/sdk";
import { ApplicationStore } from "../../../../store/ApplicationStore";
const cachedShaders = new Map();
async function getTransitionShader(shaderUrl) {
    if (cachedShaders.has(shaderUrl)) {
        return cachedShaders.get(shaderUrl);
    }
    const shaderSrc = await fetch(shaderUrl).then((data) => data.text());
    cachedShaders.set(shaderUrl, shaderSrc);
    return shaderSrc;
}
function useCreateTransitionOnDrop() {
    return async (options) => {
        const { transitionId, clipId, layerId } = options;
        let startClipId = null;
        const endClipId = clipId;
        const clips = RendleyStore.layers[layerId].clipsIds;
        const endClipIndex = clips.findIndex((cv) => cv === endClipId);
        if (endClipIndex < 0) {
            return null;
        }
        startClipId = clips[endClipIndex - 1];
        const transition = ApplicationStore.transitions[transitionId];
        const shaderSrc = await getTransitionShader(transition.shaderUrl);
        if (shaderSrc == null) {
            return null;
        }
        const createdTransition = new Transition({
            startClipId,
            endClipId,
            inDuration: 1,
            outDuration: 1,
            name: transition.id,
            transitionSrc: shaderSrc,
        });
        const layer = Engine.getInstance().getTimeline().getLayerById(layerId);
        if (layer == null) {
            return null;
        }
        layer.addTransition(createdTransition);
        return createdTransition;
    };
}
export { useCreateTransitionOnDrop };
