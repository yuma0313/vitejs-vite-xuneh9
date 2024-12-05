export function detectBrowser() {
    const userAgent = window.navigator.userAgent;
    const isOpera = Boolean(userAgent.match(/Opera/i));
    const isFirefox = Boolean(userAgent.match(/Firefox/i));
    const isChrome = Boolean(userAgent.match(/Chrome/i));
    const isSafari = Boolean(userAgent.match(/Safari/i) && !userAgent.match(/Chrome/i));
    return {
        isOpera,
        isFirefox,
        isChrome,
        isSafari,
    };
}
