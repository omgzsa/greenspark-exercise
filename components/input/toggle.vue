<script setup>
const props = defineProps({
  inputId: Number,
  modelValue: Boolean,
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
  <div class="checkbox-slider">
    <input type="checkbox" v-model="model" :id="'checkbox' + inputId" />
    <label :for="'checkbox' + inputId" class="slider"></label>
    <label :for="'checkbox' + inputId"><slot /></label>
  </div>
</template>

<style scoped>
.checkbox-slider {
  display: flex;
  align-items: center;
}

.checkbox-slider .slider {
  position: relative;
  width: 40px;
  height: 20px;
  background-color: #ddd;
  transition: 150ms;
  border-radius: 15px;
  cursor: pointer;
}

.checkbox-slider .slider::before {
  position: absolute;
  content: '';
  height: 16px;
  width: 16px;
  left: 2px;
  top: 2px;
  background: white;
  transition: 150ms;
  border-radius: 50%;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
  /* outline: 5px solid #afc6bd; */
}

.checkbox-slider .slider:hover::before {
  outline: 5px solid #afc6bd;
}

.checkbox-slider input {
  display: none;
}

.checkbox-slider input:checked + .slider {
  background: #3b755f;
}

.checkbox-slider input:checked + .slider::before {
  transform: translateX(20px);
}
</style>
