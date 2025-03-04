<template>
  <Dialog class="relative z-40 lg:hidden" @close="$emit('close')">
    <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
      <div class="fixed inset-0 bg-black/25" />
    </TransitionChild>

    <div class="fixed inset-0 z-40 flex">
      <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="translate-x-full">
        <DialogPanel class="relative ml-auto flex size-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
          <div class="flex items-center justify-between px-4">
            <h2 class="text-lg font-medium text-gray-900">Filters</h2>
            <button type="button" class="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400" @click="$emit('close')">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>

          <!-- Filters -->
          <form class="mt-4 border-t border-gray-200">
            <h3 class="sr-only">Categories</h3>
            <ul role="list" class="px-2 py-3 font-medium text-gray-900">
              <li v-for="category in subCategories" :key="category.name">
                <a :href="category.href" class="block px-2 py-3">{{ category.name }}</a>
              </li>
            </ul>

            <Disclosure as="div" v-for="section in filters" :key="section.id" class="border-t border-gray-200 px-4 py-6" v-slot="{ open }">
              <h3 class="-mx-2 -my-3 flow-root">
                <DisclosureButton class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                  <span class="font-medium text-gray-900">{{ section.name }}</span>
                  <span class="ml-6 flex items-center">
                    <PlusIcon v-if="!open" class="size-5" aria-hidden="true" />
                    <MinusIcon v-else class="size-5" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </h3>
              <DisclosurePanel class="pt-6">
                <div class="space-y-6">
                  <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex gap-3">
                    <div class="flex h-5 shrink-0 items-center">
                      <div class="group grid size-4 grid-cols-1">
                        <input :id="`filter-mobile-${section.id}-${optionIdx}`" :name="`${section.id}[]`" :value="option.value" type="checkbox" class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                        <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                          <path class="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path class="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <label :for="`filter-mobile-${section.id}-${optionIdx}`" class="min-w-0 flex-1 text-gray-500">{{ option.label }}</label>
                  </div>
                </div>
              </DisclosurePanel>
            </Disclosure>
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
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionChild,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { MinusIcon, PlusIcon } from '@heroicons/vue/20/solid'

const { subCategories, filters } = defineProps(['subCategories', 'filters'])
</script>
