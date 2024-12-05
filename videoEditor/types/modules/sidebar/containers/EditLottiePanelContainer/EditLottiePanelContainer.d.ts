import { Property } from "@rendley/sdk";
export declare class EditLottiePanelContainer {
    clipId: string;
    properties: Property[];
    private clip;
    componentWillLoad(): void;
    watchClipChange(newClipId: string): void;
    handleSetProperty: (name: string, value: string) => void;
    render(): any;
}
