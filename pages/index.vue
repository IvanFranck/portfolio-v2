<template>
    <div class="min-h-screen w-full grid place-content-center">
        <div>
            <h1 class="heading-h1 text-center">
                YO! Je suis <span class="uppercase">NZIMA Ivan</span>
            </h1>
            <p class="text-primary dark:text-primary-foreground text-center font-semibold text-xl md:text-2xl lg:text-4xl mt-2">
                Je suis développeur web full TS & </br> aspirant cloud Engineer
            </p>
        </div>

        <div class="mt-4 flex justify-center">
            <ol class="list-none flex gap-6">
                
                <li class="lowercase font-thin text-base md:text-xl lg:text-3xl">
                    <AppUnderlineLink to="/projects">
                        ↗ voir mes projets
                    </AppUnderlineLink> 
                </li>
                <li class="lowercase font-thin text-base md:text-xl lg:text-3xl">
                    <AppUnderlineLink to="/about">
                        ↗ en savoir plus sur moi
                    </AppUnderlineLink> 
                </li>
            </ol>
        </div>
    </div>
</template>

<script setup></script>