<template>
  <li v-if="!itemLoading" class="flex py-6 sm:py-10">
    <div class="shrink-0">
      <img :src="mainImage" class="size-24 rounded-md object-cover sm:size-48" />
    </div>

    <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
      <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
        <div>
          <div class="relative">
            <p class="text-sm font-thin text-gray-500">{{ product.collection }}</p>
            <p class="font-medium text-gray-900 truncate">
              <LoftusLink :href="product.href" class="hover:text-primary hover:no-underline">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ product.title }}
              </LoftusLink>
            </p>
          </div>
          <ProductsPrice :price="product.price" :quantity-discounts="product.quantityDiscounts" :quantity="quantity" :sales-multiple="product['sales-multiple']" class="text-2xl font-bold text-gray-900 flex-1 mr-2" />
        </div>

        <div class="mt-4 sm:mt-0 sm:pr-9">
          <div class="grid w-full max-w-16 grid-cols-1">
            <select class="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6">
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
    </div>
  </li>
</template>

<script setup>
  import { ChevronDownIcon } from '@heroicons/vue/16/solid'
  import { CheckIcon, ClockIcon, XMarkIcon } from '@heroicons/vue/20/solid'
  import { useItemsStore } from '@/store/items'

  const ItemsStore = useItemsStore()
  const { itemId, quantity } = defineProps(['itemId', 'quantity'])

  const item = computed(() => {
    return ItemsStore.getItemById(itemId)
  })

  const itemLoading = computed(() => {
    return !item?.value || item?.value.loading
  })

  const product = computed(() => {
    if (itemLoading.value) {
      return {}
    }

    return {
      ...item.value,
      href: `/products/${itemId}`,
    }
  })

  const mainImage = computed(() => {
    if (!item.value?.images) {
      return null
    }

    return item.value.images[0]
  })
</script>
