<template>
  <section>
    <ul role="list" class="divide-y divide-gray-200 border-b border-t border-gray-200">
      <CheckoutListItem v-for="item in cart" :key="item.id" :item-id="item.id" :quantity="item.quantity" />
    </ul>
  </section>
</template>

<script setup>
  const { cart } = defineProps(['cart'])
</script>
