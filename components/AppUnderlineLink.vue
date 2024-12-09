<template>
  <div class="underline-link">
    <div 
      :class="wrapperClass" 
      class="link-item__inner"
    >
      <div
        class="link"
        @mouseenter="handleMenuhMouseEnter"
        @mouseleave="handleMenuhMouseLeave"
      >
        <NuxtLink
          v-if="!asChild"
          class="link"
          :to="to"
          :target="external ? '_blank' : undefined"
        >
          <slot />
        </NuxtLink>
        <slot v-else />
      </div>
      <div class="link-underline" />
    </div>    
  </div>
</template>

<script setup lang="ts">

import {gsap} from "gsap";

defineProps({
  to: { type: String, required: false, default: '#' },
  external: { type: Boolean, default: false },
  wrapperClass: { type: String, required: false, default: '' },
  asChild: { type: Boolean, default: false }
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