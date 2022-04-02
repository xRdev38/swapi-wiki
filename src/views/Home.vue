<template>
  <div class="home">
    <h1 class="home-title">Star Wars Wiki</h1>
    <p class="home-desc">Wiki consuming the Star Wars API</p>
    <hr class="border-dashed" />
    <div class="columns is-multiline">
      <div class="column is-4">
        <div class="nav-item">
          <router-link class="item-link films" to="/films"> Films </router-link>
        </div>
      </div>
      <div class="column is-4">
        <div class="nav-item">
          <router-link class="item-link species" to="/species">
            Species
          </router-link>
        </div>
      </div>
      <div class="column is-4">
        <div class="nav-item">
          <router-link class="item-link planets" to="/planets">
            Planets
          </router-link>
        </div>
      </div>
      <div class="column">
        <div class="nav-item">
          <router-link class="item-link people" to="/people">
            People
          </router-link>
        </div>
      </div>
      <div class="column">
        <div class="nav-item">
          <router-link class="item-link people" to="/starships">
            Starships
          </router-link>
        </div>
      </div>
      <div class="column">
        <div class="nav-item">
          <router-link class="item-link people" to="/vehicles">
            Vehicles
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
<style lang="scss">
@use "../scss/base/variables" as variables;
.home {
  text-align: center;
  height: 100%;
}
.home-title {
  color: variables.$primary-color;
  font-size: 8.5rem;
  font-family: variables.$header-font-family;
}
.home-desc {
  font-size: 1.4rem;
  font-weight: bold;
}
.nav-item {
  height: 250px;
  background-color: variables.$primary-color;
  & .item-link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-weight: 700;
    font-size: 1.9rem;
    color: white;
  }
}
</style>
