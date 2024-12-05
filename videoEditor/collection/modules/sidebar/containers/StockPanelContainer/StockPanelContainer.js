import { Fragment, h } from "@stencil/core";
import { StockMediaService } from "../../../../services/StockMediaService";
import { RendleyService } from "../../../../services/RendleyService";
import { debounce } from "../../../../utils/debounce";
import { RendleyStore } from "../../../../store/RendleyStore";
import { t } from "../../../../utils/translation";
import { SearchIcon } from "../../../../assets/icons/SearchIcon";
export class StockPanelContainer {
    constructor() {
        this.StockMediaService = StockMediaService.getInstance();
        // 初期ロード用の新しいメソッドを追加
        this.handleInitialLoad = async () => {
            this.isLoading = true;
            this.hasError = false;
            try {
                // 各カテゴリーのGCS画像を取得
                const [arrowsResponse, textsResponse, shapesResponse] = await Promise.all([
                    this.StockMediaService.getGCSImages(),
                    this.StockMediaService.getGCSTexts(),
                    this.StockMediaService.getGCSShapes(),
                ]);
                this.images = arrowsResponse.photos;
                this.texts = textsResponse.photos;
                this.shapes = shapesResponse.photos;
            }
            catch (_a) {
                this.hasError = true;
            }
            finally {
                this.isLoading = false;
            }
        };
        this.handleSelectImage = (data) => {
            return this.handleClickStock(data.src.original);
        };
        this.handleSelectVideo = (data) => {
            var _a, _b;
            let videoUrl = data.video_files[0].link;
            let mimeType = data.video_files[0].file_type;
            let maxVideoResolution = -1;
            const canvasResolution = RendleyStore.display.width * RendleyStore.display.height;
            // add videos that fit into the canvas
            for (let i = 0; i < data.video_files.length; i++) {
                const videoResolution = ((_a = data.video_files[i].width) !== null && _a !== void 0 ? _a : 1) * ((_b = data.video_files[i].height) !== null && _b !== void 0 ? _b : 1);
                if (videoResolution > maxVideoResolution && videoResolution <= canvasResolution) {
                    maxVideoResolution = videoResolution;
                    videoUrl = data.video_files[i].link;
                    mimeType = data.video_files[i].file_type;
                }
            }
            return this.handleClickStock(videoUrl, mimeType);
        };
        this.handleSelectGif = (data) => {
            return this.handleClickStock(data.images.original.url, "image/gif");
        };
        this.handleClickStock = async (url, mimeType) => {
            var _a;
            try {
                const mediaDataId = await RendleyService.addMediaToGallery(url, mimeType);
                if (mediaDataId == null) {
                    return;
                }
                (_a = RendleyService.getMediaById(mediaDataId)) === null || _a === void 0 ? void 0 : _a.setPermanentUrl(url);
                const layer = RendleyService.createLayer();
                await RendleyService.addMediaToLayer(layer.id, mediaDataId);
            }
            catch (_b) {
                console.log("cannot add stock to canvas");
            }
        };
        this.handleDebounceSearch = debounce((text) => {
            return this.handleSearch(text);
        }, 1000);
        this.handleSearch = async (text) => {
            this.isLoading = true;
            this.hasError = false;
            try {
                // 検索文字列を小文字に変換して比較
                const searchTerm = text.toLowerCase();
                // 各カテゴリーのGCS画像を取得して検索
                const [arrowsResponse, textsResponse, shapesResponse] = await Promise.all([
                    this.StockMediaService.getGCSImages(),
                    this.StockMediaService.getGCSTexts(),
                    this.StockMediaService.getGCSShapes(),
                ]);
                // 各カテゴリーの画像をフィルタリング
                this.images = arrowsResponse.photos.filter((photo) => photo.alt.toLowerCase().includes(searchTerm));
                this.texts = textsResponse.photos.filter((photo) => photo.alt.toLowerCase().includes(searchTerm));
                this.shapes = shapesResponse.photos.filter((photo) => photo.alt.toLowerCase().includes(searchTerm));
            }
            catch (_a) {
                this.hasError = true;
            }
            finally {
                this.isLoading = false;
            }
        };
        this.handleExtendImages = () => {
            this.isImagesExtended = true;
        };
        this.handleExtendTexts = () => {
            this.isTextsExtended = true;
        };
        this.handleExtendShapes = () => {
            this.isShapesExtended = true;
        };
        this.onClose = undefined;
        this.isLoading = true;
        this.hasError = false;
        this.images = [];
        this.texts = [];
        this.shapes = [];
        this.isImagesExtended = false;
        this.isTextsExtended = false;
        this.isShapesExtended = false;
    }
    componentWillLoad() {
        // 空文字列での検索を呼び出す代わりに、直接GCS画像を取得
        this.handleInitialLoad();
    }
    render() {
        const isResultEmpty = !this.images.length && !this.texts.length && !this.shapes.length;
        return (h("div", { key: '4ac2f9dfe6f39c412bbfceab325cda4548490969' }, h("ve-searchbar", { key: 'd6b900f150920c65fbf7c92c42a38fa23006a0f3', onChangeText: this.handleDebounceSearch }), !this.isLoading && isResultEmpty ? (h("ve-info-banner", { icon: h(SearchIcon, { size: 50 }), title: "No Results Found", message: "Oops, we couldn\u2019t find any matches. Try adjusting the search criteria or keywords to find what you're looking for." })) : (h(Fragment, null, h("div", { class: "spacer-2" }), h("ve-panel-grid-list-section", { title: t("sidebar.stockTab.arrows", "矢印"), isLoading: this.isLoading, data: this.images, isExtended: this.isImagesExtended, renderCard: (data) => (h("ve-effect-showcase-card", { imageUrl: data.src.medium, onMouseDown: () => this.handleSelectImage(data) })), onExtend: this.handleExtendImages }), h("div", { class: "spacer-2" }), h("ve-panel-grid-list-section", { title: t("sidebar.stockTab.texts", "テキスト"), isLoading: this.isLoading, data: this.texts, isExtended: this.isTextsExtended, renderCard: (data) => (h("ve-effect-showcase-card", { imageUrl: data.src.medium, onMouseDown: () => this.handleSelectImage(data) })), onExtend: this.handleExtendTexts }), h("div", { class: "spacer-2" }), h("ve-panel-grid-list-section", { title: t("sidebar.stockTab.shapes", "図形"), isLoading: this.isLoading, data: this.shapes, isExtended: this.isShapesExtended, renderCard: (data) => (h("ve-effect-showcase-card", { imageUrl: data.src.medium, onMouseDown: () => this.handleSelectImage(data) })), onExtend: this.handleExtendShapes })))));
    }
    static get is() { return "ve-stock-panel-container"; }
    static get originalStyleUrls() {
        return {
            "$": ["./StockPanelContainer.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["StockPanelContainer.styles.css"]
        };
    }
    static get properties() {
        return {
            "onClose": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "(() => void) | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "hasError": {},
            "images": {},
            "texts": {},
            "shapes": {},
            "isImagesExtended": {},
            "isTextsExtended": {},
            "isShapesExtended": {}
        };
    }
}
