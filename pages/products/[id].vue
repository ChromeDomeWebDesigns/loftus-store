<template>
  <article class="px-4 laptop:px-8 desktop:px-12">
    <LoftusBreadcrumb :pages="pages" />

    <LoftusLoadingSpinner v-if="itemLoading" class="mt-8" />
    <template v-else>
      <ProductsOverview :product="product" />
      <ProductsReviews />
      <ProductsAdditionalProducts :collection-id="DEMO_COLLECTION_ID" />
    </template>
  </article>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useCollectionsStore } from '@/store/collections'
  import { useItemsStore } from '@/store/items'
  import { prettyNumber } from '@/lib/utils'

  const route = useRoute()
  const DEMO_COLLECTION_ID = ref('6732')
  const itemId = route.params.id

  const CollectionsStore = useCollectionsStore()
  const ItemsStore = useItemsStore()

  CollectionsStore.fetchCollectionById({ collectionId: DEMO_COLLECTION_ID.value, inflate: true })
  ItemsStore.fetchItemById({ itemId })

  const item = computed(() => {
    return ItemsStore.getItemById(itemId)
  })

  const itemLoading = computed(() => {
    return !item?.value || item?.value.loading
  })

  const product = computed(() => {
    if (itemLoading.value) {
      return null
    }

    return {
      ...item.value,
        details: [
        {
          name: 'Specifications',
          items: [
            `SKU: ${item.value.sku}`,
            `UPC: ${item.value.upc}`,
            productItemDimensions.value,
            productItemWeight.value,
            productPackDimensions.value,
            productPackWeight.value,
            productPackQuantity.value,
          ],
        },
        {
          name: 'Bulk Discounts',
          items: bulkDiscounts.value
        },
        {
          name: 'Shipping',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          name: 'Returns',
          description: 'We stand behind our products and accept returns for manufacturing defects; however, we are not a guaranteed sale wholesaler. To ensure you receive proper credit promptly, please follow these guidelines. Report any defects, shortages, or damages within 14 days of receiving your shipment. Provide at least seven photos—including the delivery label and all sides of the package—so we can process your claim quickly. Send these photos to becky@loftus.com. All returns must be pre-approved and assigned a return number; once you have that number, please return the merchandise to our warehouse within 10 days. Merchandise ordered in error will incur a 20% restocking fee. To avoid errors, have stock numbers and descriptions ready when placing your order. Return freight charges for items ordered in error are the customer’s responsibility. If you receive incorrect merchandise or are missing any items, contact us as soon as possible. We do our best to be accurate, but if we make a mistake, we want to correct it promptly. If previous returns are deemed unwarranted or abused, you may be asked to prepay return freight. Valid returns will have freight credited back, but you may be responsible for a portion of freight charges if all return guidelines are not followed. Also, please ensure only the returned merchandise is in the package—boxes containing extraneous items or trash may be discarded without credit.'
        }
      ],
    }
  })

  const pages = computed(() => {
    return [
      { name: 'All Products', href: '/collections/all-products', current: false },
      { name: `${item.value?.title || 'Loading...'}`, current: true },
    ]
  })

  const productItemDimensions = computed(() => {
    if (!item.value?.length || !item.value?.width || !item.value?.height) {
      return null
    }

    return `Item Dimensions: ${item.value.length}"L x ${item.value.width}"W x ${item.value.height}"H`
  })

  const productItemWeight = computed(() => {
    if (!item.value?.weight) {
      return null
    }

    return `Item Weight: ${item.value.weight} lbs`
  })

  const productPackDimensions = computed(() => {
    if (!item.value?.['inner-length'] || !item.value?.['inner-width'] || !item.value?.['inner-height']) {
      return null
    }

    return `Pack Dimensions: ${item.value['inner-length']}"L x ${item.value['inner-width']}"W x ${item.value['inner-height']}"H`
  })

  const productPackWeight = computed(() => {
    if (!item.value?.['inner-weight']) {
      return null
    }

    return `Pack Weight: ${item.value['inner-weight']} lbs`
  })

    const productPackQuantity = computed(() => {
    if (!item.value?.['inner-quantity']) {
      return null
    }

    return `Pack Count: ${item.value['inner-quantity']}`
  })

  const bulkDiscounts = computed(() => {
    if (!item.value?.quantityDiscounts) {
      return null
    }

    const price = item.value.price.sale || item.value.price.value
    const discounts = []

    const quantities = Object.keys(item.value.quantityDiscounts)

    quantities.forEach((quantity, index) => {
      const discountPercentage = item.value.quantityDiscounts[quantity]
      const value = price - (price * discountPercentage)
      let discountString = null

      if (index + 1 === quantities.length) {
        discountString = `${quantity}+: $${prettyNumber(value)} each (${prettyNumber(discountPercentage * 100, 0)}% discount)`
      } else {
        const nextQuantity = quantities[index + 1] - 1
        discountString = `${quantity} - ${nextQuantity}: $${prettyNumber(value)} each (${prettyNumber(discountPercentage * 100, 0)}% discount)`
      }

      discounts.push(discountString)
    })

    return discounts
  })
</script>
