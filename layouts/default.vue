<template>
  <div>
    <TheNavBar />
    <TheMenu v-show="showMenu" />
    <main 
      class="bg-background dark:bg-background-foreground min-h-screen w-min-screen transition-all duration-200 ease-in-out"
      :class="{ 'opacity-0': showMenu, 'opacity-100': !showMenu }"
    >
      <div class="w-full px-6 pd:px-12 lg:px-24">
        <slot />
      </div>
    </main>
    <div class="noise" /> 
  </div>
</template>

<script setup>
const {showMenu} = useMenu();
</script>

<style>

.noise {
    position: fixed;
    z-index: 9999;
    top: -300%;
    left: -150%;
    height: 600%;
    width: 600%;
    -webkit-animation: grain 7s steps(10) infinite;
    animation: grain 7s steps(10) infinite;
    background-image: url(/assets/img/noise.png);
    background-size: 200px;
    background-repeat: repeat;
    opacity: .25;
    pointer-events: none;
    @apply dark:opacity-[.2];
}

@keyframes grain {
    0%, 100% {
        transform: translate(0);
    }
    10% {
        transform: translate(-5%, -10%);
    }
    20% {
        transform: translate(-15%, 5%);
    }
    30% {
        transform: translate(7%, -25%);
    }
    40% {
        transform: translate(-5%, 25%);
    }
    50% {
        transform: translate(-15%, 10%);
    }
    60% {
        transform: translate(15%);
    }
    70% {
        transform: translateY(15%);
    }
    80% {
        transform: translate(3%, 35%);
    }
    90% {
        transform: translate(-10%, 10%);
    }
}

</style>