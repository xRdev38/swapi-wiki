<template>
  <ul class="linked-list">
    <li v-for="item in items" :key="item">
      <a :href="`${currentUrl}/${path}/${getIdFromUrl(item)}`"></a>
    </li>
  </ul>
</template>
<script>
import Helpers from "@/commons/helpers";

export default {
  name: "LinkedList",
  props: {
    items: {
      type: Array,
      required: true,
    },
    currentUrl: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  methods: {
    firstLetter(str) {
      return Helpers.capitalizeFirstLetter(str);
    },
    removeDash(str) {
      return Helpers.removeDash(str);
    },
    getIdFromUrl(url) {
      return url.substring(
        url.lastIndexOf(`${this.path}/`) + (this.path.length + 1),
        url.lastIndexOf("/")
      );
    },
  },
};
</script>
