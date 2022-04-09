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
import { bus } from "@/commons/eventBus";

export default {
  name: "App",
  components: {
    TheNavBar,
  },
  created() {
    bus.$on("error", (error) => {
      if (error.code === 404) {
        this.$buefy.notification.open({
          message: `Error this data was not found !`,
          duration: 5000,
          progressBar: true,
          type: "is-danger",
          pauseOnHover: true,
        });
      }
    });
  },
};
</script>
<style lang="scss">
@import "scss/main";
</style>
