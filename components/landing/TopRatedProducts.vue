<template>
  <section class="my-12">
    <LoftusSubHeading class="mb-8">Top Rated</LoftusSubHeading>
    <LoftusLoadingSpinner v-if="collectionLoading" />
    <LandingProductShowcase v-else :items="topRated" :mobile-max="4" />
  </section>
</template>

<script setup>
  import { computed } from 'vue'
  import { useCollectionsStore } from '@/store/collections'

  const CollectionsStore = useCollectionsStore()
  const { collectionId } = defineProps(['collectionId'])

  const collection = computed(() => {
    return CollectionsStore.getCollectionById(collectionId)
  })

  const collectionLoading = computed(() => {
    return !collection?.value || collection?.value.loading
  })

  const topRated = computed(() => {
    if (collectionLoading.value) {
      return []
    }

    return [collection.value.items[10], collection.value.items[11], collection.value.items[12], collection.value.items[13]]
  })
</script>
