<template>
  <nuxt-link :to="to" class="btn">
    <i v-if="icon" :class="icon" />
    <slot />
  </nuxt-link>
</template>

<script setup>
  const { to, icon } = defineProps(['to', 'icon'])
</script>

