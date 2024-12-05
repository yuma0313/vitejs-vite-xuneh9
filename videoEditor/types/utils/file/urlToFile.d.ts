export interface UrlToFileArgs {
    url: string;
    filename: string;
    mimeType: string;
    headers?: Record<string, string>;
}
export declare function urlToFile(args: UrlToFileArgs): Promise<File>;
