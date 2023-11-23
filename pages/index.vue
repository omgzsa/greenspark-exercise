<script setup>
import { useWidgetStore } from '@/stores/widgets';

const store = useWidgetStore();
const { fetchWidgets } = store;
const { widgets } = storeToRefs(store);

await fetchWidgets();

useHead({
  title: 'Greenspark',
});
</script>

<template>
  <div class="px-4 space-y-16">
    <!-- <h1 class="text-4xl text-center text-gspark-green">Hello Greenspark 🌿</h1> -->
    <Widget :items="widgets.value" />
  </div>
</template>
