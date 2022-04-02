<template>
  <div class="listing-starships">
    <list-item :items="getStarShipsName" :slug="path"></list-item>
    <pagination
      class="c-pagination"
      :total-pages="getPageTotal"
      :total="counts"
      :per-page="offset"
      :current-page="currentPage"
      @pageChanged="onPageChange"
    >
    </pagination>
    <b-loading
      :is-full-page="true"
      v-model="isLoading"
      :can-cancel="true"
    ></b-loading>
  </div>
</template>
<script>
import ListItem from "@/components/ListItem";
import Pagination from "@/components/Pagination";
import store from "@/store";
import { SET_STARSHIPS_ROW } from "@/store/starships/mutations.type";
import { mapGetters } from "vuex";
import { FETCH_STARSHIPS } from "@/store/starships/actions.type";

export default {
  name: "ListStarShips",
  components: {
    ListItem,
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
      isLoading: false,
      path: "starships",
    };
  },
  mounted() {
    store.dispatch(FETCH_STARSHIPS, this.currentPage);
  },
  computed: {
    ...mapGetters(["starships", "offset", "row", "counts"]),
    getStarShipsName() {
      return this.starships.map((starship) => {
        return {
          name: starship.name,
          id: this.getIdFromUrl(starship.url),
        };
      });
    },
    getPageTotal() {
      return Math.ceil(this.counts / this.offset);
    },
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
      this.isLoading = true;
      store.commit({
        type: SET_STARSHIPS_ROW,
        row: this.currentPage,
      });
      store.dispatch(FETCH_STARSHIPS, this.currentPage).then(() => {
        this.isLoading = false;
      });
    },
    getIdFromUrl(url) {
      return url.substring(url.length - 2, url.lastIndexOf("/"));
    },
  },
};
</script>
<style scoped lang="scss">
@use "../scss/base/variables" as variables;
.listing-starships {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.c-pagination {
  margin: 2.5rem;
}
</style>
