<template>
  <button class="flex items-center w-max rounded-md p-3.5 text-sm font-semibold uppercase border transition-colors duration-200">
    <i v-if="icon" :class="icon" class="pr-2" />
    <slot />
  </button>
</template>

<script setup>
  const { to, icon } = defineProps(['to', 'icon'])
</script>

