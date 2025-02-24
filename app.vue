<template>
  <main id="app">
    <sticky-nav />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <bottom-footer />
  </main>
</template>

<script>
  export default {
    name: 'DefaultLayout',
  }
</script>
