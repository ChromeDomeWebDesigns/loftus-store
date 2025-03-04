<template>
  <section class="flex p-4 bg-gray-100">
    <ol role="list" class="flex items-center space-x-4">
      <li>
        <div>
          <LoftusLink href="#" class="text-gray-400 hover:text-primary">
            <HomeIcon class="size-5 shrink-0" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </LoftusLink>
        </div>
      </li>
      <li v-for="page in pages" :key="page.name">
        <div class="flex items-center">
          <ChevronRightIcon class="size-5 shrink-0 text-gray-400" aria-hidden="true" />
          <LoftusLink v-if="!page.current" :href="page.href" class="ml-4 text-sm font-medium text-gray-500 hover:text-primary">{{ page.name }}</LoftusLink>
          <span v-else class="ml-4 text-sm font-medium text-gray-500">{{ page.name }}</span>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup>
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/20/solid'
const { pages } = defineProps(['pages'])

</script>
