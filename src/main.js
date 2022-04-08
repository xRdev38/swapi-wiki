import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import interceptorsSetup from "@/commons/interceptor";

Vue.use(Buefy);
Vue.config.productionTip = false;

interceptorsSetup();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
