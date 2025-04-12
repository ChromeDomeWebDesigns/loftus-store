<template>
  <div class="grid grid-cols-1">
    <LoftusInput type="email" placeholder="Email" class="col-start-1 row-start-1 pl-10 sm:pl-9" />
    <EnvelopeIcon class="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4" aria-hidden="true" />
  </div>
</template>

<script setup>
  import { EnvelopeIcon } from '@heroicons/vue/16/solid'
</script>
