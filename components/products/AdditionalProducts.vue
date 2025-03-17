<template>
  <section class="my-12">
    <LoftusSubHeading class="mb-8">You May Also Like</LoftusSubHeading>
    <LoftusLoadingSpinner v-if="collectionLoading" />
    <LandingProductShowcase v-else :items="additionalProducts" :mobile-max="4" />
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

  const additionalProducts = computed(() => {
    if (collectionLoading.value) {
      return []
    }

    return [collection.value.items[7], collection.value.items[8], collection.value.items[9], collection.value.items[10]]
  })
</script>
