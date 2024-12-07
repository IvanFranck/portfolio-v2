<template>
  <div
    id="home"
    class="min-h-screen w-full grid place-content-center"
  >
    <div>
      <h1 class="heading-h1 text-center home-block">
        YO! Je suis <span class="uppercase">NZIMA Ivan</span>
      </h1>
      <p class="text-primary dark:text-primary-foreground text-center font-normal text-xl md:text-2xl lg:text-4xl mt-5 home-block font-sans">
        Développeur web full TS & <br> aspirant cloud Engineer
      </p>
    </div>

    <div class="mt-12 flex justify-center">
      <ol class="list-none flex sm:flex-row flex-col sm:gap-6 gap:4">
        <li class="lowercase font-thin text-base md:text-xl lg:text-3xl">
          <AppUnderlineLink
            wrapper-class="home-block"
            to="/projects"
          >
            → voir mes projets
          </AppUnderlineLink> 
        </li>
        <li class="lowercase font-thin text-base md:text-xl lg:text-3xl">
          <AppUnderlineLink
            wrapper-class="home-block"
            to="/about"
          >
            → en savoir plus sur moi
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

onUpdated(() => {
    console.log('home updated')
})

</script>