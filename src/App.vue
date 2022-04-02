<template>
  <div id="app" class="container is-fullhd">
    <the-nav-bar></the-nav-bar>
    <router-view />
  </div>
</template>
<script>
import TheNavBar from "@/components/TheNavBar";

export default {
  name: "App",
  components: {
    TheNavBar,
  },
};
</script>
<style lang="scss">
@import "scss/main";
</style>
