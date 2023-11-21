<script setup>
const availableColors = ['white', 'black', 'blue', 'green', 'beige'];

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="px-6 py-8 space-y-6 rounded-md shadow-xl bg-gspark-light">
    <h3 class="pb-3 border-b-2 border-b-gspark-frame">Per products widget</h3>

    <div
      class="flex flex-col items-center space-y-12 justify-evenly sm:flex-wrap sm:flex-row sm:space-y-0 sm:gap-x-12 sm:gap-y-12"
    >
      <WidgetItem
        v-for="widget in items"
        :key="widget.id"
        :id="widget.id"
        :type="widget.type"
        :amount="widget.amount"
        :action="widget.action"
        :is-active="widget.active"
        :selected-color="widget.selectedColor"
      />
    </div>
  </div>
</template>
