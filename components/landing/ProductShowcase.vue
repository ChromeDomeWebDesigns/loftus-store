<template>
  <div class="grid gap-4 laptop:gap-8 grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 phone:px-4 laptop:px-8 desktop:px-12">
    <LoftusShopItemListItem v-for="item in formattedItems" :key="item.id" :item-id="item.id" :class="item.css" />
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  const { items, mobileMax = 20 } = defineProps(['items', 'mobileMax'])

  const formattedItems = computed(() => {
    if (!items) {
      return []
    }

    return items.map((item, index) => {
      return {
        id: item,
        css: index >= mobileMax ? 'hidden desktop:block' : ''
      }
    })
  })
</script>
