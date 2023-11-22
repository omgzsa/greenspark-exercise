<script setup>
const props = defineProps({
  modelValue: { type: [Array, Boolean] },
  inputId: { type: [String, Number] },
  value: { type: [Boolean, Object] },
  label: { type: String },
});

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <div class="inline-flex items-center ml-auto">
    <label
      class="flex items-center transition-all cursor-pointer"
      for="checkbox"
    >
      <input
        type="checkbox"
        :id="'checkbox' + inputId"
        v-model="model"
        :value="value"
        class="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-sm border-2 border-gspark-black hover:border-gspark-hover transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 checked:border-gspark-green checked:bg-gspark-green hover:before:opacity-10 before:bg-gspark-green checked:hover:before:opacity-0"
      />
      <!-- tick in the checkbox w/ styles-->
      <div
        class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      {{ label }}
    </label>
  </div>
</template>
