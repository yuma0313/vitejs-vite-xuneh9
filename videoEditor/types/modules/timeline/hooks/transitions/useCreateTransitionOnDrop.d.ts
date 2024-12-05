import { Transition } from "@rendley/sdk";
interface useCreateTransitionOnDropOptions {
    transitionId: string;
    clipId: string;
    layerId: string;
}
declare function useCreateTransitionOnDrop(): (options: useCreateTransitionOnDropOptions) => Promise<Transition | null>;
export { useCreateTransitionOnDrop };
