<template>
  <main id="app">
    <sticky-nav :cart="cart" :cart-size="cartSize" />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <bottom-footer />
  </main>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useCartStore } from '@/store/cart'

  const CartStore = useCartStore()

  const cart = computed(() => {
    return CartStore.getCart
  })

  const cartSize = computed(() => {
    return CartStore.getCartSize
  })
</script>


