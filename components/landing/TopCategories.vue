<template>
  <section class="my-12">
    <h3 class="text-center text-xl font-extrabold tracking-tight leading-none tablet:text-3xl xl:text-5xl mb-8">Top Categories</h3>
    <div class="grid mx-4 tablet:mx-8 phone:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 large-laptop:grid-cols-5 justify-items-center">
      <LandingCategoryItem v-for="(collection, index) in collections" :key="index" :class="collection.css" :title="collection.title" :image="collection.image" :link="collection.link" />
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'

  const COLLECTIONS = [
    {
      title: 'Balloons',
      image: '/images/collections/Balloons.png',
      link: '/collections/balloons',
      css: null
    },
    {
      title: 'Novelties',
      image: '/images/collections/Novelties.png',
      link: '/collections/novelties',
      css: null
    },
    {
      title: 'Magic',
      image: '/images/collections/Magic.png',
      link: '/collections/Magic',
      css: 'hidden tablet:block'
    },
    {
      title: 'Costumes',
      image: '/images/collections/Costumes.png',
      link: '/collections/costumes',
      css: 'hidden laptop:block'
    },
    {
      title: 'Party',
      image: '/images/collections/Party.png',
      link: '/collections/party',
      css: 'hidden large-laptop:block'
    }
  ]

  const collections = ref(COLLECTIONS)
</script>
