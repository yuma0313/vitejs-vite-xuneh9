import { JSX } from "../../stencil-public-runtime";
interface TabOptions {
    title: string;
    content: () => JSX.Element;
}
export declare class Tabs {
    activeTab: number;
    tabs: TabOptions[];
    setActiveTab(index: number): void;
    render(): any;
}
export {};
