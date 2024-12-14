export const useSettings = () => {
    const prismic = usePrismic();
    return useAsyncData('settings', async () => {
        try {
            const result = await prismic.client.getSingle("settings");
            return result;
        } catch (error) {
            console.error('Prismic error:', error);
            return null;
        }
    })
}