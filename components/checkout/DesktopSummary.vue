<template>
  <section>
    <CheckoutItemList :cart="cart" class="max-h-[80vh] overflow-y-scroll" />
    <CheckoutOrderSummary />
  </section>
</template>

<script setup>
const { cart } = defineProps(['cart'])
</script>
