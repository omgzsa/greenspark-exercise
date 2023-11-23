<script setup>
import { useFloating, offset, flip, shift } from '@floating-ui/vue';

const isHovered = ref(false);
const isTooltipHovered = ref(false);

const reference = ref(null);
const floating = ref(null);
const { floatingStyles } = useFloating(reference, floating, {
  placement: 'right-end',
  middleware: [offset({ crossAxis: -15 }), flip(), shift()],
});

const showTooltip = () => {
  isHovered.value = true;
};

const hideTooltip = () => {
  if (!isTooltipHovered.value) {
    setTimeout(() => {
      isHovered.value = false;
    }, 300);
  }
};

const tooltipHovered = () => {
  isTooltipHovered.value = true;
};

const tooltipLeft = () => {
  setTimeout(() => {
    isTooltipHovered.value = false;
    isHovered.value = false;
  }, 200);
};
</script>

<template>
  <span
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    ref="reference"
    class="mb-2 text-[10px] border border-gspark-green text-gspark-green w-3 h-3 flex items-center rounded-full justify-center cursor-default transition hover:scale-110 hover:font-semibold"
    >i</span
  >
  <Transition name="fade">
    <div
      @mouseenter="tooltipHovered"
      @mouseleave="tooltipLeft"
      v-if="isHovered || isTooltipHovered"
      ref="floating"
      :style="floatingStyles"
      class="flex flex-col px-4 py-6 space-y-2 text-center bg-white rounded-md shadow-md w-[248px]"
    >
      <p>
        <slot name="content" />
      </p>
      <a
        class="font-semibold transition text-gspark-green hover:text-gspark-green/80"
        href="/"
        ><slot name="link"
      /></a>
    </div>
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
