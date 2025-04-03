<template>
  <Dialog class="relative z-10" @close="$emit('close')">
    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
      <div class="fixed inset-0 hidden bg-gray-500/75 transition-opacity md:block" />
    </TransitionChild>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95" enter-to="opacity-100 translate-y-0 md:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 md:scale-100" leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
          <DialogPanel class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
            <div class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button type="button" class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8" @click="$emit('close')">
                <span class="sr-only">Close</span>
                <XMarkIcon class="size-6" aria-hidden="true" />
              </button>

              <ProductsOverview :product="product" />
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
  import { Dialog, DialogPanel, TransitionChild } from '@headlessui/vue'
  import { XMarkIcon } from '@heroicons/vue/24/outline'

  const { product } = defineProps(['product'])
</script>
