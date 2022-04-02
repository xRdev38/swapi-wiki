<template>
  <div class="starships">Starships</div>
</template>
<script>
import { mapGetters } from "vuex";
import store from "@/store";
import { FETCH_STARSHIPS } from "@/store/starships/actions.type";
export default {
  name: "Starships",
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
.starships {
  text-align: center;
}
</style>
