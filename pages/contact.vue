<template>
  <div class="min-h-screen w-full">
    <div class="content-wrapper">
      <div class="w-full">
        <h1 class="heading-h1 w-full">
          {{ contact?.data.title }}
        </h1>
        <hr class="stroke w-full mt-7">
      </div>

      <div class="w-full flex flex-col lg:flex-row lg:justify-between justify-start lg:gap-0 gap-8 mt-8">
        <div class="lg:w-2/5 w-full pr-3">
          <ClientOnly>
            <div class="w-full flex gap-4 flex-wrap items-baseline">
              <h2 class="font-display heading-h3 font-black">
                {{ contact?.data.email_address_label }}
              </h2>
              <p class="font-sans heading-h3">
                <AppUnderlineLink
                  :to="`mailto:${contact?.data.email_address}`"
                  external
                >
                  ↗ {{ contact?.data.email_address }}
                </AppUnderlineLink>
              </p>
            </div>
          </ClientOnly>
        </div> 
        <div class="lg:w-2/3 w-full"> 
          <ClientOnly>
            <div class="w-full flex justify-start lg:justify-end items-baseline gap-4 flex-wrap">
              <h2 class="font-display heading-h3 font-black">
                {{ contact?.data.social_networks_addresses_label }}
              </h2>
              <div>
                <ol class="list-none flex flex-col gap-3">
                  <li
                    v-for="social in contact?.data.social_network_links"
                    :key="social.link.text"
                  >
                    <AppUnderlineLink
                      :to="social.link?.url"
                      external
                      wrapper-class="link-item__inner"
                    >
                      ↗ {{ social.link.text }}
                    </AppUnderlineLink> 
                  </li>
                </ol>
              </div>
            </div>
          </ClientOnly>   
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const prismic = usePrismic();

const { data: contact} = useAsyncData('contact_page', async () => {
  return prismic.client.getSingle('contacts');
})


</script>

<style>
.link-item__inner .link{
  @apply text-base md:text-lg lg:text-xl;
}
</style>