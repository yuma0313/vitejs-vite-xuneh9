import { h } from "@stencil/core";
export const XIcon = () => {
    return (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, h("path", { d: "M12 4L4 12", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }), h("path", { d: "M4 4L12 12", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};
