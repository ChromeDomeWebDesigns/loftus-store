<template>
  <Dialog class="relative z-40 lg:hidden" @close="$emit('close')">
    <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
      <div class="fixed inset-0 bg-black/25" />
    </TransitionChild>

    <div class="fixed inset-0 z-40 flex">
      <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="translate-x-full">
        <DialogPanel class="relative ml-auto flex size-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
          <div class="flex items-center justify-between px-4 mb-4">
            <h2 class="text-lg font-medium text-gray-900">Filters</h2>
            <LoftusButton type="button" class="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:text-primary" @click="$emit('close')">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </LoftusButton>
          </div>

          <!-- Filters -->
          <form class="p-4 border-t border-gray-200">
            <CollectionsSearchFacets :collections="collections" :filters="filters" />
          </form>
        </DialogPanel>
      </TransitionChild>
    </div>
  </Dialog>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  TransitionChild,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const { collections, filters } = defineProps(['collections', 'filters'])
</script>
