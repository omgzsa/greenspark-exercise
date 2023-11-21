<script setup>
const badgeActive = ref(false);

const props = defineProps({
  id: Number,
  type: String,
  amount: Number,
  action: String,
  // isLinked: Boolean,
  isActive: Boolean,
  selectedColor: String,
});

const emit = defineEmits(['change']);

const showMeasure = computed(() => {
  return props.type === 'carbon';
});

const selectedTheme = computed(() => {
  if (props.selectedColor === 'green') {
    return 'bg-gspark-green';
  }
  if (props.selectedColor === 'blue') {
    return 'bg-gspark-blue';
  }
  if (props.selectedColor === 'beige') {
    return 'bg-gspark-beige';
  }
  if (props.selectedColor === 'black') {
    return 'bg-gspark-black';
  }
});

const handleInputChange = () => {
  emit('change', badgeActive.value);
};
</script>

<template>
  <div class="w-[221px] space-y-2">
    <div class="rounded-md px-2.5 py-3" :class="selectedTheme">
      <WidgetItemHeader>
        <template #lead> This product {{ action }} </template>
        <template #title>
          {{ amount }}<span v-if="showMeasure">kgs</span> {{ type }}
        </template>
      </WidgetItemHeader>
    </div>
    <div class="py-2 space-y-2">
      <label class="flex items-center gap-2">
        <p>Link to public profile</p>
        <!-- <Tooltip /> -->
        <!-- <input class="ml-auto" type="checkbox" /> -->
      </label>
      <div class="flex items-center justify-between">
        <p>Badge colour</p>
        <div class="w-3.5 h-3.5 border border-black bg-red-500"></div>
      </div>
      <div class="flex items-center justify-between">
        <p>Activate badge</p>
        <InputToggle
          :input-id="props.id"
          v-model="badgeActive"
          @update:model-value="handleInputChange"
        />
      </div>
    </div>
  </div>
</template>
