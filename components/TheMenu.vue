<template>
    <div 
        class="fixed z-[2] top-0 left-0 min-h-screen w-screen bg-background dark:bg-background-foreground transition-all duration-200 ease-in-out"
    >
        <div class="w-full min-h-screen grid place-content-center">
            <!-- menu links -->
            <div>
                <nav>
                    <ul class="flex flex-col items-center gap-6 list-none"> 
                        <li class="text-left w-full">
                            <div class="link-item__inner">
                                <h1 class="heading-h1 w-max hover:translate-x-3 transition">
                                    <NuxtLink to="/">Home</NuxtLink>
                                </h1>
                            </div>  
                        </li>
                        <li class="text-left w-full">
                            <div class="link-item__inner">
                                <h1 class="heading-h1 w-max hover:translate-x-3 transition">
                                    <NuxtLink to="/about">Projets</NuxtLink>
                                </h1>
                            </div>  
                        </li>
                        <li class="text-left w-full">
                            <div class="link-item__inner">
                                <h1 class="heading-h1 w-max hover:translate-x-3 transition">
                                    <NuxtLink to="/projects">À propos</NuxtLink>
                                </h1>
                            </div>  
                        </li>
                        <li class="text-left w-full">
                            <div class="link-item__inner">
                                <h1 class="heading-h1 w-max hover:translate-x-3 transition">
                                    <NuxtLink to="/contact">Contact</NuxtLink>
                                </h1>
                            </div>  
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="mt-10 social-links">
                <ol class="list-none flex gap-6 text-stroke-primary dark:text-stroke-primary-foreground">
                    <li class="relative overflow-hidden">
                        <AppUnderlineLink to="https://github.com/ivanFranck" target="_blank">↗  GitHub</AppUnderlineLink>
                    </li>
                    <li class="relative overflow-hidden">
                        <AppUnderlineLink to="https://www.linkedin.com/in/nzima-ivan-8a8067182/" target="_blank">↗  LinkedIn</AppUnderlineLink>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
