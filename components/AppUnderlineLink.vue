<template>
    <div class="underline-link">
        <div 
            :class="wrapperClass" 
            class="link-item__inner"
        >
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
  wrapperClass: { type: String, required: false },
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