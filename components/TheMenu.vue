<template>
  <div 
    id="menu"
    class="fixed z-[2] top-0 left-0 min-h-screen w-screen bg-background dark:bg-background-foreground transition-all duration-200 ease-in-out"
  >
    <div class="w-full min-h-screen grid place-content-center">
      <!-- menu links -->
      <div>
        <nav>
          <ul class="flex flex-col items-center gap-6 list-none"> 
            <li
              v-for="link in settings?.data.navigation"
              :key="link.label"
              class="text-left w-full relative overflow-hidden pr-4"
            >
              <div class="link-item__inner">
                <div
                  class="heading-h1 w-max hover:translate-x-3 transition"
                  @click="closeMenu"
                >
                  <NuxtLink :to="`/${link.link?.text ?? ''}`">
                    {{ link.label }}
                  </NuxtLink>
                </div>
              </div>  
            </li>
          </ul>
        </nav>
      </div>
      <div class="mt-10 social-links">
        <ol class="list-none flex gap-6 text-stroke-primary dark:text-stroke-primary-foreground">
          <li
            v-for="social in settings?.data.external_links"
            :key="social.label"
            class="relative overflow-hidden"
          >
            <AppUnderlineLink
              :to="`${social.link?.url}`"
              external
            >
              ↗  {{ social.label }}
            </AppUnderlineLink>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import {gsap} from "gsap";
const { closeMenu } = useMenu();

const {data: settings} = useSettings();

onUpdated(() => {
    gsap.fromTo("#menu .link-item__inner",
        {y: -100},
        {y: 0, duration: 0.5, ease: "power4.out", stagger: 0.1}
    )
})
</script>
