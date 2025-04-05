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
        <span class="text-base">{{ total }}</span>
      </p>
    </Disclosure>
  </section>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { LockClosedIcon } from '@heroicons/vue/20/solid'

const { cart } = defineProps(['cart'])

const subtotal = '$108.00'
const discount = { code: 'CHEAPSKATE', amount: '$16.00' }
const taxes = '$9.92'
const shipping = '$8.00'
const total = '$141.92'
</script>
