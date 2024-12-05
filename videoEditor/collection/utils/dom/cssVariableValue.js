import { getDomRoot } from "./getDomRoom";
/**
 * Gets the value of a CSS variable.
 * @param variableName - The name of the CSS variable (e.g., '--main-color').
 * @param element - The HTML element to get the styles from (defaults to document.documentElement).
 * @returns The value of the CSS variable.
 */
export const getCssVariableValue = (variableName, element = getDomRoot()) => {
    const styles = getComputedStyle(element);
    return styles.getPropertyValue(variableName).trim();
};
