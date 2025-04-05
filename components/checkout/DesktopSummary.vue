<template>
  <section>
    <CheckoutItemList :cart="cart" class="max-h-[80vh] overflow-y-scroll" />
    <CheckoutSummaryTotal />
  </section>
</template>

<script setup>
const { cart } = defineProps(['cart'])
</script>
