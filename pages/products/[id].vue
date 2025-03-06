<template>
  <article class="px-4 laptop:px-8 desktop:px-12">
    <LoftusBreadcrumb :pages="pages" />
    <ProductsOverview />
  </article>
</template>

<script setup>
  const pages = [
    { name: 'All Products', href: '/collections/all-products', current: false },
    { name: 'Item #', current: true },
  ]
</script>
