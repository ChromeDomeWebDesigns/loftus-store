<template>
  <section class="my-12">
    <LoftusSubHeading class="mb-8">You May Also Like</LoftusSubHeading>
    <LandingProductShowcase :items="additionalProducts" :mobile-max="4" />
  </section>
</template>

<script setup>
  import { computed } from 'vue'
  import { useCollectionsStore } from '~/store/collections'

  const CollectionsStore = useCollectionsStore()
  const { collectionId } = defineProps(['collectionId'])

  const additionalProducts = computed(() => {
    const collection = CollectionsStore.getCollectionById(collectionId)

    if (!collection) {
      return []
    }

    return [collection.items[7], collection.items[8], collection.items[9], collection.items[10]]
  })
</script>
