<template>
  <div class="mt-3">
    <h3 class="sr-only">Reviews</h3>
    <div class="flex items-center">
      <div class="flex items-center">
        <StarIcon v-for="star in [0, 1, 2, 3, 4]" :key="star" :class="[rating > star ? 'text-primary' : 'text-gray-300', 'size-5 shrink-0']" aria-hidden="true" />
      </div>
      <p class="sr-only">{{ rating }} out of 5 stars</p>
    </div>
  </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/20/solid'

const { rating } = defineProps(['rating'])
</script>
