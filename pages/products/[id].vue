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
  import { useCollectionsStore } from '~/store/collections'
  import { useItemsStore } from '~/store/items'
  import { prettyNumber } from '~/lib/utils'

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
            productCaseDimensions.value,
            productCaseWeight.value,
            productCaseQuantity.value,
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
      { name: `${product.value?.title || 'Loading...'}`, current: true },
    ]
  })

  const productItemDimensions = computed(() => {
    if (!product.value?.length || !product.value?.width || !product.value?.height) {
      return null
    }

    return `Item Dimensions: ${product.value.length}"L x ${product.value.width}"W x ${product.value.height}"H`
  })

  const productItemWeight = computed(() => {
    if (!product.value?.weight) {
      return null
    }

    return `Item Weight: ${product.value.weight} lbs`
  })

  const productPackDimensions = computed(() => {
    if (!product.value?.['inner-length'] || !product.value?.['inner-width'] || !product.value?.['inner-height']) {
      return null
    }

    return `Pack Dimensions: ${product.value['inner-length']}"L x ${product.value['inner-width']}"W x ${product.value['inner-height']}"H`
  })

  const productPackWeight = computed(() => {
    if (!product.value?.['inner-weight']) {
      return null
    }

    return `Pack Weight: ${product.value['inner-weight']} lbs`
  })

    const productPackQuantity = computed(() => {
    if (!product.value?.['inner-quantity']) {
      return null
    }

    return `Pack Count: ${product.value['inner-quantity']}`
  })

  const productCaseDimensions = computed(() => {
    if (!product.value?.['case-length'] || !product.value?.['case-width'] || !product.value?.['case-height']) {
      return null
    }

    return `Case Dimensions: ${product.value['case-length']}"L x ${product.value['case-width']}"W x ${product.value['case-height']}"H`
  })

  const productCaseWeight = computed(() => {
    if (!product.value?.['case-weight']) {
      return null
    }

    return `Case Weight: ${product.value['case-weight']} lbs`
  })

  const productCaseQuantity = computed(() => {
    if (!product.value?.['case-quantity']) {
      return null
    }

    return `Case Count: ${product.value['case-quantity']}`
  })

  const bulkDiscounts = computed(() => {
    if (!product.value?.quantityDiscounts) {
      return null
    }

    const price = product.value.price.sale || product.value.price.value
    const discounts = []

    const quantities = Object.keys(product.value.quantityDiscounts)

    quantities.forEach((quantity, index) => {
      const discountPercentage = product.value.quantityDiscounts[quantity]
      const value = price - (price * discountPercentage)
      let discountString = null

      if (index + 1 === quantities.length) {
        discountString = `${quantity}+: $${prettyNumber(value)} each (${discountPercentage * 100}% discount)`
      } else {
        const nextQuantity = quantities[index + 1] - 1
        discountString = `${quantity} - ${nextQuantity}: $${prettyNumber(value)} each (${discountPercentage * 100}% discount)`
      }

      discounts.push(discountString)
    })

    return discounts
  })
</script>
