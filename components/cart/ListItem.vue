<template>
  <li class="flex py-6 sm:py-10">
    <div class="shrink-0">
      <img :src="product.imageSrc" :alt="product.imageAlt" class="size-24 rounded-md object-cover sm:size-48" />
    </div>

    <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
      <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
        <div>
          <div class="flex justify-between">
            <h3 class="text-sm">
              <a :href="product.href" class="font-medium text-gray-700 hover:text-gray-800">{{ product.name }}</a>
            </h3>
          </div>
          <div class="mt-1 flex text-sm">
            <p class="text-gray-500">{{ product.color }}</p>
            <p v-if="product.size" class="ml-4 border-l border-gray-200 pl-4 text-gray-500">{{ product.size }}</p>
          </div>
          <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }}</p>
        </div>

        <div class="mt-4 sm:mt-0 sm:pr-9">
          <div class="grid w-full max-w-16 grid-cols-1">
            <select :aria-label="`Quantity, ${product.name}`" class="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6">
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

          <div class="absolute right-0 top-0">
            <LoftusButton type="button" class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500 border-0">
              <span class="sr-only">Remove</span>
              <XMarkIcon class="size-5" aria-hidden="true" />
            </LoftusButton>
          </div>
        </div>
      </div>

      <p class="mt-4 flex space-x-2 text-sm text-gray-700">
        <CheckIcon v-if="product.inStock" class="size-5 shrink-0 text-green-500" aria-hidden="true" />
        <ClockIcon v-else class="size-5 shrink-0 text-gray-300" aria-hidden="true" />
        <span>{{ product.inStock ? 'In stock' : `Ships in ${product.leadTime}` }}</span>
      </p>
    </div>
  </li>
</template>

<script setup>
  import { ChevronDownIcon } from '@heroicons/vue/16/solid'
  import { CheckIcon, ClockIcon, XMarkIcon } from '@heroicons/vue/20/solid'

  const { product } = defineProps(['product'])
</script>
