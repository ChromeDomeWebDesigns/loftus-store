<template>
  <section class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:mt-0 lg:p-8">
    <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>

    <dl class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <dt class="text-sm text-gray-600">Subtotal</dt>
        <dd class="text-sm font-medium text-gray-900">${{ cartSubtotal }}</dd>
      </div>
      <div class="flex items-center justify-between border-t border-gray-200 pt-4">
        <dt class="flex items-center text-sm text-gray-600">
          <span>Freight estimate</span>
          <LoftusLink to="#" class="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
            <span class="sr-only">Learn more about how shipping is calculated</span>
            <QuestionMarkCircleIcon class="size-5" aria-hidden="true" />
          </LoftusLink>
        </dt>
        <dd class="text-sm font-medium text-gray-900">TBD</dd>
      </div>
      <div class="flex items-center justify-between border-t border-gray-200 pt-4">
        <dt class="flex text-sm text-gray-600">
          <span>Tax estimate</span>
          <LoftusLink to="#" class="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
            <span class="sr-only">Learn more about how tax is calculated</span>
            <QuestionMarkCircleIcon class="size-5" aria-hidden="true" />
          </LoftusLink>
        </dt>
        <dd class="text-sm font-medium text-gray-900">TBD</dd>
      </div>
      <div class="flex items-center justify-between border-t border-gray-200 pt-4">
        <dt class="text-base font-medium text-gray-900">Order total</dt>
        <dd class="text-base font-medium text-gray-900">${{ cartTotal }}</dd>
      </div>
    </dl>

    <div class="mt-6">
      <LoftusButtonLink to="/checkout" class="!w-full justify-center bg-primary text-white hover:bg-transparent hover:text-primary hover:border-primary">Checkout</LoftusButtonLink>
    </div>
  </section>
</template>

<script setup>
  import { computed } from 'vue'
  import { useCartStore } from '@/store/cart'
  import { QuestionMarkCircleIcon } from '@heroicons/vue/20/solid'
  import { prettyNumber } from '@/lib/utils'

  const CartStore = useCartStore()

  const cartSubtotal = computed(() => {
    return prettyNumber(CartStore.getCartSubtotal, 2)
  })

  const cartTotal = computed(() => {
    return prettyNumber(CartStore.getCartTotal, 2)
  })
</script>
