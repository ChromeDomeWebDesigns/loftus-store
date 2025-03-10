<template>
  <section class="my-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
    <!-- Image gallery -->
    <ProductsImageGallery :images="product.images" />

    <!-- Product info -->
    <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <ProductsMainInfo :product="product" :quantity="quantity" />

      <div>
        <div class="mt-6 flex items-center w-max bg-gray-100 rounded px-3 py-2 text-sm">
          <label class="mr-1">Quantity</label>
          <div class="grid grid-cols-1">
            <select v-model="quantity" class="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
          </div>
        </div>
        <p v-if="product['case-quantity']" class="tablet:text-xs mt-2">Case count: {{ product['case-quantity'] }} units</p>
      </div>

      <div class="flex mt-4">
        <LoftusButton type="submit" class="flex max-w-xs flex-1 items-center justify-center sm:w-full bg-primary text-white hover:bg-transparent hover:text-primary hover:border-primary">Add to cart</LoftusButton>
      </div>

      <ProductsAdditionalInfo :product="product" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const { product } = defineProps(['product'])
const quantity = ref(1)
</script>
