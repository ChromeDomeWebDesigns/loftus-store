<template>
  <section class="my-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
    <!-- Image gallery -->
    <ProductsImageGallery :images="product.images" />

    <!-- Product info -->
    <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <ProductsMainInfo :product="product" :quantity="quantity" />

      <div class="mt-6">
        <LoftusQuantitySelector :quantity="quantity" @quantity-change="quantityChange" />
        <p v-if="product['sales-multiple']" class="tablet:text-xs mt-2">Sold in multiples: {{ product['sales-multiple'] }} units</p>
      </div>

      <div class="flex mt-4">
        <LoftusButton @click="addToCart" class="flex max-w-xs flex-1 items-center justify-center sm:w-full bg-primary text-white hover:bg-transparent hover:text-primary hover:border-primary">Add to cart</LoftusButton>
      </div>

      <ProductsAdditionalInfo :product="product" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/store/cart'

const CartStore = useCartStore()

const { product } = defineProps(['product'])
let quantity = ref(1)

function quantityChange(val) {
  quantity.value = val
}

function addToCart() {
  CartStore.updateCart({ itemId: product.id, quantity: quantity.value })
}
</script>
