<template>
  <section class="my-12">
    <LoftusSubHeading class="mb-8">Top Rated</LoftusSubHeading>
    <LoftusShopItemList :items="topRated" />
  </section>
</template>

<script setup>
  import { computed } from 'vue'
  import { useCollectionsStore } from '~/store/collections'

  const CollectionsStore = useCollectionsStore()
  const { collectionId } = defineProps(['collectionId'])

  const topRated = computed(() => {
    const collection = CollectionsStore.getCollectionById(collectionId)

    if (!collection) {
      return []
    }

    return [collection.items[16], collection.items[15], collection.items[14], collection.items[5]]
  })
</script>
