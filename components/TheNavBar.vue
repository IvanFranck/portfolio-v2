<template>
  <header class="fixed w-full z-20 top-6 md:top-12 lg:top-24 left-0 right-0">
    <div class="w-full flex justify-between px-6 md:px-12 lg:px-24 items-center">
      <div
        role="logo"
        class="font-cursive"
      >
        <span @click="closeMenu">
          <NuxtLink
            class="text-primary md:text-5xl sm:text-4xl text-2xl"
            to="/"
          >
            {{ settings?.data.site_title }}
          </NuxtLink> 
        </span>
      </div>
      <div>
        <ul class="list-none flex items-center gap-6"> 
          <li>
            <TheColorModeSwitchButton />
          </li>
          <li>
            <button 
              id="menu-button" 
              class="text-primary border-0 outline-none cursor-pointer"  
              @mouseenter="handleMenuhMouseEnter"
              @mouseleave="handleMenuhMouseLeave" 
              @click="toggleMenu"
            >
              <div 
                class="transition-all duration-200 ease-in-out"
                :class="{
                  'hover:rotate-0' : showMenu,
                  'rotate-45': showMenu
                }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="32"
                  height="32"
                  class="icons-style"
                >
                  <title>Menu</title>
                  <circle
                    class="circle1"
                    cx="12"
                    cy="12"
                    r="3"
                    opacity="1"
                    transform-origin="0px 0px"
                    style="transform-origin: 0px 0px;"
                  />
                  <circle
                    class="circle2"
                    cx="24"
                    cy="12"
                    r="3"
                    opacity="1"
                    transform-origin="0px 0px"
                    style="transform-origin: 0px 0px;"
                  />
                  <circle
                    class="circle3"
                    cx="36"
                    cy="12"
                    r="3"
                    opacity="1"
                    transform-origin="0px 0px"
                    style="transform-origin: 0px 0px;"
                  />
                  <circle
                    class="circle4"
                    cx="36"
                    cy="24"
                    r="3"
                    opacity="1"
                    transform-origin="0px 0px"
                    style="transform-origin: 0px 0px;"
                  />
                  <circle
                    class="circle5"
                    cx="36"
                    cy="36"
                    r="3"
                    opacity="1"
                    transform-origin="0px 0px"
                    style="transform-origin: 0px 0px;"
                  />
                  <circle
                    class="circle6"
                    cx="24"
                    cy="36"
                    r="3"
                    opacity="1"
                    transform-origin="0px 0px"
                    style="transform-origin: 0px 0px;"
                  />
                  <circle
                    class="circle7"
                    cx="12"
                    cy="36"
                    r="3"
                    opacity="1"
                    transform-origin="0px 0px"
                    style="transform-origin: 0px 0px;"
                  />
                  <circle
                    class="circle8"
                    cx="12"
                    cy="24"
                    r="3"
                    opacity="1"
                    transform-origin="0px 0px"
                    style="transform-origin: 0px 0px;"
                  />
                  <rect
                    class="rect1"
                    x="21"
                    y="21"
                    width="6px"
                    height="6px"
                    rx="3"
                    ry="3"
                    opacity="0.75"
                    transform-origin="0px 0px"
                    style=" transform-origin: 0px 0px;"
                  />
                  <rect
                    class="rect2"
                    x="21"
                    y="21"
                    width="6px"
                    height="6px"
                    rx="3"
                    ry="3"
                    opacity="0.75"
                    transform-origin="0px 0px"
                    style="transform-origin: 0px 0px;"
                  />
                </svg>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import {gsap} from "gsap";
import { useSettings } from '../composables/useSettings';
const { showMenu, toggleMenu, closeMenu } = useMenu();

const {data: settings} = useSettings();

const handleMenuhMouseEnter = () => {
    if (showMenu.value) {
        gsap.to('button#menu-button svg circle.circle1', {y: 0, x: 0, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle2', {y: '-24px', opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle3', {y: 0, x: 0, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle4', {x: '24px', opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle5', {y: 0, x: 0, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle6', {y: '24px', opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle7', {y: 0, x: 0, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle8', {x: '-24px', opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg rect.rect1', { x: '-12px', width: 30, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg rect.rect2', {height: 30, y: '-12px', opacity: 1, duration: 0.5})
    } else {
        gsap.to('button#menu-button svg circle.circle2', {y: '-24px', opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle4', {x: '24px', opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle6', {y: '24px', opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle8', {x: '-24px', opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg rect.rect1', { x: '-12px', width: 30, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg rect.rect2', {height: 30, y: '-12px', opacity: 1, duration: 0.5})
    }
}
const handleMenuhMouseLeave = () => {
    if (showMenu.value) {
        gsap.to('button#menu-button svg circle.circle1', {y: '-24px', x: '-24px', opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle2', {y: '-24px', x:0, opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle3', {y: '-24px', x: '24px', opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle4', {x: '24px', y:0, opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle5', {x: '24px', y: '24px', opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle6', {y: '24px', x: 0, opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle7', {x: '-24px', y: '24px', opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle8', {x: '-24px', y: 0, opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg rect.rect1', { x: '-16.97px', width: 39.94, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg rect.rect2', {height: 39.94, y: '-16.97px', opacity: 1, duration: 0.5})
    } else {
        gsap.to('button#menu-button svg circle.circle2', {y: 0, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle4', {x: 0, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle6', {y: 0, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle8', {x: 0, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg rect.rect1', {width: 6, x: 0, duration: 0.5})
        gsap.to('button#menu-button svg rect.rect2', {height: 6, y: 0, duration: 0.5})
    }
}

watch((showMenu),()=>{
    if (showMenu.value) {
        gsap.to('button#menu-button svg circle.circle1', {y: '-24px', x: '-24px', opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle2', {y: '-24px', x:0, opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle3', {y: '-24px', x: '24px', opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle4', {x: '24px', y:0, opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle5', {x: '24px', y: '24px', opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle6', {y: '24px', x: 0, opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle7', {x: '-24px', y: '24px', opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle8', {x: '-24px', y: 0, opacity: 0, duration: 0.5})
        gsap.to('button#menu-button svg rect.rect1', { x: '-16.97px', width: 39.94, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg rect.rect2', {height: 39.94, y: '-16.97px', opacity: 1, duration: 0.5})
    } else {
        gsap.to('button#menu-button svg circle.circle1', {y: 0, x: 0, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle2', {y: 0, x:0, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle3', {y: 0, x: 0, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle4', {x: 0, y:0, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle5', {x: 0, y: 0, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle6', {y: 0, x: 0, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle7', {x: 0, y: 0, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg circle.circle8', {x: 0, y: 0, opacity: 1, duration: 0.5})
        gsap.to('button#menu-button svg rect.rect1', { x: 0, width: 6, opacity: 0.75, duration: 0.5})
        gsap.to('button#menu-button svg rect.rect2', {height: 6, y: 0, opacity: 0.75, duration: 0.5})
    }
})
</script>