export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUri = config.public.apiUrl;

  const data = await $fetch(baseUri);

  return data;
});
