<template>
  <div class="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
    <div class="group relative flex flex-col">
      <LoftusButton class="!rounded-full bg-white absolute top-[10px] right-[10px] z-[10] hover:bg-primary hover:text-white"><i class="fas fa-eye"/></LoftusButton>
      <img :src="item.imageSrc" :alt="item.imageAlt" class="aspect-[3/4] w-full bg-gray-200 object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96" />
      <div class="flex flex-1 flex-col space-y-2 p-4">
        <p class="text-sm font-thin text-gray-500">Balloons</p>
        <p class="font-medium text-gray-900">
          <a :href="item.href">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ item.name }}
          </a>
        </p>
        <div class="flex items-center">
          <p class="text-lg font-bold text-gray-900 flex-1 mr-2">{{ item.price }}</p>
          <div class="text-sm bg-primary text-white rounded p-1">
            <span class="pr-1">5.0</span>
            <i class="fas fa-star text-yellow-500" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center m-3">
      <div class="flex items-center w-max bg-gray-100 rounded px-3 py-2 mr-2 text-sm">
        <label class="mr-1">Qty</label>
        <div class="grid grid-cols-1">
          <select :name="`quantity-${item.id}`" :aria-label="`Quantity, ${item.name}`" class="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
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
      <LoftusButton icon="fas fa-cart-plus" class="bg-primary text-white hover:bg-transparent hover:text-primary hover:border-primary"><span class="hidden phablet:block">Add to Cart</span></LoftusButton>
    </div>
  </div>
</template>

<script setup>
  import { ChevronDownIcon } from '@heroicons/vue/16/solid'
  const { item } = defineProps(['item'])
</script>
