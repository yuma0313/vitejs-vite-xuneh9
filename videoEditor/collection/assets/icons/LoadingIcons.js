import { h } from "@stencil/core";
export const LoadingIcon = () => {
    return (h("svg", { width: "16", height: "16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { "clip-path": "url(#a)", stroke: "#fff", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, h("path", { d: "M8 1.333V4M8 12v2.667M3.287 3.287l1.886 1.886M10.827 10.827l1.886 1.886M1.333 8H4M12 8h2.667M3.287 12.713l1.886-1.886M10.827 5.173l1.886-1.886" })), h("defs", null, h("clipPath", { id: "a" }, h("path", { fill: "#fff", d: "M0 0h16v16H0z" })))));
};
