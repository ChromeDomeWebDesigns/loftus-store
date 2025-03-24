<template>
  <div class="divide-y divide-gray-200 border-t mt-12">
    <Disclosure as="div" v-for="detail in detailsBlock(product.details)" :key="detail.name" v-slot="{ open }">
      <h3>
        <DisclosureButton class="group relative flex w-full items-center justify-between py-6 text-left">
          <span :class="[open ? 'text-primary' : 'text-gray-900', 'text-sm font-medium']">{{ detail.name }}</span>
          <span class="ml-6 flex items-center">
            <PlusIcon v-if="!open" class="block size-6 text-gray-400 group-hover:text-primary" aria-hidden="true" />
            <MinusIcon v-else class="block size-6 text-primary group-hover:text-primaryDark" aria-hidden="true" />
          </span>
        </DisclosureButton>
      </h3>
      <DisclosurePanel as="div" class="pb-6">
        <p class="text-sm/6 text-gray-700 mb-4 pl-2">{{ detail.description }}</p>

        <ul role="list" class="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-gray-300">
          <li v-for="item in listItems(detail.items)" :key="item" class="pl-2">{{ item }}</li>
        </ul>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'

const { product } = defineProps(['product'])

function detailsBlock(details) {
  return details?.filter(detail => detail && (detail.items !== null || detail.description))
}

function listItems(items) {
  return items?.filter(item => item && item.value !== null)
}
</script>
