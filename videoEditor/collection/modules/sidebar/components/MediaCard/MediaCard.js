import { h } from "@stencil/core";
import clsx from "clsx";
import { LoadingIcon } from "../../../../assets/icons/LoadingIcons";
import { XIcon } from "../../../../assets/icons/XIcon";
import { ApplicationStore } from "../../../../store/ApplicationStore";
export class MediaCard {
    constructor() {
        this.handleDelete = (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.onDelete();
        };
        this.handleDragStart = () => {
            ApplicationStore.setDraggingObject({ type: "media", payload: this.mediaData });
        };
        this.handleDragEnd = () => {
            ApplicationStore.setDraggingObject(null);
        };
        this.mediaData = undefined;
        this.isLoaded = false;
        this.onClick = undefined;
        this.onDelete = undefined;
    }
    render() {
        return (h("div", { key: '79171db528288b0fee0349a1a01f8b673b8e5e5e', class: "media-card", onClick: this.onClick }, h("div", { key: '01c58a397332c0f20def6de1029bad5b293fa1a3', class: "media-card__delete", onClick: this.handleDelete }, h("div", { key: '4ecd3d3c693bf1c3ff871c4be0ec1d89f38c8052', class: "media-card__delete-btn" }, h(XIcon, { key: 'd06dc1baa8871670d0f9d5b89037b67933bf9751' }))), h("ve-draggable", { key: '3ca76233d874885e4e70674ad0fe4621f69f61ea', isDraggable: this.isLoaded, payload: { type: "media", mediaId: this.mediaData.id }, onDragStart: this.handleDragStart, onDragEnd: this.handleDragEnd }, h("div", { key: '565cf6c8e233b601cfc149414061652c7b238e74', class: "thumbnail" }, this.mediaData.thumbnail && h("img", { key: '2ceea979ba931edc401f27638692e87d1e361884', class: "thumbnail__image", src: this.mediaData.thumbnail }), !this.isLoaded && (h("div", { key: '48ad189c73e0c5ff9188f931ad15c94737fe3a70', class: "thumbnail__overlay thumbnail__overlay--static" }, h("div", { key: 'a30b041a225165d1b7b1ce9ad87c92057fb3ec1f', class: "loading-icon", title: "Loading" }, h(LoadingIcon, { key: 'bc62168c377b7f820e55ea7a0ed87d6be71c8ae5' })))))), h("p", { key: '124a0a3e4890978b07e31b3e8c4b50ae849662cc', class: clsx("media-card__title", {
                "media-card__title--loading": !this.isLoaded,
            }), title: this.mediaData.filename }, this.mediaData.filename)));
    }
    static get is() { return "ve-media-card"; }
    static get originalStyleUrls() {
        return {
            "$": ["MediaCard.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["MediaCard.styles.css"]
        };
    }
    static get properties() {
        return {
            "mediaData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "MediaData",
                    "resolved": "MediaData",
                    "references": {
                        "MediaData": {
                            "location": "import",
                            "path": "../../../../store/RendleyStore",
                            "id": "src/store/RendleyStore.ts::MediaData"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "isLoaded": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is-loaded",
                "reflect": false,
                "defaultValue": "false"
            },
            "onClick": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "onDelete": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
}
