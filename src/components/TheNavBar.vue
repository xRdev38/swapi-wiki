<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item nav-title" to="/">
        Star War Wiki
      </router-link>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar-main" class="navbar-menu">
      <div class="navbar-start">
        <router-link
          @click.native="addClassToNav('films')"
          class="navbar-item films"
          to="/films"
        >
          Films
        </router-link>
        <router-link
          @click.native="addClassToNav('species')"
          class="navbar-item species"
          to="/species"
        >
          Species
        </router-link>
        <router-link
          @click.native="addClassToNav('planets')"
          class="navbar-item planets"
          to="/planets"
        >
          Planets
        </router-link>
        <router-link
          @click.native="addClassToNav('people')"
          class="navbar-item people"
          to="/people"
        >
          People
        </router-link>
        <router-link
          @click.native="addClassToNav('starships')"
          class="navbar-item starships"
          to="/starships"
        >
          Starships
        </router-link>
        <router-link
          @click.native="addClassToNav('vehicles')"
          class="navbar-item vehicles"
          to="/vehicles"
        >
          Vehicles
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavBar",
  data: function () {
    return {
      hasClassActive: "is-active",
    };
  },
  methods: {
    addClassToNav(className) {
      const mainNavbar = document.querySelectorAll("#navbar-main .navbar-item");
      mainNavbar.forEach((element) => {
        element.classList.remove(this.hasClassActive);
      });
      document
        .querySelector(`.${className}`)
        .classList.add(this.hasClassActive);
    },
  },
};
</script>

<style scoped lang="scss">
@use "../scss/base/variables" as variables;
.navbar {
  padding: 0 1rem;
  background-color: variables.$primary-color;
}
.navbar-item {
  font-weight: 700;
  color: white;
  &:hover {
    color: variables.$secondary-color;
    background-color: variables.$primary-color;
  }
  &:focus,
  &:focus-within,
  &.is-active {
    color: variables.$primary-color !important;
    background-color: variables.$secondary-color !important;
    outline: none;
  }
}
.nav-title {
  font-family: variables.$header-font-family;
  font-size: 1.8rem;
  font-weight: 700;
}
</style>
