export default defineEventHandler(async (event) => {
  const uri = 'https://api.mocki.io/v2/016d11e8/product-widgets';

  const data = await $fetch(uri);

  return { data };
});
