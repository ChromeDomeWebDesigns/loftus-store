<template>
  <LoftusLink :to="link" class="block w-max hover:text-primary hover:no-underline m-4">
    <div class="rounded-full p-8 bg-gray-200 mb-4">
      <LoftusImage :src="image" class="max-h-[150px] h-full" />
    </div>
    <h5 class="text-center font-bold text-xl tracking-tight leading-none">{{ title }}</h5>
  </LoftusLink>
</template>

<script setup>
  const { title, image, link } = defineProps(['title', 'image', 'link'])
</script>
