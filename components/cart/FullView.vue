<template>
  <div class="mx-auto max-w-2xl px-4 laptop:px-8 desktop:px-12 py-16 lg:max-w-full">
    <h1 class="text-4xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>

    <form class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
      <cart-item-list class="lg:col-span-7" :products="products" />

      <cart-summary class="lg:col-span-5" />
    </form>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Sienna',
    inStock: true,
    size: 'Large',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    inStock: false,
    leadTime: '3–4 weeks',
    size: 'Large',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35.00',
    color: 'White',
    inStock: true,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
    imageAlt: 'Insulated bottle with white base and black snap lid.',
  },
]
</script>
