<template>
  <button :to="to" class="btn" @click="$emit('click')">
    <i v-if="icon" :class="icon" />
    <slot />
  </button>
</template>

<script setup>
  const { to, icon } = defineProps(['to', 'icon'])
</script>

