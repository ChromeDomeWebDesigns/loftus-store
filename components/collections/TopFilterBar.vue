<template>
  <section class="flex items-baseline justify-between border-b border-gray-200 pb-6 mt-8">
    <h1 class="text-4xl font-bold tracking-tight text-gray-900">{{ title }}</h1>

    <div class="flex items-center">
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-primary">
            Sort
            <ChevronDownIcon class="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-primary" aria-hidden="true" />
          </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <MenuItems class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none">
            <div class="py-1">
              <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                <LoftusLink :href="option.href" :class="[option.current ? 'font-medium text-primary' : 'text-gray-500', active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm']" class="hover:text-primary hover:no-underline">{{ option.name }}</LoftusLink>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>

      <LoftusButton class="-m-2 ml-5 p-2 text-gray-400 hover:text-primary sm:ml-7">
        <span class="sr-only">View grid</span>
        <Squares2X2Icon class="size-5" aria-hidden="true" />
      </LoftusButton>
      <LoftusButton class="-m-2 ml-4 p-2 text-gray-400 hover:text-primary sm:ml-6 lg:hidden" @click="$emit('openMobileFlyout')">
        <span class="sr-only">Filters</span>
        <FunnelIcon class="size-5" aria-hidden="true" />
      </LoftusButton>
    </div>
  </section>
</template>

<script setup>
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import { ChevronDownIcon, FunnelIcon, Squares2X2Icon } from '@heroicons/vue/20/solid'

const { title } = defineProps(['title', 'sortOptions'])
</script>
