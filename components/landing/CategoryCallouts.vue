<template>
  <section class="grid phone:grid-cols-2 gap-y-8 gap-x-8 lg:space-y-0 mx-auto max-w-none my-12 px-8 tablet:px-12">
    <div v-for="callout in callouts" :key="callout.name" class="group relative">
      <img :src="callout.imageSrc" :alt="callout.imageAlt" class="w-full rounded-lg bg-white object-contain group-hover:opacity-75 lg:aspect-[3/2]" />
      <a :href="callout.href">
        <span class="absolute inset-0" />
      </a>
    </div>
  </section>
</template>

<script setup>
const callouts = [
  {
    imageSrc: '/images/callouts/LaFete_Quads_Callout.jpg',
    imageAlt: 'LaFete Quads new colors on sale now!',
    href: '/collections/lafete-quads',
  },
  {
    imageSrc: '/images/callouts/Mustaches_Callout.jpg',
    imageAlt: 'New american distributor of Mustache brand!',
    href: '/collections/mustache',
  },
]
</script>
