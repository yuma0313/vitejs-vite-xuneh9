import en from "../locale/en.json";
export function t(keyPath, defaultValue = "") {
    const keys = keyPath.split(".");
    let result = en;
    for (const key of keys) {
        if (result && key in result) {
            result = result[key];
        }
        else {
            return defaultValue;
        }
    }
    return typeof result === "string" ? result : defaultValue;
}
