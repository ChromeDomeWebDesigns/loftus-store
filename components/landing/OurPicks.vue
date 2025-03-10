<template>
  <section class="py-12 bg-primary text-white">
    <LoftusSubHeading class="mb-8">Our Picks</LoftusSubHeading>
    <LoftusLoadingSpinner v-if="collectionLoading" :alt="true" />
    <LandingProductShowcase v-else :items="ourPicks" :mobile-max="4" />
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

  const ourPicks = computed(() => {
    if (collectionLoading.value) {
      return []
    }

    return [collection.value.items[7], collection.value.items[8], collection.value.items[9], collection.value.items[10]]
  })
</script>
