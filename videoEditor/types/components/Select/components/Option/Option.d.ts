import { EventEmitter } from "../../../../stencil-public-runtime";
export declare class Option {
    index?: number;
    label: string;
    value: unknown;
    optionStyle?: Record<string, string>;
    optionSelected?: EventEmitter<{
        label: string;
        value: unknown;
    }>;
    selectOption: () => void;
    render(): any;
}
