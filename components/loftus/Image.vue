<template>
  <img :src="src" :alt="alt" />
</template>

<script setup>
  const { src, alt } = defineProps(['src', 'alt'])
</script>

