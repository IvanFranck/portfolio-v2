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

      <div class="details-wrapper">
        <div class="left-details__container">
          <div class="left-details ">
            <h2 class="font-display heading-h3 uppercase">
              Categories
            </h2>
            <ul class="list-none flex flex-col col-2">
              <li
                v-for="item in slice.primary.categories"
                :key="item.category"
              >
                {{ item.category }}
              </li>
            </ul>
            <h2 class="font-display heading-h3 uppercase">
              Date
            </h2>
            <p class="text-ellipsis overflow-hidden text-nowrap col-2">
              {{ slice.primary.published_date }}
            </p>
            <template
              v-for="item in slice.primary.others_details"
              :key="item.type"
            >
              <h2 class="font-display heading-h3 uppercase">
                {{ item.type }}
              </h2>
              <p class="text-ellipsis overflow-hidden text-nowrap col-2">
                {{ item.value }}
              </p>
            </template>
          </div>
        </div>
        <div class="right-details">
          {{ slice.primary.summary }}
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped> 

.left-details {
  @apply w-full grid grid-flow-row-dense grid-cols-3 gap-x-2 gap-y-6 items-baseline;
  &__container {
    @apply w-full md:w-2/3 md:pr-2;
  }
}

.right-details{
  @apply w-full md:w-1/3 md:pl-2 md:mt-0 mt-4;
}

.details-wrapper {
  @apply w-full flex flex-col md:flex-row mt-4 md:mt-8;
}

.col-2 {
  @apply col-span-2;
}
</style>
