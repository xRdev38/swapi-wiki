<template>
  <div class="starships">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Starships",
  data() {
    return {
      currentPage: 1,
    };
  },
};
</script>
<style lang="scss">
.starships {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}
</style>
