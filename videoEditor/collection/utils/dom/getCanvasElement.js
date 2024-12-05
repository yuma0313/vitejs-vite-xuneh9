import { CANVAS_ID } from "../../config/config";
import { getShadowRoot } from "./getShadowRoot";
export function getCanvasElement() {
    return getShadowRoot().getElementById(CANVAS_ID);
}
