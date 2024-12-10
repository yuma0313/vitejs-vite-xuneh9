const PEXELS_BASE_URL = "https://api.pexels.com/v1";
const GIPHY_BASE_URL = "https://api.giphy.com/v1";
const PER_PAGE_LIMIT = 14;
export class StockMediaService {
    constructor() {
        // 新しいGCS関連の設定を追加
        this.gcsBaseUrl = "https://storage.googleapis.com/revot-public-object/rendly-default-files";
    }
    static getInstance() {
        if (!StockMediaService.instance) {
            StockMediaService.instance = new StockMediaService();
        }
        return StockMediaService.instance;
    }
    init(options) {
        this.pexelsApiKey = options.pexelsApiKey;
        this.giphyApiKey = options.giphyApiKey;
        if (options.gcsBaseUrl) {
            this.gcsBaseUrl = options.gcsBaseUrl;
        }
    }
    async getGCSImages() {
        try {
            // 矢印の色と対応する画像番号の範囲を定義
            const arrowRanges = {
                yellow: { start: 1, end: 8 },
                blue: { start: 9, end: 16 },
                red: { start: 17, end: 24 },
                gray: { start: 25, end: 32 },
                black: { start: 33, end: 40 },
                white: { start: 41, end: 48 },
            };
            const photos = [];
            // 各色のフォルダから画像を取得
            for (const [color, range] of Object.entries(arrowRanges)) {
                for (let i = range.start; i <= range.end; i++) {
                    const imageUrl = `${this.gcsBaseUrl}/arrows/${color}/Arrow ${i}.webp`;
                    photos.push({
                        src: {
                            original: imageUrl,
                            large2x: imageUrl,
                            large: imageUrl,
                            medium: imageUrl,
                            small: imageUrl,
                            portrait: imageUrl,
                            landscape: imageUrl,
                            tiny: imageUrl,
                        },
                        id: i,
                        width: 800,
                        height: 600,
                        photographer: "GCS",
                        photographer_url: "",
                        photographer_id: 1,
                        avg_color: "#FFFFFF",
                        url: imageUrl,
                        alt: `${color} arrow ${i}`,
                        liked: false,
                    });
                }
            }
            return {
                page: 1,
                per_page: photos.length,
                photos: photos,
                next_page: "",
            };
        }
        catch (error) {
            console.error("GCS画像の取得に失敗:", error);
            return {
                page: 1,
                per_page: 0,
                photos: [],
                next_page: "",
            };
        }
    }
    async getGCSTexts() {
        try {
            // テキスト画像の名前を定義
            const textNames = ["alert", "check", "confirm", "danger", "need-confirmation", "ng", "ok", "point", "safety"];
            const photos = [];
            // 各テキスト画像を取得
            textNames.forEach((name, index) => {
                const imageUrl = `${this.gcsBaseUrl}/texts/${name}.webp`;
                photos.push({
                    src: {
                        original: imageUrl,
                        large2x: imageUrl,
                        large: imageUrl,
                        medium: imageUrl,
                        small: imageUrl,
                        portrait: imageUrl,
                        landscape: imageUrl,
                        tiny: imageUrl,
                    },
                    id: index + 1,
                    width: 800,
                    height: 600,
                    photographer: "GCS",
                    photographer_url: "",
                    photographer_id: 1,
                    avg_color: "#FFFFFF",
                    url: imageUrl,
                    alt: name,
                    liked: false,
                });
            });
            return {
                page: 1,
                per_page: photos.length,
                photos: photos,
                next_page: "",
            };
        }
        catch (error) {
            console.error("GCS texts画像の取得に失敗:", error);
            return {
                page: 1,
                per_page: 0,
                photos: [],
                next_page: "",
            };
        }
    }
    async getGCSShapes() {
        try {
            // 色の定義
            const colors = ["yellow", "blue", "red", "gray", "black", "white"];
            // シェイプの種類を定義
            const shapeTypes = ["Ellipse", "Group", "Polygon", "Rectangle"];
            const photos = [];
            let id = 1;
            // 各色のフォルダから画像を取得
            for (const color of colors) {
                for (const shape of shapeTypes) {
                    const imageUrl = `${this.gcsBaseUrl}/shapes/${color}/${shape}.webp`;
                    photos.push({
                        src: {
                            original: imageUrl,
                            large2x: imageUrl,
                            large: imageUrl,
                            medium: imageUrl,
                            small: imageUrl,
                            portrait: imageUrl,
                            landscape: imageUrl,
                            tiny: imageUrl,
                        },
                        id: id++,
                        width: 800,
                        height: 600,
                        photographer: "GCS",
                        photographer_url: "",
                        photographer_id: 1,
                        avg_color: "#FFFFFF",
                        url: imageUrl,
                        alt: `${color} ${shape.toLowerCase()}`,
                        liked: false,
                    });
                }
            }
            return {
                page: 1,
                per_page: photos.length,
                photos: photos,
                next_page: "",
            };
        }
        catch (error) {
            console.error("GCS shapes画像の取得に失敗:", error);
            return {
                page: 1,
                per_page: 0,
                photos: [],
                next_page: "",
            };
        }
    }
    hasApiKeys() {
        return !!this.pexelsApiKey && !!this.giphyApiKey;
    }
    getCurratedImages() {
        return this.pexelsFetcher(`${PEXELS_BASE_URL}/curated?per_page=${PER_PAGE_LIMIT}`);
    }
    getCurratedVideos() {
        return this.pexelsFetcher(`${PEXELS_BASE_URL}/videos/popular?per_page=${PER_PAGE_LIMIT}`);
    }
    getCurratedGifs() {
        return this.giphyFetcher(`${GIPHY_BASE_URL}/gifs/trending?rating=g`);
    }
    getCurratedStickers() {
        return this.giphyFetcher(`${GIPHY_BASE_URL}/stickers/trending?rating=g`);
    }
    searchImages(query) {
        if (!query) {
            return this.getCurratedImages();
        }
        return this.pexelsFetcher(`${PEXELS_BASE_URL}/search?query=${query}&per_page=${PER_PAGE_LIMIT}`);
    }
    searchVideos(query) {
        if (!query) {
            return this.getCurratedVideos();
        }
        return this.pexelsFetcher(`${PEXELS_BASE_URL}/videos/search?query=${query}&per_page=${PER_PAGE_LIMIT}`);
    }
    searchGifs(query) {
        if (!query) {
            return this.getCurratedGifs();
        }
        return this.giphyFetcher(`${GIPHY_BASE_URL}/gifs/search?q=${query}`);
    }
    searchStickers(query) {
        if (!query) {
            return this.getCurratedStickers();
        }
        return this.giphyFetcher(`${GIPHY_BASE_URL}/stickers/search?q=${query}`);
    }
    pexelsFetcher(url) {
        return fetch(url, {
            headers: {
                Authorization: `${this.pexelsApiKey}`,
                "Content-Type": "application/json",
            },
        }).then((response) => response.json());
    }
    giphyFetcher(url) {
        return fetch(`${url}&api_key=${this.giphyApiKey}&limit=${PER_PAGE_LIMIT}`).then((response) => response.json());
    }
    destroy() {
        this.pexelsApiKey = undefined;
        this.giphyApiKey = undefined;
        StockMediaService.instance = null;
    }
}
StockMediaService.instance = null;
