<template>
  <div class="min-h-screen w-full">
    <div class="content-wrapper">
      <div class="w-full">
        <h1 class="heading-h1 w-full">
          {{ contact?.data.title }}
        </h1>
        <hr class="stroke w-full mt-7">
      </div>

      <div class="w-full flex flex-col md:flex-row justify-between mt-8">
        <div class="w-2/5 md:w-full pr-3">
          <div class="w-full flex gap-4 flex-wrap items-baseline">
            <h2 class="font-display heading-h3 font-black ">
              {{ contact?.data.email_address_label }}
            </h2>
            <p class="font-sans heading-h3">
              <AppUnderlineLink as-child>
                <a :href="`mailto:${contact?.data.email_address}`">
                  ↗ {{ contact?.data.email_address }}
                </a>
              </AppUnderlineLink>
            </p>
          </div>
        </div> 
        <div class="w-2/3 md:w-full"> 
          <div class="w-full flex justify-end gap-4 flex-wrap">
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
                    :to="`${social.link?.url}`"
                    target="_blank"
                  >
                    ↗ {{ social.link.text }}
                  </AppUnderlineLink> 
                </li>
              </ol>
            </div>
          </div>   
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