<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import store from "@/store";
import { FETCH_STARSHIPS } from "@/store/starships/actions.type";
export default {
  name: "App",
  mounted() {
    store.dispatch(FETCH_STARSHIPS);
    console.log(this.starships);
  },
  computed: {
    ...mapGetters(["starships"]),
  },
};
</script>
<style lang="scss">
@import "scss/main";
</style>
