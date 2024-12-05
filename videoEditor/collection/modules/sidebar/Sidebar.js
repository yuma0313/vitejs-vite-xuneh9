import { h, Host } from "@stencil/core";
import { autorun, reaction } from "mobx";
import { FilmIcon } from "../../assets/icons/FilmIcon";
import { TypeIcon } from "../../assets/icons/TypeIcon";
import { ApplicationStore } from "../../store/ApplicationStore";
import { RendleyStore } from "../../store/RendleyStore";
import { SidebarStore } from "../../store/SidebarStore";
import { SIDEBAR_ELEMENT_ID } from "./config/constants";
import { CameraIcon } from "../../assets/icons/CameraIcon";
import clsx from "clsx";
import { ClipTypeEnum } from "@rendley/sdk";
const OPTIONS = {
    media: {
        icon: FilmIcon,
        text: "アップロード",
        panel: () => h("ve-media-panel-container", null),
    },
    text: {
        icon: TypeIcon,
        text: "テキスト",
        panel: () => h("ve-text-panel-container", null),
    },
    stock: {
        icon: CameraIcon,
        text: "画像",
        panel: () => h("ve-stock-panel-container", null),
    },
    edit: {
        isHidden: true,
        panel: () => h("ve-edit-panel-container", null),
        text: "編集",
    },
};
export class Sidebar {
    constructor() {
        this.activeItemKey = SidebarStore.activeItemKey;
    }
    componentWillLoad() {
        this.disposeAutorun = autorun(() => {
            this.activeItemKey = SidebarStore.activeItemKey;
        });
        this.disposeReaction = reaction(() => {
            var _a;
            return ({
                clipType: ApplicationStore.selectedClipId ? (_a = RendleyStore.clips[ApplicationStore.selectedClipId]) === null || _a === void 0 ? void 0 : _a.type : null,
            });
        }, ({ clipType }) => {
            if (clipType === ClipTypeEnum.SUBTITLES) {
                SidebarStore.setActiveItemKey("subtitles");
                return;
            }
            if (clipType === ClipTypeEnum.TEXT || clipType === ClipTypeEnum.LOTTIE) {
                SidebarStore.setActiveItemKey("edit");
                return;
            }
            SidebarStore.setActiveItemKey(null);
        });
    }
    disconnectedCallback() {
        var _a, _b;
        (_a = this.disposeAutorun) === null || _a === void 0 ? void 0 : _a.call(this);
        (_b = this.disposeReaction) === null || _b === void 0 ? void 0 : _b.call(this);
    }
    handleItemClick(id) {
        if (OPTIONS[id].onClick != null) {
            OPTIONS[id].onClick();
        }
        if (this.activeItemKey === id) {
            this.handleClosePanel();
        }
        else {
            this.handleOpenPanel(id);
        }
    }
    handleOpenPanel(id) {
        SidebarStore.setActiveItemKey(id);
    }
    handleClosePanel() {
        SidebarStore.setActiveItemKey(null);
    }
    getActivePanelComponent() {
        var _a;
        const panelCreator = this.activeItemKey && ((_a = OPTIONS[this.activeItemKey]) === null || _a === void 0 ? void 0 : _a.panel);
        return panelCreator ? panelCreator() : null;
    }
    render() {
        const panelComponent = this.getActivePanelComponent();
        const isMedia = this.activeItemKey === "media";
        return (h(Host, { key: 'cb0de341a6cb59b209a7cb97a59756dda16cd152' }, h("div", { key: '0845f9738125ec06600050fcf4e66e6ed6c66a58', class: "sidebar" }, h("div", { key: '46f851ff59d55e33c02876db8228688684a42c53', class: "sidebar__content", id: SIDEBAR_ELEMENT_ID }, Object.entries(OPTIONS).map(([id, { icon: Icon, isHidden, text }]) => {
            if (!isHidden)
                return (h("div", { key: id, class: clsx("sidebar__content__btn", {
                        "sidebar__content__btn-active": this.activeItemKey === id,
                    }), onPointerDown: () => this.handleItemClick(id) }, Icon && h(Icon, null), h("span", { class: "sidebar__content__btn-text" }, text)));
        })), panelComponent && (h("div", { key: 'efeed326908121bc388342c02b051f787f5cd43b', class: "sidebar__panel" }, h("ve-panel", { key: 'eeba45d1e7c25f49ce4c5cb1d6190222afd700c0', onClose: this.handleClosePanel, isMedia: isMedia }, panelComponent))))));
    }
    static get is() { return "ve-sidebar"; }
    static get originalStyleUrls() {
        return {
            "$": ["./Sidebar.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["Sidebar.styles.css"]
        };
    }
    static get states() {
        return {
            "activeItemKey": {}
        };
    }
}
