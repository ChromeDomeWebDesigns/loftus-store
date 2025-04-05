<template>
  <section>
    <ul role="list" class="flex-auto divide-y divide-gray-200 overflow-y-auto px-6">
      <li v-for="product in products" :key="product.id" class="flex space-x-6 py-6">
        <img :src="product.imageSrc" :alt="product.imageAlt" class="size-40 flex-none rounded-md bg-gray-200 object-cover" />
        <div class="flex flex-col justify-between space-y-4">
          <div class="space-y-1 text-sm font-medium">
            <h3 class="text-gray-900">{{ product.name }}</h3>
            <p class="text-gray-900">{{ product.price }}</p>
            <p class="text-gray-500">{{ product.color }}</p>
            <p class="text-gray-500">{{ product.size }}</p>
          </div>
          <div class="flex space-x-4">
            <button type="button" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Edit</button>
            <div class="flex border-l border-gray-300 pl-4">
              <button type="button" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
            </div>
          </div>
        </div>
      </li>
    </ul>

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
          <dd class="text-gray-900">{{ subtotal }}</dd>
        </div>
        <div class="flex justify-between">
          <dt class="flex">
            Discount
            <span class="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs tracking-wide text-gray-600">{{ discount.code }}</span>
          </dt>
          <dd class="text-gray-900">-{{ discount.amount }}</dd>
        </div>
        <div class="flex justify-between">
          <dt>Taxes</dt>
          <dd class="text-gray-900">{{ taxes }}</dd>
        </div>
        <div class="flex justify-between">
          <dt>Shipping</dt>
          <dd class="text-gray-900">{{ shipping }}</dd>
        </div>
        <div class="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
          <dt>Total</dt>
          <dd class="text-base">{{ total }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { LockClosedIcon } from '@heroicons/vue/20/solid'

const subtotal = '$108.00'
const discount = { code: 'CHEAPSKATE', amount: '$16.00' }
const taxes = '$9.92'
const shipping = '$8.00'
const total = '$141.92'
const products = [
  {
    id: 1,
    name: 'Mountain Mist Artwork Tee',
    href: '#',
    price: '$36.00',
    color: 'Birch',
    size: 'L',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/checkout-form-04-product-01.jpg',
    imageAlt: 'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
  },
  // More products...
]
</script>
