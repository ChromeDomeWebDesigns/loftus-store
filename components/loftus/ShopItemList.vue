<template>
  <div class="grid gap-4 laptop:gap-8 grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 px-4 laptop:px-8 desktop:px-12">
    <LoftusShopItemListItem v-for="item in formattedItems" :key="item.id" :item-id="item.id" :class="item.css" />
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  const { items } = defineProps(['items'])

  const formattedItems = computed(() => {
    if (!items) {
      return []
    }

    return items.map((item, index) => {
      return {
        id: item,
        css: index >= 5 ? 'hidden desktop:block' : ''
      }
    })
  })
</script>
