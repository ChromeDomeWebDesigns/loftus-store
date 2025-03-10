<template>
  <NuxtImg :src="src" :alt="alt" loading="lazy" />
</template>

<script setup>
  const { src, alt } = defineProps(['src', 'alt'])
</script>

