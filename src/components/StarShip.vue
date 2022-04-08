<template>
  <div class="wrapper">
    <div class="starship" v-if="!isLoading">
      <h2 class="starship-title">{{ starship.name }}</h2>
      <hr class="border-dashed" />
      <div class="section">
        <div class="container">
          <template v-for="(value, key, index) in starship">
            <article
              v-if="hasDisplayKey(key) && hasDisplayValue(value)"
              :key="`${key}-${index}`"
              class="media"
            >
              <div class="media-content">
                <div class="content">
                  <p v-if="key !== 'created' && key !== 'edited'">
                    <strong>{{ firstLetter(removeDash(key)) }}</strong>
                    <br />
                    <template v-if="key === 'films' || key === 'pilots'">
                      <linked-list
                        :items="value"
                        :path="getPath(key)"
                        :currentUrl="currentUrl"
                      ></linked-list>
                    </template>
                    <template v-else>
                      {{ value }}
                    </template>
                  </p>
                  <p v-else>
                    <strong>{{ firstLetter(removeDash(key)) }}</strong>
                    <br />
                    {{ formatDate(value) }}
                  </p>
                </div>
              </div>
            </article>
          </template>
        </div>
      </div>
    </div>
    <b-loading
      :is-full-page="true"
      v-model="isLoading"
      :can-cancel="true"
    ></b-loading>
  </div>
</template>
<script>
import { bus } from "@/commons/eventBus";
import store from "@/store";
import { FETCH_STARSHIP_ONE } from "@/store/starships/actions.type";
import { mapGetters } from "vuex";
import Helpers from "@/commons/helpers";

import LinkedList from "@/components/LinkedList";
export default {
  name: "StarShip",
  components: {
    LinkedList,
  },
  data() {
    return {
      starshipId: "",
      isLoading: true,
      currentUrl: location.protocol + "//" + location.host,
    };
  },
  created() {
    this.starshipId = this.$route.params.id;
    store.dispatch(FETCH_STARSHIP_ONE, this.starshipId).then(() => {
      this.isLoading = false;
    });
    bus.$on("error", (error) => {
      this.isLoading = false;
      if (error.code === 404) {
        setTimeout(() => {
          this.$router.push({ path: "/starships" });
        }, 5000);
      }
    });
  },
  computed: {
    ...mapGetters(["starship"]),
  },
  methods: {
    firstLetter(str) {
      return Helpers.capitalizeFirstLetter(str);
    },
    removeDash(str) {
      return Helpers.removeDash(str);
    },
    hasDisplayKey(str) {
      return str !== "name" && str !== "url";
    },
    hasDisplayValue(data) {
      return !!data && data?.length > 0;
    },
    getPath(key) {
      return key === "films" ? "films" : "people";
    },
    formatDate(str) {
      return Helpers.formatDate(str);
    },
  },
};
</script>
<style lang="scss">
@use "../scss/base/variables" as variables;
.wrapper {
  width: 100%;
  height: 100%;
}
.c-pagination {
  margin: 2.5rem;
}
.starship {
  padding: 1rem;
  width: 100%;
  height: 100%;
}
.starship-title {
  font-size: 5rem;
  font-family: variables.$header-font-family;
  color: variables.$primary-color;
}
.container .media + .media {
  border-top: 1px solid variables.$primary-color;
}
.content ul {
  margin-left: 0 !important;
  list-style-type: none;
  & li {
    list-style: none;
  }
}
</style>
