<template>
  <button :to="to" class="rounded-md p-3.5 text-sm font-semibold shadow-sm uppercase transition-all duration-200" @click="$emit('click')">
    <i v-if="icon" :class="icon" />
    <slot />
  </button>
</template>

<script setup>
  const { to, icon } = defineProps(['to', 'icon'])
</script>

