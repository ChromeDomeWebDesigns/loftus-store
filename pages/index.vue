<template>
  <article>
    <LandingHero />
    <LandingTopCategories />
    <LandingTrendingProducts :collection-id="DEMO_COLLECTION_ID" />
    <LandingShoppingIncentives />
    <LandingOurPicks :collection-id="DEMO_COLLECTION_ID" />
    <LandingCategoryCallouts />
    <LandingTopRatedProducts :collection-id="DEMO_COLLECTION_ID" />
    <LandingTestimonials />
    <LandingBrands />
  </article>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useCollectionsStore } from '@/store/collections'

  const CollectionsStore = useCollectionsStore()
  const DEMO_COLLECTION_ID = ref('12327')

  CollectionsStore.fetchCollectionById({ collectionId: DEMO_COLLECTION_ID.value, inflate: true })
</script>
