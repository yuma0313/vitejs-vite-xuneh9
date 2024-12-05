export async function urlToFile(args) {
    const response = await fetch(args.url, { headers: args.headers });
    if (!response.ok)
        throw new Error("Network response was not ok.");
    const blob = await response.blob();
    return new File([blob], args.filename, { type: args.mimeType });
}
