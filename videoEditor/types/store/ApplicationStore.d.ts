import { EffectDescription, FilterDescription, TitleDescription, TransitionDescription } from "../config/config";
import { MediaData } from "./RendleyStore";
export type ThemeVariants = "dark" | "light" | "system";
type DraggingObjectPayload = {
    type: "media";
    payload: MediaData;
} | {
    type: "text-preset";
    payload: TitleDescription;
};
declare class ApplicationStoreInstance {
    isLoading: boolean;
    isRendering: boolean;
    selectedClipId: string | null;
    selectedTransitionId: string | null;
    transitions: Record<string, TransitionDescription>;
    filters: Record<string, FilterDescription>;
    effects: Record<string, EffectDescription>;
    draggingObject: DraggingObjectPayload | null;
    theme: ThemeVariants;
    filtersPath: string | null;
    effectsPath: string | null;
    transitionsPath: string | null;
    titlesPath: string | null;
    subtitleStylesPath: string | null;
    constructor();
    setIsLoading(value: boolean): void;
    setIsRendering(value: boolean): void;
    setSelectedClipId(id: string | null): void;
    setSelectedTransitionId(id: string | null): void;
    setDraggingObject(draggingObject: DraggingObjectPayload | null): void;
    setTheme(value?: ThemeVariants): void;
    setFiltersPath(path: string | null): void;
    setEffectsPath(path: string | null): void;
    setTransitionsPath(path: string | null): void;
    setSubtitleStylesPath(path: string | null): void;
    setTitlesPath(path: string | null): void;
    setTransitions(transitions: Record<string, TransitionDescription>): void;
    setFilters(filters: Record<string, FilterDescription>): void;
    setEffects(effects: Record<string, EffectDescription>): void;
    reset(): void;
}
declare const ApplicationStore: ApplicationStoreInstance;
export { ApplicationStore };
