import { h } from "@stencil/core";
export const SearchIcon = ({ size = 16 }) => {
    return (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-search" }, h("circle", { cx: "11", cy: "11", r: "8" }), h("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })));
};
