<template>
  <section class="z-10 sticky top-0 bg-white">
    <div class="flex items-center px-4 tablet:px-8 py-2 border-b-2 border-primary">
      <div class="block tablet:hidden z-11 mr-auto p-4 text-2xl">
        <LoftusButton @click="showNav = !showNav">
          <i class="fas fa-bars" />
        </LoftusButton>
      </div>
      <LoftusLink to="/">
        <LoftusImage src="/images/Logo.png" width="75px" />
      </LoftusLink>
      <div class="nav-collapse w-full" :class="{ 'show': showNav }">
        <nav class="flex items-center tablet:flex-row flex-col p-4">
          <div class="flex flex-1 justify-center tablet:flex-row flex-col">
            <LoftusLink class="mx-3 laptop:mx-6 font-light hover:text-primary hover:no-underline" to="/menu-1">Menu Item 1</LoftusLink>
            <LoftusLink class="mx-3 laptop:mx-6 font-light hover:text-primary hover:no-underline" to="/menu-2">Menu Item 2</LoftusLink>
            <LoftusLink class="mx-3 laptop:mx-6 font-light hover:text-primary hover:no-underline" to="/menu-3">Menu Item 3</LoftusLink>
            <LoftusLink class="mx-3 laptop:mx-6 font-light hover:text-primary hover:no-underline" to="/menu-4">Menu Item 4</LoftusLink>
            <LoftusLink class="mx-3 laptop:mx-6 font-light hover:text-primary hover:no-underline" to="/menu-5">Menu Item 5</LoftusLink>
          </div>
        </nav>
      </div>
      <div class="flex items-center ml-auto">
        <LoftusLink to="/search" class="text-xl text-primary hover:text-primary-dark">
          <i class="fas fa-search" />
        </LoftusLink>
        <LoftusLink to="/account" class="text-xl px-4 text-primary hover:text-primary-dark">
          <i class="fas fa-user" />
        </LoftusLink>
        <client-only>
          <CartPopover />
        </client-only>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'

  const showNav = ref(false)
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
