<template>
  <form class="mt-6">
    <h3 class="text-sm font-medium text-gray-600">Color</h3>

    <fieldset aria-label="Choose a color" class="mt-2">
      <RadioGroup v-model="selectedColor" class="flex items-center gap-x-3">
        <RadioGroupOption as="template" v-for="color in colors" :key="color.name" :value="color" :aria-label="color.name" v-slot="{ active, checked }">
          <div :class="[color.selectedColor, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
            <span aria-hidden="true" :class="[color.bgColor, 'size-8 rounded-full border border-black/10']" />
          </div>
        </RadioGroupOption>
      </RadioGroup>
    </fieldset>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import {
  RadioGroup,
  RadioGroupOption,
} from '@headlessui/vue'

const { colors } = defineProps(['colors'])

const selectedColor = ref(colors?.[0])
</script>
