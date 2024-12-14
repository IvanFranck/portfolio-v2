export function usePageMeta() {
    const buildMeta = (page: any) => {
      const baseUrl = 'https://nzimaivan.com';
      const title = page?.meta_title;
      const description = page?.meta_description;
      const image = page?.meta_image?.url;
      const url = `${baseUrl}${useRoute().path}`;
  
      return {
        title: `${title} | Ivan Nzima`,
        meta: [
          {
            name: 'description',
            content: description
          },
          {
            property: 'og:title',
            content: title
          },
          {
            property: 'og:description',
            content: description
          },
          {
            property: 'og:image',
            content: image
          },
          {
            property: 'og:url',
            content: url
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image'
          }
        ]
      }
    }
  
    return {
      buildMeta
    }
}