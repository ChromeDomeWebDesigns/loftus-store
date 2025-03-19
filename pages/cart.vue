<template>
  <article>
    <client-only>
      <cart-full-view :cart="cart" />
    </client-only>
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

