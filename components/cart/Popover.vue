<template>
  <Popover class="flow-root lg:relative">
    <PopoverButton class="flex items-center w-max rounded-md p-3.5 text-sm font-semibold shadow-sm uppercase transition-colors duration-200 border w-max bg-primary text-white hover:bg-transparent hover:text-primary hover:border-primary">
      <i class="fas fa-shopping-basket" />
      <span class="ml-2">{{ cartSize }} items</span>
    </PopoverButton>
    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <PopoverPanel v-slot="{ close }" class="text-sm absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-96 lg:rounded-lg lg:ring-1 lg:ring-black/5">
        <form class="mx-auto max-w-2xl px-4">
          <ul role="list" class="divide-y divide-gray-200 overflow-y-scroll max-h-[50vh]">
            <CartPopoverListItem v-for="item in cart" :key="item.id" :item-id="item.id" :quantity="item.quantity" />
          </ul>
        </form>

        <div class="border-t-2 border-gray-200 px-4 pt-2">
          <div class="flex items-center justify-between mb-2 text-lg">
            <p class="text-gray-600">Subtotal</p>
            <p class="font-medium text-gray-900">${{ cartSubtotal }}</p>
          </div>

          <LoftusButtonLink @click="closePopoverAndNavigate(close)" to="/checkout" class="!w-full justify-center bg-primary text-white hover:bg-transparent hover:text-primary hover:border-primary">Checkout</LoftusButtonLink>

          <p class="mt-2 sm:mt-4 text-center">
            <LoftusLink @click="closePopoverAndNavigate(close)" to="/cart" class="sm:text-sm font-medium text-primary hover:text-primary-dark">View Cart</LoftusLink>
          </p>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { computed } from 'vue'
  import { useCartStore } from '@/store/cart'
  import { prettyNumber } from '@/lib/utils'

  const CartStore = useCartStore()

  const cart = computed(() => {
    return CartStore.getCart
  })

  const cartSize = computed(() => {
    return CartStore.getCartSize
  })

  const cartSubtotal = computed(() => {
    return prettyNumber(CartStore.getCartSubtotal, 2)
  })

  function closePopoverAndNavigate(close) {
    close()
  }
</script>
