<template>
  <div class="mx-auto max-w-2xl px-4 laptop:px-8 desktop:px-12 my-8 lg:max-w-full">
    <h1 class="text-4xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>

    <form class="mt-8 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
      <CartItemList class="lg:col-span-7" :cart="cart" />

      <CartSummary class="lg:col-span-5" />
    </form>
  </div>
</template>

<script setup>
  const { cart } = defineProps(['cart'])
</script>
