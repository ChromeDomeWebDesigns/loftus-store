<template>
  <article class="px-4 laptop:px-8 desktop:px-12">
    <LoftusBreadcrumb :pages="pages" />
    <CollectionsFilterableProducts :items="items" />
  </article>
</template>

<script setup>
  import { computed } from 'vue'
  import { useCollectionsStore } from '~/store/collections'

  const pages = [
    { name: 'Collections', href: '/collections', current: false },
    { name: 'All Products', current: true },
  ]

  const CollectionsStore = useCollectionsStore()
  const DEMO_COLLECTION_ID = '6732'

  CollectionsStore.fetchCollectionById({ collectionId: DEMO_COLLECTION_ID, inflate: true })

  const items = computed(() => {
    const collection = CollectionsStore.getCollectionById(DEMO_COLLECTION_ID)

    if (!collection) {
      return []
    }

    return collection.items
  })
</script>
