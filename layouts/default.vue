<template>
  <main id="app">
    <sticky-nav />
    <nuxt />
  </main>
</template>

<script>
  import StickyNav from '@/components/StickyNav';

  export default {
    name: 'DefaultLayout',
    components: {
      StickyNav,
    },
  }
</script>
