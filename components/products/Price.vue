<template>
  <div>
    <div class="flex items-center tracking-tight flex-wrap gap-x-2">
      <p class="text-gray-900" :class="price.sale ? 'line-through': ''">${{ basePrice }}</p>
      <p v-if="price.sale" class="text-red-600">${{ salePrice }}</p>
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
  import { calculateBulkDiscount, calculatePrice, calculatePricePerUnit } from '@/lib/calculators/price'

  const { price, quantityDiscounts, quantity, salesMultiple } = defineProps(['price', 'quantityDiscounts', 'quantity', 'salesMultiple' ])

  const bulkDiscount = computed(() => {
    const value = calculateBulkDiscount({ quantity, quantityDiscounts })
    return {
      value,
      formatted: prettyNumber(value * 100, 0)
    }
  })

  const basePrice = computed(() => {
    return calculatePrice({ price: price.value, bulkDiscount: bulkDiscount.value.value })
  })

  const salePrice = computed(() => {
    return calculatePrice({ price: price.sale, bulkDiscount: bulkDiscount.value.value })
  })

  const pricePerUnit = computed(() => {
    return prettyNumber(calculatePricePerUnit({ price: price.sale || price.value, salesMultiple }))
  })
</script>
