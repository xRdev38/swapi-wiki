<template>
  <nav class="pagination" role="navigation" aria-label="pagination">
    <ul class="pagination-list">
      <li v-for="page in pages" :key="page.name">
        <a
          class="pagination-link"
          aria-label="Page `${page.name}`"
          aria-current="`${page.name}`"
          @click="onClickPage(page.name)"
          :class="{ active: isPageActive(page.name) }"
        >
          {{ page.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Pagination",
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pages() {
      const range = [];
      for (let i = 1; i <= this.totalPages; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }
      return range;
    },
  },
  methods: {
    onClickPage(page) {
      this.$emit("pageChanged", page);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>
<style scoped lang="scss">
@use "../scss/base/variables" as variables;
.pagination-link {
  border-color: variables.$primary-color;
}
.active {
  background-color: variables.$primary-color;
  color: white;
}
</style>
