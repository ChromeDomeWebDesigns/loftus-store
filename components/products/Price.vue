<template>
  <div>
    <div class="flex items-center tracking-tight flex-wrap gap-x-[0.35rem]">
      <p class="text-gray-900" :class="price.sale ? 'line-through': ''">${{ basePrice.formatted }}</p>
      <p v-if="price.sale" class="text-red-600">${{ salePrice.formatted }}</p>
      <p>per unit</p>
    </div>
    <p v-if="pricePerPack" class="font-normal text-xs laptop:text-xxxs text-gray-500 tracking-tight">(${{ pricePerPack }} / pack)</p>
    <div v-if="bulkDiscount.value" class="mt-2 text-xxxs flex items-center rounded w-max p-2 bg-primary/10">
      <i class="fas fa-bell mr-2 text-primary" />
      <p>{{ bulkDiscount.formatted }}% Bulk Discount Applied!</p>
    </div >
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { prettyNumber } from '@/lib/utils'
  import { calculateBulkDiscount, calculatePricePerUnit, calculatePricePerPack } from '@/lib/calculators/price'

  const { price, quantityDiscounts, quantity, salesMultiple } = defineProps(['price', 'quantityDiscounts', 'quantity', 'salesMultiple' ])

  const bulkDiscount = computed(() => {
    const value = calculateBulkDiscount({ quantity, quantityDiscounts })
    return {
      value,
      formatted: prettyNumber(Math.round(value * 100), 0)
    }
  })

  const basePrice = computed(() => {
    const value = calculatePricePerUnit({ price: price.value, bulkDiscount: bulkDiscount.value.value })
    return {
      value,
      formatted: prettyNumber(value, 2)
    }
  })

  const salePrice = computed(() => {
    const value = calculatePricePerUnit({ price: price.sale, bulkDiscount: bulkDiscount.value.value })

    return {
      value,
      formatted: prettyNumber(value, 2)
    }
  })

  const pricePerPack = computed(() => {
    return prettyNumber(calculatePricePerPack({ price: price.sale || price.value, salesMultiple, bulkDiscount: bulkDiscount.value.value }), 2)
  })
</script>
