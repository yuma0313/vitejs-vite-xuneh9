import { makeAutoObservable } from "mobx";
import { isMobile } from "../utils/device/isMobile";
class SidebarStoreInstance {
    constructor() {
        this.activeItemKey = isMobile() ? null : "stock";
        makeAutoObservable(this);
    }
    setActiveItemKey(id) {
        this.activeItemKey = id;
    }
    reset() {
        this.activeItemKey = null;
    }
}
const SidebarStore = new SidebarStoreInstance();
export { SidebarStore };
