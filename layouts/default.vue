<template>
  <main id="app">
    <sticky-nav />
    <nuxt />
    <bottom-footer />
  </main>
</template>

<script>
  import StickyNav from '@/components/StickyNav';
  import BottomFooter from '@/components/BottomFooter'

  export default {
    name: 'DefaultLayout',
    components: {
      StickyNav,
      BottomFooter
    },
  }
</script>
