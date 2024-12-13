<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ProjectCategoriesSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <div
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <ul
      v-if="slice.variation === 'column'"
      class="list-none flex flex-col"
    >
      <li
        v-for="item in slice.primary.categories"
        :key="item"
      >
        {{ item.category }}
      </li>
    </ul>
    <ul
      v-else-if="slice.variation === 'default'"
      class="list-none flex flex-row"
    >
      <li
        v-for="item in slice.primary.categories"
        :key="item"
        class="item"
      >
        {{ item.category }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.item {
  @apply mr-2 after:content-[','] last:mr-0 last:after:content-[''];
}
</style>
