import { TransitionDescription } from "../../../../config/config";
export declare class TransitionsPanelContainer {
    onClose?: () => void;
    data: TransitionDescription[];
    componentWillLoad(): void;
    handleDragStart: (transitionId: string) => void;
    handleDragEnd: (transitionId: string) => void;
    render(): any;
}
