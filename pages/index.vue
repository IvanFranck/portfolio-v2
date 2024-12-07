<template>
  <div
    id="home"
    class="min-h-screen w-full grid place-content-center"
  >
    <div>
      <h1 class="heading-h1 text-center home-block">
        {{ home?.data.title }}
      </h1>
      <p class="text-primary dark:text-primary-foreground text-center font-normal text-xl md:text-2xl lg:text-4xl mt-5 home-block font-sans">
        {{ home?.data.description }}
      </p>
    </div>

    <div class="mt-12 flex justify-center">
      <ol class="list-none flex sm:flex-row flex-col sm:gap-6 gap:4">
        <li
          v-for="homeLink in home?.data.links"
          :key="`/${homeLink.label}`"
          class="lowercase font-thin text-base md:text-xl lg:text-3xl"
        >
          <AppUnderlineLink
            wrapper-class="home-block"
            :to="homeLink.link.text"
          >
            → {{ homeLink.label }}
          </AppUnderlineLink> 
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
const { showMenu } = useMenu();
const route = useRoute();

const prismic = usePrismic();

const { data: home} = useAsyncData('home', async () => {
    return prismic.client.getSingle('home');
})

function animateBlocks() {
    gsap.fromTo("#home .home-block",
        {y: -96, opacity: 0},
        {y: 0, opacity: 1, duration: 0.5, ease: "power4.out", stagger: 0.1}
    )   
}

watch((showMenu), () => {
    if (!showMenu.value && route.name === 'index') {
        animateBlocks();  
    }
})

onMounted(() => {
    animateBlocks();  
})

</script>