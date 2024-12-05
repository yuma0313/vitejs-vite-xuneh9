export function onClickOutside(el, callback) {
    const handleCleanup = () => {
        document.removeEventListener("mousedown", handleClickOutside, true);
    };
    const handleClickOutside = (event) => {
        if (el && !el.contains(event.target)) {
            callback(event);
            handleCleanup();
        }
    };
    document.addEventListener("mousedown", handleClickOutside, true);
}
