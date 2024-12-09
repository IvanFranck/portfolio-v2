<template>
  <div class="min-h-screen w-full">
    <div class="content-wrapper">
      <div class="w-full">
        <h1 class="heading-h1 w-full">
          {{ about?.data.title }}
        </h1>
        <hr class="stroke w-full mt-7">
      </div>
  
      <div class="w-full mt-4">
        <div>
          <PrismicRichText
            class="text-primary dark:text-primary-foreground font-light text-md md:text-lg lg:text-xl mt-5 font-sans"
            :field="about?.data.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script lang="ts" setup>
  
  const prismic = usePrismic();
  
  const { data: about} = useAsyncData('about_page', async () => {
    return prismic.client.getSingle('about_me');
  })
  
  </script>