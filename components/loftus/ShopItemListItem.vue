<template>
  <div class="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white pt-4">
    <LoftusLoadingSpinner v-if="itemLoading" class="mb-6" />

    <template v-else>
      <div class="group relative flex flex-col">
        <LoftusButton class="!rounded-full bg-white text-black absolute top-[10px] right-[10px] z-[5] hover:bg-primary hover:text-white"><i class="fas fa-eye"/></LoftusButton>
        <LoftusImage :src="mainImage" :alt="product.title" class="aspect-[3/4] w-full bg-white object-contain group-hover:opacity-75 sm:aspect-auto sm:h-64" />
        <div class="flex flex-1 flex-col space-y-2 p-4">
          <p class="text-sm font-thin text-gray-500">{{ product.collection }}</p>
          <p class="font-medium text-gray-900 truncate">
            <LoftusLink :href="product.href" class="hover:text-primary hover:no-underline">
              <span aria-hidden="true" class="absolute inset-0" />
              {{ product.title }}
            </LoftusLink>
          </p>
          <div class="flex items-center">
            <ProductsPrice :price="product.price" :quantity-discounts="product.quantityDiscounts" :quantity="quantity" :case-quantity="product['case-quantity']" class="text-lg font-bold text-gray-900 flex-1 mr-2" />
            <div class="text-sm bg-primary text-white rounded p-1">
              <span class="pr-1">{{ product.rating }}</span>
              <i class="fas fa-star text-yellow-500" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center p-2 m-auto w-full">
        <LoftusButton icon="fas fa-cart-plus" class="!w-full justify-center bg-primary text-xxs text-white hover:bg-transparent hover:text-primary hover:border-primary"><span class="hidden phablet:block">Add to Cart</span></LoftusButton>
      </div>
    </template>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { ChevronDownIcon } from '@heroicons/vue/16/solid'
  import { useItemsStore } from '~/store/items'

  const ItemsStore = useItemsStore()
  const { itemId } = defineProps(['itemId'])

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
    if (!product.value?.images) {
      return null
    }

    return product.value.images[0]
  })

  const quantity = ref(1)
</script>
