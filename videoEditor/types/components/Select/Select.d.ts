import { EventEmitter } from "../../stencil-public-runtime";
export type SelectVariant = "default" | "border";
export declare class Select {
    dropdownOpen: boolean;
    optionSelected?: EventEmitter<{
        label: string;
        value: string;
    }>;
    el?: HTMLElement;
    value?: string;
    label?: string;
    variant?: SelectVariant;
    selectStyle?: Record<string, string>;
    private disposeAutorun?;
    componentWillLoad(): void;
    toggleDropdown: (e: MouseEvent) => void;
    optionSelectHandler(): void;
    handleOutsideClick: (e: MouseEvent) => void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
