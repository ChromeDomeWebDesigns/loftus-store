<template>
  <section class="my-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
    <!-- Image gallery -->
    <ProductsImageGallery :images="product.images" />

    <!-- Product info -->
    <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <ProductsMainInfo :product="product" />

      <div class="mt-10 flex">
        <LoftusButton type="submit" class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">Add to cart</LoftusButton>
      </div>

      <ProductsAdditionalInfo :product="product" />
    </div>
  </section>
</template>

<script setup>

const product = {
  name: 'Zip Tote Basket',
  price: '$140',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 2,
      name: 'Angled view',
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-02.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
        {
      id: 3,
      name: 'Angled view',
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-03.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    // More sections...
  ],
}

</script>
