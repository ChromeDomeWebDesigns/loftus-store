<template>
  <nuxt-link :to="to" class="hover:underline transition-all duration-200">
    <slot />
  </nuxt-link>
</template>

<script setup>
  const { to } = defineProps(['to', 'icon'])
</script>

