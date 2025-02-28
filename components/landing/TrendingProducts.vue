<template>
  <section class="my-12">
    <LoftusSubHeading class="mb-8">Trending Products</LoftusSubHeading>
    <LandingTrendingProductsPillNav class="mb-8" />
    <LoftusShopItemList :items="trendingProducts" />
  </section>
</template>

<script setup>
  import { computed } from 'vue'
  import { useCollectionsStore } from '~/store/collections'

  const CollectionsStore = useCollectionsStore()
  const { collectionId } = defineProps(['collectionId'])

  const trendingProducts = computed(() => {
    const collection = CollectionsStore.getCollectionById(collectionId)

    if (!collection) {
      return []
    }

    return collection.items.slice(0, 6)
  })
</script>
