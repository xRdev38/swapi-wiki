<template>
  <ul class="list-item">
    <li v-for="(item, index) in items" :key="`${item.name}-${index}`">
      <router-link
        class="list-item-link"
        :to="{ path: `${slug}/${item.id}`, params: { id: `${item.id}` } }"
      >
        {{ item.name }}
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "ListItem",
  props: {
    items: {
      type: Array,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped lang="scss">
@use "../scss/base/variables" as variables;
.list-item {
  width: 100%;
  list-style-type: none;
  & li {
    font-size: 5rem;
    text-align: center;
  }
  & li:hover {
    background-color: variables.$primary-color;
  }
}
.list-item-link {
  width: 100%;
  height: 100%;
  display: block;
  font-family: variables.$header-font-family;
  color: variables.$primary-color;
  &:hover {
    color: white;
  }
}
</style>
