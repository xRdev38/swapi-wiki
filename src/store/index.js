import Vue from "vue";
import Vuex from "vuex";

import starships from "./starships/starships.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    starships,
  },
});
