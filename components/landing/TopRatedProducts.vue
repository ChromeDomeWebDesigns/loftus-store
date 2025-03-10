<template>
  <section class="my-12">
    <LoftusSubHeading class="mb-8">Top Rated</LoftusSubHeading>
    <LoftusLoadingSpinner v-if="collectionLoading" />
    <LandingProductShowcase v-else :items="topRated" :mobile-max="4" />
  </section>
</template>

<script setup>
  import { computed } from 'vue'
  import { useCollectionsStore } from '~/store/collections'

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

    return [collection.value.items[16], collection.value.items[15], collection.value.items[14], collection.value.items[5]]
  })
</script>
