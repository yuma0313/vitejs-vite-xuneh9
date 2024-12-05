import { h } from "@stencil/core";
export const CirclePlus = () => {
    return (h("svg", { width: "12", height: "12", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { "clip-path": "url(#a)", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }, h("path", { d: "M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10ZM4 6h4M6 4v4" })), h("defs", null, h("clipPath", { id: "a" }, h("path", { fill: "currentColor", d: "M0 0h12v12H0z" })))));
};
