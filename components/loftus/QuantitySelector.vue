<template>
  <div class="flex items-center w-max bg-gray-100 rounded px-3 py-2 text-sm">
    <label class="mr-1">Quantity</label>
    <div class="grid grid-cols-1">
      <select :value="quantity" @change="$emit('quantity-change', Number($event.target.value))" class="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6">
        <option
          v-for="option in options"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
      <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

// Define the props the component accepts
const props = defineProps({
  quantity: {
    type: Number,
    default: 1,
  },
});

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

</script>
