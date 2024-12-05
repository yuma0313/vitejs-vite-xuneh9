import { p as promiseResolve, b as bootstrapLazy } from './index-f9f850bb.js';
export { s as setNonce } from './index-f9f850bb.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.20.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["ve-subtitles-panel-container",[[0,"ve-subtitles-panel-container",{"onClose":[16],"rerender":[32],"activeSubtitleIndex":[32]}]]],["ve-transitions-panel-container",[[0,"ve-transitions-panel-container",{"onClose":[16],"data":[32]}]]],["ve-filters-panel-container",[[0,"ve-filters-panel-container",{"onClose":[16],"selectedFiltersEffects":[32]}]]],["ve-apply-none-card",[[0,"ve-apply-none-card"]]],["ve-loading-spinner",[[0,"ve-loading-spinner"]]],["ve-missing-configuration-layout",[[0,"ve-missing-configuration-layout"]]],["ve-range",[[0,"ve-range"]]],["rendley-video-editor_57",[[1,"rendley-video-editor",{"theme":[1],"licensename":[1],"licensekey":[1],"pexelsapikey":[1],"giphyapikey":[1],"filtersPath":[1,"filters-path"],"effectsPath":[1,"effects-path"],"transitionsPath":[1,"transitions-path"],"titlesPath":[1,"titles-path"],"subtitlesStylesPath":[1,"subtitles-styles-path"],"isLoading":[32],"isRendering":[32],"getElement":[64],"getEngine":[64]}],[4,"ve-layout",{"onDropFiles":[16],"isResizing":[32],"isDragOverlayVisible":[32]},null,{"isResizing":["handleUpdateStyleWhenResizing"]}],[0,"ve-timeline",{"layersOrder":[32],"duration":[32],"zoom":[32],"playheadX":[32]},[[0,"scrollToPage","handleScrollToPage"]],{"duration":["durationUpdated"]}],[0,"ve-rendering-layout",{"progress":[32],"error":[32],"blobUrl":[32],"extension":[32]}],[0,"ve-composition",{"displayWidth":[32],"displayHeight":[32],"updateTimestamp":[32]},null,{"displayWidth":["handleCanvasResize"],"displayHeight":["handleCanvasResize"],"updateTimestamp":["handleCanvasResize"]}],[0,"ve-context-menu",{"position":[32],"options":[32]},[[4,"click","handleClickOutside"]]],[0,"ve-loading-layout"],[0,"ve-sidebar",{"activeItemKey":[32]}],[0,"ve-navbar",{"backgroundColor":[32],"theme":[32]}],[4,"ve-track",{"layerId":[1,"layer-id"],"temporaryTransitions":[32],"clipsIds":[32],"transitionIds":[32],"clips":[32]}],[0,"ve-controls",{"isPlaying":[32],"displayTime":[32],"selectedClipId":[32],"selectedTransitionId":[32]}],[2,"ve-canvas-time-ruler",{"duration":[32],"timelineZoom":[32],"scrollLeft":[32]},[[8,"tracksScrollLeft","handleTracksScrollLeft"]],{"duration":["handleStateChanged"],"scrollLeft":["handleStateChanged"],"timelineZoom":["handleStateChanged"]}],[0,"ve-drag-drop-overlay"],[0,"ve-drag-resize-rotate-container",{"selectedClipId":[32],"pixelRatio":[32]}],[0,"ve-empty-timeline-button",{"onUploadClip":[16],"isDraggingOver":[32]}],[0,"ve-logo",{"width":[2],"height":[2]}],[0,"ve-playhead",{"x":[32]},[[8,"seekingTimeRulerStart","handleSeekingTimeRulerStart"]],{"x":["handleFollowPlayhead"]}],[0,"ve-track-divider",{"index":[2],"onDropMediaClip":[16],"onDropTextClip":[16],"isDraggingOver":[32]}],[0,"ve-edit-panel-container",{"onClose":[16],"selectedClip":[32]}],[0,"ve-aspect-ratio-selector",{"modalOpen":[32],"display":[32],"options":[32],"selectedLabel":[32]}],[0,"ve-stock-panel-container",{"onClose":[16],"isLoading":[32],"hasError":[32],"images":[32],"texts":[32],"shapes":[32],"isImagesExtended":[32],"isTextsExtended":[32],"isShapesExtended":[32]}],[0,"ve-media-panel-container",{"onClose":[16],"data":[32]}],[0,"ve-text-panel-container",{"data":[32]}],[2,"ve-audio-clip",{"clipId":[1,"clip-id"],"layerId":[1,"layer-id"],"filename":[32],"thumbnail":[32]}],[2,"ve-image-clip",{"clipId":[1,"clip-id"],"layerId":[1,"layer-id"],"filename":[32],"thumbnail":[32]}],[2,"ve-lottie-clip",{"clipId":[1,"clip-id"],"layerId":[1,"layer-id"]}],[4,"ve-panel",{"isMedia":[4,"is-media"],"onClose":[16]}],[2,"ve-shape-clip",{"clipId":[1,"clip-id"],"layerId":[1,"layer-id"]}],[2,"ve-subtitles-clip",{"clipId":[1,"clip-id"],"layerId":[1,"layer-id"]}],[2,"ve-text-clip",{"clipId":[1,"clip-id"],"layerId":[1,"layer-id"],"text":[32]}],[2,"ve-video-clip",{"clipId":[1,"clip-id"],"layerId":[1,"layer-id"],"filename":[32],"thumbnail":[32]}],[4,"ve-paper",{"direction":[1]}],[0,"ve-transition",{"type":[1],"permanentTransition":[16],"temporaryTransition":[16],"isDraggingOver":[32],"isVisible":[32],"x":[32],"isSelected":[32]},null,{"temporaryTransition":["handleCalculatePosition"]}],[0,"ve-edit-text-panel",{"clipId":[1,"clip-id"],"selectedClip":[32],"style":[32],"text":[32]},null,{"clipId":["watchClipChange"]}],[0,"ve-aspect-ratio-form",{"onClose":[16],"onSubmitAspectRatio":[16],"widthError":[32],"heightError":[32]}],[0,"ve-edit-lottie-panel",{"clipId":[1,"clip-id"],"properties":[32]},null,{"clipId":["watchClipChange"]}],[0,"ve-media-card",{"mediaData":[16],"isLoaded":[4,"is-loaded"],"onClick":[16],"onDelete":[16]}],[0,"ve-modal",{"open":[4],"content":[16]}],[0,"ve-info-banner",{"title":[1],"message":[1],"icon":[16]}],[0,"ve-searchbar",{"onChangeText":[16]}],[0,"ve-color-input",{"label":[1],"color":[1],"onChangeColor":[16]}],[4,"ve-btn-group",{"label":[1]}],[0,"ve-textarea",{"placeholder":[1],"label":[1],"error":[1],"name":[1],"value":[1],"defaultValue":[1,"default-value"],"onChangeText":[16]}],[4,"ve-configuration-panel",{"title":[1]}],[4,"ve-draggable",{"isDraggable":[4,"is-draggable"],"payload":[16],"onDragStart":[16],"onDragEnd":[16]}],[4,"ve-portal"],[1,"ve-select",{"value":[1],"label":[1],"variant":[1],"selectStyle":[16],"dropdownOpen":[32]},[[0,"optionSelected","optionSelectHandler"]]],[0,"ve-color-picker",{"color":[1],"onChangeColor":[16]}],[4,"ve-option",{"index":[2],"label":[1],"value":[16],"optionStyle":[16]}],[0,"ve-effect-showcase-card",{"imageUrl":[1,"image-url"],"videoUrl":[1,"video-url"],"name":[1],"tooltip":[1],"onDelete":[16],"isSelected":[4,"is-selected"],"onMouseDown":[16],"isHovering":[32],"imageLoaded":[32],"videoLoaded":[32],"isLoading":[32]}],[0,"ve-input",{"type":[1],"placeholder":[1],"label":[1],"error":[1],"name":[1],"value":[1],"onChangeText":[16]}],[4,"ve-panel-grid-list-section",{"title":[1],"data":[16],"class":[1],"isLoading":[4,"is-loading"],"columns":[2],"renderFirst":[16],"renderCard":[16],"visibleItemsCount":[2,"visible-items-count"],"isExtended":[4,"is-extended"],"onExtend":[16]}],[4,"ve-card-loading-overlay"],[4,"ve-clip",{"clipId":[1,"clip-id"],"layerId":[1,"layer-id"],"filename":[1],"thumbnail":[1],"isResizeEnabled":[4,"is-resize-enabled"],"startTime":[32],"duration":[32],"leftTrim":[32],"rightTrim":[32],"trimmedDuration":[32],"width":[32],"x":[32],"y":[32],"isFocused":[32],"hasSuccessor":[32],"hasPredecessor":[32]},null,{"hasPredecessor":["handleUpdateStyles"],"hasSuccessor":["handleUpdateStyles"],"width":["handleUpdateStyles"],"x":["handleUpdateStyles"],"y":["handleUpdateStyles"],"startTime":["handleUpdateClip"],"leftTrim":["handleUpdateClip"],"trimmedDuration":["handleUpdateClip"],"duration":["handleUpdateClip"],"isFocused":["handleFocusChange"]}],[0,"ve-placeholder-panel-card"],[4,"ve-label",{"error":[4]}],[4,"ve-btn",{"variant":[1],"disabled":[4],"class":[1]}]]],["ve-no-subtitles-section_5",[[0,"ve-subtitles-styles-container",{"modes":[32],"animations":[32],"styles":[32],"selectedStyle":[32],"selectedAnimation":[32],"selectedMode":[32]}],[0,"ve-subtitle-row",{"subtitle":[16],"isActive":[4,"is-active"],"onChangeIn":[16],"onChangeOut":[16],"onChangeText":[16],"onDelete":[16],"isEditing":[32],"tempInValue":[32],"tempOutValue":[32]}],[0,"ve-no-subtitles-section",{"onImportSrt":[16],"onAdd":[16]}],[0,"ve-subtitle-row-divider",{"onAdd":[16],"onMerge":[16]}],[0,"ve-tabs",{"tabs":[16],"activeTab":[32]}]]]], options);
});
