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

/*
            this.$buefy.notification.open({
              message: `Error this data was not found !`,
              duration: 5000,
              progressBar: true,
              type: "is-danger",
              pauseOnHover: true,
            });
 */

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
