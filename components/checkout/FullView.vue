<template>
  <section class="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
    <CheckoutMobileSummary :cart="cart" class="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden" />
    <CheckoutDesktopSummary :cart="cart" class="hidden w-full max-w-md flex-col bg-gray-50 lg:flex pt-8 max-h-[125vh]" />

    <CheckoutForm />
  </section>
</template>

<script setup>
  const { cart } = defineProps(['cart'])
</script>
