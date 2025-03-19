<template>
  <article>
    <cart-full-view :cart="cart" />
  </article>
</template>

<script setup>
  import { computed } from 'vue'
  import { useCartStore } from '@/store/cart'

  const CartStore = useCartStore()

  const cart = computed(() => {
    return CartStore.getCart
  })
</script>

