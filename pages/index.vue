<template>
  <article>
    <LandingHero />
    <LandingTopCategories />
    <LandingTrendingProducts />
    <LandingShoppingIncentives />
    <LandingOurPicks />
    <LandingCategoryCallouts />
    <LandingTopRatedProducts />
    <LandingTestimonials />
    <LandingBrands />
  </article>
</template>

<script setup>
  import { useCollectionsStore } from '~/store/collections'

  const CollectionsStore = useCollectionsStore()
  const ItemsStore = useItemsStore();

  await CollectionsStore.fetchCollectionById({ collectionId: '6732', inflate: true })
</script>
