<template>
  <section class="my-12">
    <LoftusSubHeading class="mb-8">Trending Products</LoftusSubHeading>
    <LandingTrendingProductsPillNav class="mb-8" :tabs="tabs" :selected="selectedTab" @change="tabChange" />
    <LandingProductShowcase :items="trendingProducts" :mobile-max="6" />
  </section>
</template>

<script setup>
  import { ref } from 'vue'
  import { computed } from 'vue'
  import { useCollectionsStore } from '~/store/collections'

  const tabs = [
    { name: 'Featured', value: 'featured' },
    { name: 'Latest', value: 'latest' },
    { name: 'Bestseller', value: 'bestseller' },
  ]

  const selectedTab = ref(tabs[0])

  const CollectionsStore = useCollectionsStore()
  const { collectionId } = defineProps(['collectionId'])

  const trendingProducts = computed(() => {
    const collection = CollectionsStore.getCollectionById(collectionId)

    if (!collection) {
      return []
    }

    if (selectedTab.value.value === tabs[0].value) {
      return collection.items.slice(0, 8)
    } else if (selectedTab.value.value === tabs[1].value) {
      return collection.items.slice(4, 12)
    }

    return collection.items.slice(10, 18)
  })

  function tabChange(tab) {
    selectedTab.value = tab
  }
</script>
