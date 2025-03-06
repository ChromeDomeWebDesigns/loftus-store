<template>
  <div>
    <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ product.title }}</h1>
    <p class="mt-3 text-3xl tracking-tight text-gray-900">{{ product.price }}</p>

    <ProductsRating :rating="product.rating" />

    <p class="mt-6 space-y-6 text-base text-gray-700">{{ product.description }}</p>

    <!-- TODO: Need to determine how to handle swatches and variants in API -->
    <!-- <ProductsColorSwatch :colors="product.colors" /> -->
  </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>
