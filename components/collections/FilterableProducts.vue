<template>
  <div>
    <!-- Mobile filter dialog -->
    <TransitionRoot as="template" :show="mobileFiltersOpen">
      <CollectionsMobileFiltersFlyout @close="mobileFiltersOpen = false" :filters="filters" :collections="collections" />
    </TransitionRoot>

    <main class="mx-auto">
      <CollectionsTopFilterBar title="All Products" :sort-options="sortOptions" @openMobileFlyout="mobileFiltersOpen = true" />

      <section aria-labelledby="products-heading" class="pb-24 pt-6">
        <h2 id="products-heading" class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <!-- Filters -->
          <form class="hidden lg:block">
            <CollectionsSearchFacets :filters="filters" :collections="collections" />
          </form>

          <!-- Product grid -->
          <div class="grid gap-2 laptop:gap-4 grid-cols-2 tablet:grid-cols-3 lg:col-span-3 ">
            <LoftusShopItemListItem v-for="item in items" :key="item" :item-id="item" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
} from '@headlessui/vue'

const { items } = defineProps(['items'])

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

const collections = [
  {
    title: 'All Products',
    link: '/collections/all-products',
    active: true
  },
  {
    title: 'Balloons',
    link: '/collections/balloons',
  },
  {
    title: 'Novelties',
    link: '/collections/novelties',
  },
  {
    title: 'Magic',
    link: '/collections/magic',
  },
  {
    title: 'Costumes',
    link: '/collections/costumes',
  },
  {
    title: 'Party',
    link: '/collections/party',
  }
]

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'brand',
    name: 'Brand',
    options: [
      { value: 'anagram', label: 'Anagram', checked: false },
      { value: 'eddy', label: 'Eddy', checked: false },
      { value: 'empire', label: 'Empire', checked: true },
      { value: 'ja-ru', label: 'Ja-Ru', checked: false },
      { value: 'la-fete', label: 'La Fete', checked: false },
      { value: 'mehron', label: 'Mehron', checked: false },
      { value: 'mustaches', label: 'Mustaches', checked: false },
      { value: 'Tuftex', label: 'Tuftex', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: 'inch_17', label: '17"', checked: false },
      { value: 'inch_30', label: '30"', checked: false },
    ],
  },
]

const mobileFiltersOpen = ref(false)
</script>
