<template>
  <article class="px-4 laptop:px-8 desktop:px-12">
    <CollectionsBreadcrumb :pages="pages" />
    <CollectionsFilterableProducts />
  </article>
</template>

<script setup>
const pages = [
  { name: 'Collections', href: '/collections', current: false },
  { name: 'All Products', current: true },
]
</script>
