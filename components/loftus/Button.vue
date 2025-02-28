<template>
  <button :to="to" class="flex items-center w-max rounded-md p-3.5 text-sm font-semibold shadow-sm uppercase transition-all duration-200" @click="$emit('click')">
    <i v-if="icon" :class="icon" class="pr-2" />
    <slot />
  </button>
</template>

<script setup>
  const { to, icon } = defineProps(['to', 'icon'])
</script>

