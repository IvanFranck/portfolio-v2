import { repositoryName } from "./slicemachine.config.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.svg' }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    "@nuxtjs/prismic"
  ],

  googleFonts: {
    families: {
      'La Belle Aurore': true,
      'PT Sans Caption': true,
      'Anton': true,
      'Karma': true
    }
  },

  prismic: {
    endpoint: repositoryName,
    preview: '/api/preview',
    clientConfig: {
      routes: [
        {
          type: 'settings',
          uid: 'home',
          path: '/',
        },
        {
          type: 'home',
          uid: 'home',
          path: '/',
        },
        {
          type: 'contacts',
          uid: 'about-page',
          path: '/contact',
        },
        {
          type: 'about_me',
          path: '/about',
        },
      ]
    }
  }
})