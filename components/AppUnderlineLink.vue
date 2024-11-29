<template>
    <div class="underline-link">
        <div class="link-item__inner">
            <div @mouseenter="handleMenuhMouseEnter" @mouseleave="handleMenuhMouseLeave" class="link">
                <NuxtLink class="link" :to="to" :target="external ? '_blank' : undefined"><slot/></NuxtLink>
            </div>
            <div class="link-underline"></div>
        </div>    
    </div>
</template>

<script setup lang="ts">
import {gsap} from "gsap";

defineProps({
  to: { type: String, required: true },
  external: { type: Boolean, default: false },
})

onUpdated(() => {
    gsap.fromTo(".link-item__inner",
        {y: -100},
        {y: 0, duration: 0.5, ease: "power4.out", stagger: 0.1}
    )
})

function handleMenuhMouseEnter(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    if (!target) return;
    const underline = target.nextElementSibling;
    gsap.to(underline, {x: 0, duration: 0.3})
}

function handleMenuhMouseLeave(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    if (!target) return;
    const underline = target.nextElementSibling;
    gsap.to(underline, {x: '-101%', duration: 0.3})
}

</script>

<style scoped>
.underline-link .link-underline{
    @apply w-full relative h-[1px] lg:h-[2px] bg-stroke-primary dark:bg-stroke-primary-foreground mt-1 
    origin-bottom-right -translate-x-[101%];
}
.underline-link .link {
    @apply lowercase font-thin text-base md:text-xl lg:text-3xl cursor-pointer;
}
.underline-link {
    @apply overflow-hidden relative pr-5;
}
</style>