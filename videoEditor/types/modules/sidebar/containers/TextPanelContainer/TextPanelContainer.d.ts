import { TitleDescription } from "../../../../config/config";
export declare class TextPanelContainer {
    data: TitleDescription[];
    componentWillLoad(): void;
    init(): void;
    handleDragStart: (payload: TitleDescription) => void;
    handleDragEnd: () => void;
    handleAddTitle: (title: TitleDescription) => Promise<void>;
    handleAddPlainText: () => Promise<void>;
    render(): any;
}
