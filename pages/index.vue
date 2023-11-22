<script setup>
const { data } = await useFetch(
  'https://api.mocki.io/v2/016d11e8/product-widgets'
);
</script>

<template>
  <div class="px-4 space-y-16">
    <h1 class="text-4xl text-center text-gspark-green">Hello Greenspark 🌿</h1>
    <Widget :items="data" />
  </div>
</template>
