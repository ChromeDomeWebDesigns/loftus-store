<template>
  <div class="flex items-center tracking-tight">
    <p class="text-gray-900" :class="price.sale ? 'line-through': ''">${{ calculatedPrice }}</p>
    <p v-if="price.sale" class="ml-2 text-red-600">${{ calculatedSale }}</p>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  const { price, quantityDiscounts, quantity } = defineProps(['price', 'quantityDiscounts', 'quantity'])

  const calculatedPrice = computed(() => {
    if (!quantityDiscounts) {
      return price.value
    }

    return calculatePrice(price.value)
  })

  const calculatedSale = computed(() => {
    if (!price.sale) {
      return null
    }

    if (!quantityDiscounts) {
      return price.sale
    }

    return calculatePrice(price.sale)
  })

  function calculatePrice(val) {
    const quantities = Object.keys(quantityDiscounts)
    let discountedPrice = val

    quantities.forEach(q => {
      const discountPercentage = quantityDiscounts[q]

      if (quantity >= q) {
        discountedPrice = val - (val * discountPercentage)
      }
    })

    return discountedPrice
  }
</script>
