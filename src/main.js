import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "aos/dist/aos.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faFilePdf, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret, faFilePdf, faExternalLinkAlt);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
