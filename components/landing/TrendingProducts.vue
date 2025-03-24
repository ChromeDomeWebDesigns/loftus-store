<template>
  <section class="my-12">
    <LoftusSubHeading class="mb-8">Trending Products</LoftusSubHeading>
    <LandingTrendingProductsPillNav class="mb-8" :tabs="tabs" :selected="selectedTab" @change="tabChange" />
    <LoftusLoadingSpinner v-if="collectionLoading" />
    <LandingProductShowcase v-else :items="trendingProducts" :mobile-max="6" />
  </section>
</template>

<script setup>
  import { ref } from 'vue'
  import { computed } from 'vue'
  import { useCollectionsStore } from '@/store/collections'

  const tabs = [
    { name: 'Featured', value: 'featured' },
    { name: 'Latest', value: 'latest' },
    { name: 'Bestseller', value: 'bestseller' },
  ]

  const selectedTab = ref(tabs[0])

  const CollectionsStore = useCollectionsStore()
  const { collectionId } = defineProps(['collectionId'])

  const collection = computed(() => {
    return CollectionsStore.getCollectionById(collectionId)
  })

  const collectionLoading = computed(() => {
    return !collection?.value || collection?.value.loading
  })

  const trendingProducts = computed(() => {
    if (collectionLoading.value) {
      return []
    }

    if (selectedTab.value.value === tabs[0].value) {
      return collection.value.items.slice(0, 8)
    } else if (selectedTab.value.value === tabs[1].value) {
      return collection.value.items.slice(3, 11)
    }

    return collection.value.items.slice(5, 13)
  })

  function tabChange(tab) {
    selectedTab.value = tab
  }
</script>
