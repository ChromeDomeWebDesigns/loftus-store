<template>
  <section class="flex-auto overflow-y-auto px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-0">
    <div class="mx-auto max-w-lg lg:pt-8">
      <form class="mt-6">
        <div class="grid grid-cols-12 gap-x-4 gap-y-2 my-8">
          <h5 class="col-span-full font-bold">Account</h5>

          <div class="col-span-full">
            <label for="company" class="block text-sm/6 font-medium text-gray-700">Company</label>
            <div class="mt-1">
              <LoftusInput type="text" id="company" name="company" class="px-3 py-2" />
            </div>
          </div>

          <div class="col-span-6">
            <label for="first-name" class="block text-sm/6 font-medium text-gray-700">First name</label>
            <div class="mt-1">
              <LoftusInput type="text" id="first-name" name="first-name" class="px-3 py-2" />
            </div>
          </div>

          <div class="col-span-6">
            <label for="last-name" class="block text-sm/6 font-medium text-gray-700">Last name</label>
            <div class="mt-1">
              <LoftusInput type="text" id="last-name" name="last-name" class="px-3 py-2" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="email-address" class="block text-sm/6 font-medium text-gray-700">Email address</label>
            <div class="mt-1">
              <LoftusInput type="email" id="email-address" name="email-address" autocomplete="email" class="px-3 py-2" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="phone" class="block text-sm/6 font-medium text-gray-700">Phone number</label>
            <div class="mt-1">
              <LoftusInput type="tel" id="phone" name="phone" autocomplete="tel" class="px-3 py-2" />
            </div>
          </div>
        </div>

        <div class="my-8">
          <h5 class="font-bold">Payment</h5>

          <div id="dropin-container"></div>
        </div>

        <div class="grid grid-cols-12 gap-x-4 gap-y-2 my-8">
          <h5 class="col-span-full font-bold">Shipping address</h5>

          <div class="col-span-full">
            <label for="country" class="block text-sm/6 font-medium text-gray-700">Country/Region</label>
            <div class="mt-1">
              <LoftusInput type="text" id="country" name="country" class="px-3 py-2" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="address-1" class="block text-sm/6 font-medium text-gray-700">Address 1</label>
            <div class="mt-1">
              <LoftusInput type="text" id="address-1" name="address-1" autocomplete="street-address" class="px-3 py-2" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="address-2" class="block text-sm/6 font-medium text-gray-700">Address 2</label>
            <div class="mt-1">
              <LoftusInput type="text" id="address-2" name="address-2" autocomplete="street-address" class="px-3 py-2" />
            </div>
          </div>

          <div class="col-span-full sm:col-span-4">
            <label for="city" class="block text-sm/6 font-medium text-gray-700">City</label>
            <div class="mt-1">
              <LoftusInput type="text" id="city" name="city" autocomplete="address-level2" class="px-3 py-2" />
            </div>
          </div>

          <div class="col-span-full sm:col-span-4">
            <label for="region" class="block text-sm/6 font-medium text-gray-700">State / Province</label>
            <div class="mt-1">
              <LoftusInput type="text" id="region" name="region" autocomplete="address-level1" class="px-3 py-2" />
            </div>
          </div>

          <div class="col-span-full sm:col-span-4">
            <label for="postal-code" class="block text-sm/6 font-medium text-gray-700">Postal code</label>
            <div class="mt-1">
              <LoftusInput type="text" id="postal-code" name="postal-code" autocomplete="postal-code" class="px-3 py-2" />
            </div>
          </div>
        </div>

        <div class="my-8 flex gap-3">
          <div class="flex h-5 shrink-0 items-center">
            <div class="group grid size-4 grid-cols-1">
              <input v-model="billingSameAsShipping" id="same-as-shipping" name="same-as-shipping" type="checkbox" class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto cursor-pointer" />
              <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                <path class="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path class="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <label for="same-as-shipping" class="text-sm font-medium text-gray-900 cursor-pointer">Use shipping address as billing address</label>
        </div>

        <div v-if="!billingSameAsShipping" class="grid grid-cols-12 gap-x-4 gap-y-2 my-8">
          <h5 class="col-span-full font-bold">Billing address</h5>

          <div class="col-span-full">
            <label for="country" class="block text-sm/6 font-medium text-gray-700">Country/Region</label>
            <div class="mt-1">
              <LoftusInput type="text" id="country" name="country" class="px-3 py-2" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="address-1" class="block text-sm/6 font-medium text-gray-700">Address 1</label>
            <div class="mt-1">
              <LoftusInput type="text" id="address-1" name="address-1" autocomplete="street-address" class="px-3 py-2" />
            </div>
          </div>

          <div class="col-span-full">
            <label for="address-2" class="block text-sm/6 font-medium text-gray-700">Address 2</label>
            <div class="mt-1">
              <LoftusInput type="text" id="address-2" name="address-2" autocomplete="street-address" class="px-3 py-2" />
            </div>
          </div>

          <div class="col-span-full sm:col-span-4">
            <label for="city" class="block text-sm/6 font-medium text-gray-700">City</label>
            <div class="mt-1">
              <LoftusInput type="text" id="city" name="city" autocomplete="address-level2" class="px-3 py-2" />
            </div>
          </div>

          <div class="col-span-full sm:col-span-4">
            <label for="region" class="block text-sm/6 font-medium text-gray-700">State / Province</label>
            <div class="mt-1">
              <LoftusInput type="text" id="region" name="region" autocomplete="address-level1" class="px-3 py-2" />
            </div>
          </div>

          <div class="col-span-full sm:col-span-4">
            <label for="postal-code" class="block text-sm/6 font-medium text-gray-700">Postal code</label>
            <div class="mt-1">
              <LoftusInput type="text" id="postal-code" name="postal-code" autocomplete="postal-code" class="px-3 py-2" />
            </div>
          </div>
        </div>

        <LoftusButtonLink to="/order-summary" class="my-8 !w-full justify-center bg-primary text-white hover:bg-transparent hover:text-primary hover:border-primary">Submit Order</LoftusButtonLink>

        <p class="mt-6 flex justify-center text-sm font-medium text-gray-500">
          <LockClosedIcon class="mr-1.5 size-5 text-gray-400" aria-hidden="true" />
          All transactions are secure and encrypted.
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import dropin, { Dropin } from 'braintree-web-drop-in'
import { LockClosedIcon } from '@heroicons/vue/20/solid'

const billingSameAsShipping = ref(true)
const dropinInstance = ref(Dropin)

try {
  dropin.create(
    {
      authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
      container: '#dropin-container',
    },
    (err, instance) => {
      if (err) {
        console.error('Error creating Drop-in:', err)
        return
      }
      dropinInstance.value = instance
    }
  )
} catch (error) {
  console.error('Error:', error)
}

</script>
