<template>
  <div class="sticky bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6">
    <form>
      <label for="discount-code" class="block text-sm/6 font-medium text-gray-700">Discount code</label>
      <div class="mt-2 flex space-x-4">
        <input type="text" id="discount-code" name="discount-code" class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        <button type="submit" class="rounded-md bg-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Apply</button>
      </div>
    </form>

    <dl class="mt-10 space-y-6 text-sm font-medium text-gray-500">
      <div class="flex justify-between">
        <dt>Subtotal</dt>
        <dd class="text-gray-900">${{ cartSubtotal }}</dd>
      </div>
      <div class="flex justify-between">
        <dt class="flex">
          Discount
          <span class="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs tracking-wide text-gray-600">{{ discount.code }}</span>
        </dt>
        <dd class="text-gray-900">-{{ discount.amount }}</dd>
      </div>
      <div class="flex items-center justify-between">
        <dt class="flex">
          <span>Freight</span>
          <LoftusLink to="#" class="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
            <span class="sr-only">Learn more about how shipping is calculated</span>
            <QuestionMarkCircleIcon class="size-5" aria-hidden="true" />
          </LoftusLink>
        </dt>
        <dd class="text-gray-900">TBD</dd>
      </div>
      <div class="flex items-center justify-between">
        <dt class="flex">
          <span>Tax</span>
          <LoftusLink to="#" class="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
            <span class="sr-only">Learn more about how tax is calculated</span>
            <QuestionMarkCircleIcon class="size-5" aria-hidden="true" />
          </LoftusLink>
        </dt>
        <dd class="text-gray-900">TBD</dd>
      </div>
      <div class="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
        <dt>Total</dt>
        <dd class="text-base">${{ cartTotal }}</dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useCartStore } from '@/store/cart'
  import { QuestionMarkCircleIcon } from '@heroicons/vue/20/solid'
  import { prettyNumber } from '@/lib/utils'

  const CartStore = useCartStore()

  const discount = { code: 'LOFTUS', amount: '$16.00' }

  const cartSubtotal = computed(() => {
    return prettyNumber(CartStore.getCartSubtotal, 2)
  })

  const cartTotal = computed(() => {
    return prettyNumber(CartStore.getCartTotal, 2)
  })
</script>
