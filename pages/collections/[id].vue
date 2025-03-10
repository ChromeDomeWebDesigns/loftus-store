<template>
  <article class="px-4 laptop:px-8 desktop:px-12">
    <LoftusBreadcrumb :pages="pages" />
    <CollectionsFilterableProducts :items="items" :loading="collectionLoading" />
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

  const collection = computed(() => {
    return CollectionsStore.getCollectionById(DEMO_COLLECTION_ID)
  })

  const collectionLoading = computed(() => {
    return !collection?.value || collection?.value.loading
  })

  const items = computed(() => {
    if (collectionLoading.value) {
      return []
    }

    return collection.value.items
  })
</script>
