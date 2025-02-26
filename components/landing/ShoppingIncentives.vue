<template>
  <div class="bg-white">
    <div class="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16">
      <div class="mx-auto max-w-xl lg:max-w-none">
        <div class="text-center">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">We built our business on customer service</h2>
        </div>
        <div class="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-4">
          <div v-for="incentive in incentives" :key="incentive.name" class="text-center sm:flex sm:text-left lg:block lg:text-center">
            <div class="sm:shrink-0">
              <div class="flow-root">
                <img class="mx-auto size-16" :src="incentive.imageSrc" alt="" />
              </div>
            </div>
            <div class="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
              <h3 class="text-sm font-medium text-gray-900">{{ incentive.name }}</h3>
              <p class="mt-2 text-sm text-gray-500">{{ incentive.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const incentives = [
  {
    name: 'International shipping',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-shipping-simple.svg',
    description: "Our trusted international delivery network ensures your orders arrive safely and on schedule, wherever you are.",
  },
  {
    name: 'Our guarantee',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-warranty-simple.svg',
    description: "We truly stand behind our products, if you spot a manufacturing defect, we'll make it right.",
  },
  {
    name: 'Returns',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      "We accept returns within 14 days of delivery on any defects, orders made in error may be subject to a restocking fee.",
  },
  {
    name: 'Community',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-planet-simple.svg',
    description:
      "Ready to become an exclusive Loftus member? Reach out to us today at sales@loftus.com!",
  },
]
</script>
