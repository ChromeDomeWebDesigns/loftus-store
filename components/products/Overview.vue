<template>
  <section class="my-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
    <!-- Image gallery -->
    <ProductsImageGallery :images="product.images" />

    <!-- Product info -->
    <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <ProductsMainInfo :product="product" />

      <div class="mt-10 flex">
        <LoftusButton type="submit" class="flex max-w-xs flex-1 items-center justify-center sm:w-full bg-primary text-white hover:bg-transparent hover:text-primary hover:border-primary">Add to cart</LoftusButton>
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
      name: 'Specifications',
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
    {
      name: 'Shipping',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'Returns',
      description: 'We stand behind our products and accept returns for manufacturing defects; however, we are not a guaranteed sale wholesaler. To ensure you receive proper credit promptly, please follow these guidelines. Report any defects, shortages, or damages within 14 days of receiving your shipment. Provide at least seven photos—including the delivery label and all sides of the package—so we can process your claim quickly. Send these photos to becky@loftus.com. All returns must be pre-approved and assigned a return number; once you have that number, please return the merchandise to our warehouse within 10 days. Merchandise ordered in error will incur a 20% restocking fee. To avoid errors, have stock numbers and descriptions ready when placing your order. Return freight charges for items ordered in error are the customer’s responsibility. If you receive incorrect merchandise or are missing any items, contact us as soon as possible. We do our best to be accurate, but if we make a mistake, we want to correct it promptly. If previous returns are deemed unwarranted or abused, you may be asked to prepay return freight. Valid returns will have freight credited back, but you may be responsible for a portion of freight charges if all return guidelines are not followed. Also, please ensure only the returned merchandise is in the package—boxes containing extraneous items or trash may be discarded without credit.'
    }
  ],
}

</script>
