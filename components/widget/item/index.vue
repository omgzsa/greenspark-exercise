<script setup>
import { nanoid } from 'nanoid';

const cbId = nanoid();

const props = defineProps({
  id: Number,
  type: String,
  amount: Number,
  action: String,
  isLinked: Boolean,
  isActive: Boolean,
  selectedColor: String,
  availableColors: Array,
});

const emit = defineEmits(['activate-widget', 'select-color']);

// computed prop to show/hide the measure unit (kgs)
const showMeasure = computed(() => {
  return props.type === 'carbon';
});

// computed prop to set the selected theme
const selectedTheme = computed(() => {
  if (props.selectedColor === 'green') {
    return 'bg-gspark-green text-white';
  }
  if (props.selectedColor === 'blue') {
    return 'bg-gspark-blue text-white';
  }
  if (props.selectedColor === 'beige') {
    return 'bg-gspark-beige text-gspark-green';
  }
  if (props.selectedColor === 'black') {
    return 'bg-gspark-black text-white';
  }
  if (props.selectedColor === 'white') {
    return 'bg-gspark-white text-gspark-green';
  }
});

// watch for changes in the props.isActive and emit the event
watch(
  () => props.isActive,
  (newValue) => {
    if (newValue) {
      emit('activate-widget', props.id);
      emit('select-color', props.selectedColor);
    }
  }
);
</script>

<template>
  <div class="w-[221px] space-y-2">
    <div class="rounded-md px-2.5 py-3 transition" :class="selectedTheme">
      <WidgetItemHeader>
        <template #lead> This product {{ action }} </template>
        <template #title>
          {{ amount }}<span v-if="showMeasure">kgs</span> {{ type }}
        </template>
      </WidgetItemHeader>
    </div>
    <div class="py-2 space-y-2">
      <!-- LINK TO PUBLIC PROFILE INPUT / TOOLTIP -->
      <div class="flex items-center gap-2">
        <p class="text-gspark-green">Link to public profile</p>
        <Tooltip>
          <template #content>
            This widget links directly to your public profile so that you can
            easily share your impact with your customers. Turn it off here if
            you do not want the badge to link to it.
          </template>
          <template #link> View Public Profile </template>
        </Tooltip>
        <InputCheckbox
          :id="cbId"
          :model-value="isLinked"
          @update:model-value="isLinked = $event"
          :is-disabled="!props.isActive"
        />
      </div>

      <!-- BADGE COLOUR INPUT FOR THEME CHANGE -->
      <div class="flex items-center justify-between">
        <p class="text-gspark-green">Badge colour</p>
        <div class="flex gap-1">
          <div
            v-for="color in availableColors"
            :key="color"
            :class="{
              'bg-gspark-green hover:bg-gspark-green/80': color === 'green',
              'bg-gspark-blue hover:bg-gspark-blue/80': color === 'blue',
              'bg-gspark-beige hover:bg-gspark-beige/80': color === 'beige',
              'bg-gspark-light hover:bg-gspark-light/80': color === 'white',
              'bg-gspark-black hover:bg-gspark-black/80': color === 'black',
              'border-2 border-gspark-frame': color === selectedColor,
              'cursor-not-allowed': !props.isActive,
            }"
            @click="emit('select-color', color)"
            :disabled="!props.isActive"
            class="w-4 h-4 transition cursor-pointer"
          ></div>
        </div>
      </div>

      <!-- ACTIVATE BADGE INPUT -->
      <div class="flex items-center justify-between">
        <p class="text-gspark-green">Activate badge</p>
        <InputToggle
          :input-id="props.id"
          :modelValue="isActive"
          @update:model-value="isActive = $event"
        />
      </div>
    </div>
  </div>
</template>
