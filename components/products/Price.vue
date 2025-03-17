<template>
  <div>
    <div class="flex items-center tracking-tight flex-wrap gap-x-2">
      <p class="text-gray-900" :class="price.sale ? 'line-through': ''">${{ calculatedPrice }}</p>
      <p v-if="price.sale" class="text-red-600">${{ calculatedSale }}</p>
    </div>
    <p v-if="pricePerUnit" class="font-normal text-xs laptop:text-xxxs text-gray-500 tracking-tight">(${{ pricePerUnit }} / unit)</p>
    <div v-if="bulkDiscount.value" class="mt-2 text-xxxs flex items-center rounded w-max p-2 bg-primary/10">
      <i class="fas fa-bell mr-2 text-primary" />
      <p>{{ bulkDiscount.formatted }}% Bulk Discount Applied!</p>
    </div >
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { prettyNumber } from '@/lib/utils'

  const { price, quantityDiscounts, quantity, salesMultiple } = defineProps(['price', 'quantityDiscounts', 'quantity', 'salesMultiple' ])

  const bulkDiscount = computed(() => {
    if (!quantityDiscounts) {
      return null
    }

    const quantities = Object.keys(quantityDiscounts)
    let discountPercentage = 0

    quantities.forEach(q => {
      const percentage = quantityDiscounts[q]

      if (quantity >= q) {
        discountPercentage = percentage
      }
    })

    return {
      value: discountPercentage,
      formatted: prettyNumber(discountPercentage * 100, 0)
    }
  })

  const calculatedPrice = computed(() => {
    if (!bulkDiscount.value.value) {
      return price.value
    }

    return calculatePrice(price.value)
  })

  const calculatedSale = computed(() => {
    if (!price.sale) {
      return null
    }

    if (!bulkDiscount.value.value) {
      return price.sale
    }

    return calculatePrice(price.sale)
  })

  const pricePerUnit = computed(() => {
    if (!salesMultiple) {
      return null
    }

    const base = calculatedSale.value || calculatedPrice.value

    return prettyNumber(base / salesMultiple)
  })

  function calculatePrice(val) {
    return val - (val * bulkDiscount.value.value)
  }
</script>
