<template>
  <div class="flex items-center gap-4">
    <TheLogo />
    <div class="space-y-1">
      <p class="widget-lead"><slot name="lead" /></p>
      <h4 class="widget-title">
        <slot name="title" />
      </h4>
    </div>
  </div>
</template>
