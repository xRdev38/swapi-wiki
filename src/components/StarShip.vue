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
                    <template v-if="key === 'films'">
                      <div class="content" v-html="arrayToLinks(value)"></div>
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
import store from "@/store";
import { FETCH_STARSHIP_ONE } from "@/store/starships/actions.type";
import { mapGetters } from "vuex";
import Helpers from "@/commons/helpers";
export default {
  name: "StarShip",
  data() {
    return {
      starshipId: "",
      isLoading: true,
      currentUrl: location.protocol + location.host,
    };
  },
  created() {
    this.starshipId = this.$route.params.id;
    store.dispatch(FETCH_STARSHIP_ONE, this.starshipId).then(() => {
      this.isLoading = false;
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
    arrayToLinks(data) {
      let html = `<ul>`;
      if (Array.isArray(data)) {
        data.forEach((item) => {
          let id = item.substring(item.length - 2, item.lastIndexOf("/"));
          html += `<li><a href="${this.currentUrl}/films/${id}"></a></li>`;
        });
        html += `</ul>`;
      }
      return html;
    },
    hasDisplayKey(str) {
      return str !== "name" && str !== "url";
    },
    hasDisplayValue(data) {
      return !!data && data?.length > 0;
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
  list-style-type: none;
  & li {
    list-style: none;
  }
}
</style>
