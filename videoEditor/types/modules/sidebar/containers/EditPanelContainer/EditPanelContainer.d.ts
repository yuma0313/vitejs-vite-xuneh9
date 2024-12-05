import { ClipTypeEnum } from "@rendley/sdk";
import { IReactionDisposer } from "mobx";
export declare class EditPanelContainer {
    onClose?: () => void;
    selectedClip: {
        id: string;
        type: ClipTypeEnum;
    } | null;
    disposeReaction?: IReactionDisposer;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
