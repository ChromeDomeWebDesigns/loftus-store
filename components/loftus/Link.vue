<template>
  <nuxt-link :to="to" class="hover:underline transition-colors duration-200">
    <slot />
  </nuxt-link>
</template>

<script setup>
  const { to } = defineProps(['to', 'icon'])
</script>

