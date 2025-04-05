<template>
  <section class="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
    <CheckoutMobileSummary class="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden" />

    <CheckoutDesktopSummary class="hidden w-full max-w-md flex-col bg-gray-50 lg:flex pt-8" />

    <CheckoutForm />
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
