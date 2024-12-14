<template>
  <div
    id="projects"
    class="min-h-screen w-full"
  >
    <!-- <pre>{{ project }}</pre> -->
    <div class="content-wrapper">
      <SliceZone
        :slices="project?.data.slices"
        :components="components"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import { components } from '~/slices';
const { client } = usePrismic();
const route = useRoute();

const routeId = computed(() => route.params.id as string);

const { data: project } = useAsyncData('project', async () => {
    const doc = await client.getByUID('project', routeId.value);
    if (doc)
      return doc
    else 
      throw createError({ statusCode: 404, message: "Page not found" });
})  

</script>