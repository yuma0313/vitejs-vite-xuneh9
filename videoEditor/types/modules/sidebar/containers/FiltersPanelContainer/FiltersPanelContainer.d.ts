import { FilterDescription, EffectDescription } from "../../../../config/config";
export declare class FiltersPanelContainer {
    onClose?: () => void;
    filters: FilterDescription[];
    effects: EffectDescription[];
    selectedFiltersEffects: Record<string, string>;
    private disposeAutorun?;
    componentWillLoad(): void;
    componentWillUnmount(): void;
    handleSelectFilter(id: string): void;
    handleSelectEffect(id: string): Promise<void>;
    render(): any;
}
