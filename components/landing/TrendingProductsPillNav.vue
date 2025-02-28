<template>
  <RadioGroup :default-value="selected" @update:modelValue="value => $emit('change', value)" class="flex justify-center gap-4 tablet:gap-8 px-4">
    <RadioGroupOption as="template" v-for="tab in tabs" :key="tab.name" :value="tab" v-slot="{ active, checked }" class="w-max" >
      <div class="cursor-pointer flex items-center justify-center rounded-md p-3 text-sm font-semibold uppercase" :class="[active ? 'ring-2 ring-primary ring-offset-2' : '', checked ? 'bg-primary text-white ring-0 hover:bg-primary-dark' : 'bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50', !active && !checked ? 'ring-inset' : '', active && checked ? 'ring-2' : '',]">{{ tab.name }}</div>
    </RadioGroupOption>
  </RadioGroup>
</template>

<script setup>
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'

const { tabs, selected } = defineProps(['tabs', 'selected'])
</script>
