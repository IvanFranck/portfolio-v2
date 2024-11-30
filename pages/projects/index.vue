<template>
    <div id="projects" class="min-h-screen w-full">
        <div class="content-wrapper">
            <div class="w-full flex justify-between items-start">

                <!-- project left -->
                <div class=""></div>

                <div class="md:w-1/2 w-full pl-4">
                    <div class="w-full">
                        <div class="w-full flex justify-between items-baseline">
                            <h1 class="heading-h1 w-full">Projets</h1>
                            <span class="">9</span>
                        </div>
                        <hr class="stroke w-full mt-7">
                    </div>
                    <ul class="flex flex-col list-none">
                        <li class="">
                            <NuxtLink to="/projects/1">
                                <div class="project-row" @mouseenter="handleProjectRowMouseEnter" @mouseleave="handleProjectRowMouseLeave">
                                    <div class="project-row__left">
                                        <div class="project-row__left__arrow-wrapper">
                                            <div class="project-row__left__arrow heading-h2">→</div>
                                        </div>
                                        <h2 class="project-row__title heading-h2">My portfolio</h2>
                                    </div>
                                </div>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { gsap } from 'gsap';

function handleProjectRowMouseEnter(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    if (!target) return;
    const arrow = target.getElementsByClassName('project-row__left__arrow')[0];
    gsap.to(arrow, {x: 0, duration: 0.3})
}
function handleProjectRowMouseLeave(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    if (!target) return;
    const arrow = target.getElementsByClassName('project-row__left__arrow')[0];
    gsap.to(arrow, {x: '-100%', duration: 0.3})
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
    }

    
}
</style>