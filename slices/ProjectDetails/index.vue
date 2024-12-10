<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ProjectDetailsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="text-stroke-primary w-full h-full flex flex-col">
      <div class="w-full">
        <h1 class="heading-h1 w-full">
          {{ slice.primary.title }}
        </h1>
        <hr class="stroke w-full mt-7">
      </div>
      {{ slice.primary.summary }}
      <PrismicLink :field="slice.primary.categories">
        {{ slice.primary.categories }}
      </PrismicLink>
      {{ slice.primary.published_date }}
      <template v-for="item in slice.primary.others_details">
        {{ item.type }}
        {{ item.value }}
      </template>
    </div>
  </section>
</template>
