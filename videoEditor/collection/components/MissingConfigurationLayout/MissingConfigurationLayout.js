import { h } from "@stencil/core";
import { t } from "../../utils/translation";
import { ConfigError } from "../../assets/icons/ConfigErrorIcon";
export class MissingConfigurationLayout {
    render() {
        return (h("div", { key: 'e2063e37f64933159046db91d38fa91909ca52e0', class: "missing-configuration-layout" }, h("div", { key: '5961d02141f5bad28dc9e223319b05cd47fbf606', class: "missing-configuration-layout__modal" }, h("div", { key: '9f4393484297dedb9f7403e4434c4cec81d71697', class: "missing-configuration-layout__modal--gradient" }), h(ConfigError, { key: '96e1ca1b0f7fbb3f9c23f0aec69a6919c45818e2' }), h("div", { key: 'ca0725624fd7dec159950a26cd64d262ce945acb' }, h("p", { key: '8d6c6046066781a5536d56f85552172357386e0a', class: "missing-configuration-layout__modal--title" }, t("missingConfiguration.title", "Missing configuration!")), h("p", { key: '56fe138c0000841e6abca078bdb6f1900362ccc1', class: "missing-configuration-layout__modal--subtitle" }, t("missingConfiguration.description", "Rendering of the final video is not possible in your browser. No server has been configured yet."))))));
    }
    static get is() { return "ve-missing-configuration-layout"; }
    static get originalStyleUrls() {
        return {
            "$": ["MissingConfigurationLayout.styles.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["MissingConfigurationLayout.styles.css"]
        };
    }
}
