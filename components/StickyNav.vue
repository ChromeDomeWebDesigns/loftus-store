<template>
  <section class="z-10 sticky top-0 bg-white">
    <div class="flex items-center px-4 tablet:px-8 py-2 border-b-2 border-primary">
      <div class="block tablet:hidden z-11 mr-auto p-4 text-xl">
        <button @click="showNav = !showNav">
          <i class="fas fa-bars" />
        </button>
      </div>
      <nuxt-link to="/">
        <img src="/images/Logo.png" width="75px">
      </nuxt-link>
      <div class="nav-collapse w-full" :class="{ 'show': showNav }">
        <nav class="flex items-center tablet:flex-row flex-col p-4">
          <div class="flex flex-1 justify-center tablet:flex-row flex-col">
            <nuxt-link class="mx-3 laptop:mx-6 font-light hover:text-primary transition-all duration-300" to="/menu-1">Menu Item 1</nuxt-link>
            <nuxt-link class="mx-3 laptop:mx-6 font-light hover:text-primary transition-all duration-300" to="/menu-2">Menu Item 2</nuxt-link>
            <nuxt-link class="mx-3 laptop:mx-6 font-light hover:text-primary transition-all duration-300" to="/menu-3">Menu Item 3</nuxt-link>
            <nuxt-link class="mx-3 laptop:mx-6 font-light hover:text-primary transition-all duration-300" to="/menu-4">Menu Item 4</nuxt-link>
            <nuxt-link class="mx-3 laptop:mx-6 font-light hover:text-primary transition-all duration-300" to="/menu-5">Menu Item 5</nuxt-link>
          </div>
        </nav>
      </div>
      <div class="flex items-center ml-auto">
        <nuxt-link to="/search" class="text-xl text-primary hover:text-primary-dark transition-all duration-300">
          <i class="fas fa-search" />
        </nuxt-link>
        <nuxt-link to="/account" class="text-xl px-4 text-primary hover:text-primary-dark transition-all duration-300">
          <i class="fas fa-user" />
        </nuxt-link>
        <nuxt-link to="/cart" class="w-max px-3 py-2 block rounded border font-light text-sm bg-primary text-white hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-300">
          <i class="fas fa-shopping-basket pr-1" />
          <span class="cart-size">{{ cartSize }} items</span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, computed } from 'vue'

  // Reactive state
  const showNav = ref(false)

  // Computed property
  const cartSize = computed(() => {
    // TODO: Hook up Cart Information
    return 0
  })
</script>

<style lang="scss" scoped>
  @import './assets/scss/breaks';

  section {
    font-size: 0.8em;

    @media (min-width: breaks(large-tablet)) {
      font-size: 0.9em;
    }

    @media (min-width: breaks(laptop)) {
      font-size: 1em
    }

    @media (max-width: breaks(tablet)) {
      .nav-collapse {
        top: 0;
        left: 0;
        margin-top: 4rem;
        background-color: white;
        position: absolute;
        visibility: hidden;
        transition: all 400ms;
        transform-origin: left top;
        transform: scaleY(0);
        border-bottom: 2px solid #2477CC;

        &.show {
          opacity: 1;
          visibility: visible;
          transform: scaleY(100%);
        }

        a {
          font-size: 1.2em;
        }
      }
    }
  }
</style>
