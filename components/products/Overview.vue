<template>
  <section class="my-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
    <!-- Image gallery -->
    <ProductsImageGallery :images="product.images" />

    <!-- Product info -->
    <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <ProductsMainInfo :product="product" />

      <div class="mt-10 flex">
        <LoftusButton type="submit" class="flex max-w-xs flex-1 items-center justify-center sm:w-full bg-primary text-white hover:bg-transparent hover:text-primary hover:border-primary">Add to cart</LoftusButton>
      </div>

      <ProductsAdditionalInfo :product="product" />
    </div>
  </section>
</template>

<script setup>

const { product } = defineProps(['product'])

</script>
