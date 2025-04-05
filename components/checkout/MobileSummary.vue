<template>
  <section>
    <Disclosure as="div" class="mx-auto max-w-lg" v-slot="{ open }">
      <div class="flex items-center justify-between">
        <h2 id="order-heading" class="text-lg font-medium text-gray-900">Your Order</h2>
        <DisclosureButton class="font-medium text-indigo-600 hover:text-indigo-500">
          <span v-if="open">Hide full summary</span>
          <span v-if="!open">Show full summary</span>
        </DisclosureButton>
      </div>

      <DisclosurePanel>
        <CheckoutItemList :cart="cart" />

        <CheckoutOrderSummary />
      </DisclosurePanel>

      <p v-if="!open" class="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900">
        <span class="text-base">Total</span>
        <span class="text-base">${{ cartTotal }}</span>
      </p>
    </Disclosure>
  </section>
</template>

<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { computed } from 'vue'
  import { useCartStore } from '@/store/cart'
  import { prettyNumber } from '@/lib/utils'

  const { cart } = defineProps(['cart'])

  const CartStore = useCartStore()

  const cartTotal = computed(() => {
    return prettyNumber(CartStore.getCartTotal, 2)
  })
</script>
