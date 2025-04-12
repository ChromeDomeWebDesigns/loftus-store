<template>
  <input :type="type" :placeholder="placeholder" class="block w-full rounded-md bg-white p-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"  />
</template>

<script setup>
  const { type, placeholder } = defineProps(['type', 'placeholder'])
</script>
