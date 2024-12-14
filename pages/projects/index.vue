<template>
  <div
    id="projects"
    class="min-h-screen w-full"
  >
    <div class="content-wrapper">
      <div class="w-full flex justify-between items-start">
        <!-- project left -->
        <div class="">
          <!-- <pre>{{ projectsList }}</pre> -->
        </div>

        <div class="md:w-1/2 w-full pl-4">
          <div class="w-full">
            <div class="w-full flex justify-between items-baseline">
              <h1 class="heading-h1 w-full">
                Projects
              </h1>
              <span class="">{{ projectsList?.length }}</span>
            </div>
            <hr class="stroke w-full mt-7">
          </div>
          <ul class="flex flex-col list-none">
            <ClientOnly>
              <li 
                v-for="project in projectsList" 
                :key="project.data.title"
              >
                <NuxtLink
                  :to="`projects/${project.uid}`"
                  class="cursor-pointer"
                >
                  <div
                    class="project-row"
                    @mouseenter="handleProjectRowMouseEnter"
                    @mouseleave="handleProjectRowMouseLeave"
                  >
                    <div class="project-row__left">
                      <div class="project-row__left__arrow-wrapper">
                        <div class="project-row__left__arrow heading-h3">
                          →
                        </div>
                      </div>
                      <h2 class="project-row__title heading-h3">
                        {{ project.data.title }}
                      </h2>
                    </div>
                    <div class="project-row__right">
                      <p class="project-row__category">
                        {{ project.data.categories.map((item: any) => item.category).join((', ')) }}
                      </p>
                    </div>
                  </div>
                </NuxtLink>
              </li>
            </ClientOnly>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { gsap } from 'gsap';

const prismic = usePrismic();

const { data: projectsList } = useAsyncData('projects_page', async () => {
  return prismic.client.getAllByType('project', {
    fetch: ['project.title', 'project.categories'],
    // orderings: {
    //   field: 'project.title',
    //   direction: 'asc'
    // }
  });
})

function handleProjectRowMouseEnter(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    if (!target) return;
    const arrow = target.getElementsByClassName('project-row__left__arrow')[0];
    const title = target.getElementsByClassName('project-row__title')[0];
    if (!arrow || !title) return;
    gsap.to(arrow, {x: 0, duration: 0.4, ease: "sine.inOut"});
    gsap.to(title, {x: 30, duration: 0.3});
}
function handleProjectRowMouseLeave(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    if (!target) return;
    const arrow = target.getElementsByClassName('project-row__left__arrow')[0];
    const title = target.getElementsByClassName('project-row__title')[0];
    if (!arrow || !title) return;
    gsap.to(arrow, {x: '-100%', duration: 0.3});
    gsap.to(title, {x: 0, duration: 0.3});
}


</script>

<style scoped>
.project-row {
    @apply w-full py-6 border-b-[1px] lg:border-b-[2px] border-stroke-primary dark:border-stroke-primary-foreground flex justify-between items-center;

    &__left {
        @apply w-full flex items-center text-ellipsis;

        &__arrow {
            @apply pr-3 relative -translate-x-[100%];

            &-wrapper {
                @apply absolute overflow-hidden; 
            }
        }
    }

    &__title {
        @apply text-ellipsis text-nowrap overflow-hidden mr-6;
    }

    &__right {
        @apply w-full flex justify-end items-center;
    }
    
    &__category {
        @apply text-ellipsis text-nowrap overflow-hidden;
    }
    
}
</style>