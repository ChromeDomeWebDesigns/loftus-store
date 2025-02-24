<template>
  <nuxt-link :to="to" class="link link-hover">
    <slot />
  </nuxt-link>
</template>

<script setup>
  const { to } = defineProps(['to', 'icon'])
</script>

