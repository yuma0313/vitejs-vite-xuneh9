export function throttle(func, wait) {
    let timeout = null;
    let lastCallTime = null;
    const throttled = (...args) => {
        const now = Date.now();
        const timeSinceLastCall = now - (lastCallTime !== null && lastCallTime !== void 0 ? lastCallTime : 0);
        const callLater = () => {
            lastCallTime = Date.now();
            timeout = null;
            func(...args);
        };
        if (timeSinceLastCall >= wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            lastCallTime = now;
            func(...args);
        }
        else if (!timeout) {
            timeout = setTimeout(callLater, wait - timeSinceLastCall);
        }
    };
    return throttled;
}
