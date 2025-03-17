<template>
  <section>
    <ul role="list" class="divide-y divide-gray-200 border-b border-t border-gray-200">
      <CartListItem v-for="product in products" :key="product.id" :product="product" />
    </ul>
  </section>
</template>

<script setup>
  const { products } = defineProps(['products'])
</script>
