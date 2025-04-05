<template>
  <li v-if="!itemLoading" class="flex p-6 overflow-hidden">
    <div class="shrink-0">
      <img :src="mainImage" class="rounded-md object-cover size-16" />
    </div>

    <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6 tablet:text-sm">
      <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
        <div class="text-sm">
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
          <div class="flex items-center text-sm">
            <label class="mr-1">Quantity:</label>
            <p>{{ quantity }}</p>
          </div>
          <p v-if="product['sales-multiple']" class="tablet:text-xs">Sold in multiples: {{ product['sales-multiple'] }} units</p>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
  import { CheckIcon, ClockIcon, XMarkIcon } from '@heroicons/vue/20/solid'
  import { useItemsStore } from '@/store/items'
  import { useCartStore } from '@/store/cart'

  const CartStore = useCartStore()
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

  function quantityChange(val) {
    CartStore.updateCart({ itemId, quantity: val })
  }

  function remove() {
    CartStore.removeItemFromCart(itemId)
  }
</script>
