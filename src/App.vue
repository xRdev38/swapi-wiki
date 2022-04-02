<template>
  <div id="app">
    <the-nav-bar></the-nav-bar>
    <main class="container is-fullhd">
      <router-view />
    </main>
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
