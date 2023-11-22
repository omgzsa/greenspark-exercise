<script setup>
import { useFloating, offset, flip, shift } from '@floating-ui/vue';

const isVisible = ref(false);
const reference = ref(null);
const floating = ref(null);
const { floatingStyles } = useFloating(reference, floating, {
  placement: 'right-end',
  middleware: [offset({ crossAxis: -15 }), flip(), shift()],
});

const showTooltip = () => {
  isVisible.value = true;
};

const hideTooltip = () => {
  isVisible.value = false;
};
</script>

<template>
  <span
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    ref="reference"
    class="mb-2 text-[10px] border border-gspark-black w-3 h-3 flex items-center rounded-full justify-center cursor-default"
    >i</span
  >
  <div
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    v-if="isVisible"
    ref="floating"
    :style="floatingStyles"
    class="flex flex-col px-4 py-6 space-y-2 text-center bg-white rounded-md shadow-md w-[248px]"
  >
    <p>
      This widget links directly to your public profile so that you can easily
      share your impact with your customers. Turn it off here if you do not want
      the badge to link to it.
    </p>
    <a class="font-semibold text-gspark-green" href="/">View Public Profile</a>
  </div>
</template>
