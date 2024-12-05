import { T as Tn } from './ApplicationStore-824bdfff.js';

class TimelineStoreInstance {
    constructor() {
        this.width = 0;
        this.tracksContainerWidth = 0;
        this.draggedClips = {};
        this.draggedTransitions = {};
        this.zoom = 1;
        Tn(this, {}, { deep: true });
    }
    setWidth(width) {
        this.width = width;
    }
    setTracksContainerWidth(width) {
        this.tracksContainerWidth = width;
    }
    setDraggingClip(clipId, isDragging) {
        if (isDragging) {
            this.draggedClips[clipId] = true;
        }
        else {
            delete this.draggedClips[clipId];
        }
    }
    setDraggingTransition(transitionId, isDragging) {
        if (isDragging) {
            this.draggedTransitions[transitionId] = true;
        }
        else {
            delete this.draggedTransitions[transitionId];
        }
    }
    setZoom(zoom) {
        if (zoom < 0.2) {
            this.zoom = 0.2;
        }
        else if (zoom > 2) {
            this.zoom = 2;
        }
        else {
            this.zoom = zoom;
        }
    }
    reset() {
        this.width = 0;
        this.tracksContainerWidth = 0;
        this.draggedClips = {};
        this.draggedTransitions = {};
        this.zoom = 1;
    }
}
const TimelineStore = new TimelineStoreInstance();

export { TimelineStore as T };
