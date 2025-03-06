<template>
  <TabGroup as="div" class="flex flex-col-reverse">
    <!-- Image selector -->
    <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
      <TabList class="grid grid-cols-4 gap-6">
        <Tab v-for="image in images" :key="image.id" class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-primary/50 focus:ring-offset-4" v-slot="{ selected }">
          <span class="sr-only">{{ image.name }}</span>
          <span class="absolute inset-0 overflow-hidden rounded-md">
            <img :src="image.src" alt="" class="size-full object-cover" />
          </span>
          <span :class="[selected ? 'ring-primary' : 'ring-transparent', 'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2']" aria-hidden="true" />
        </Tab>
      </TabList>
    </div>

    <TabPanels>
      <TabPanel v-for="image in images" :key="image.id">
        <img :src="image.src" :alt="image.alt" class="aspect-square w-full object-cover sm:rounded-lg" />
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script setup>
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/vue'

const { images } = defineProps(['images'])
</script>
