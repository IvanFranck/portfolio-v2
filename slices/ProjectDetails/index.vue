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

      <div class="w-full flex flex-col md:flex-row mt-4 md:mt-8">
        <div class="w-full md:w-1/2 md:pr-2">
          <div class="w-full grid grid-cols-2 gap-x-2 gap-y-3 ">
            <h2 class="font-display heading-h3 uppercase ">
              Catégory
            </h2>
           
            <h2 class="font-display heading-h3 uppercase">
              Date
            </h2>
            <p>
              {{ slice.primary.published_date }}
            </p>
            <template
              v-for="item in slice.primary.others_details"
              :key="item.type"
            >
              <h2 class="font-display heading-h3 uppercase">
                {{ item.type }}
              </h2>
              <p>
                {{ item.value }}
              </p>
            </template>
          </div>
        </div>
      </div>
      {{ slice.primary.summary }}
    </div>
  </section>
</template>
