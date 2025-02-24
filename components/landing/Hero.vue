<template>
<section class="mosaic">
  <div class="grid max-w-screen-xl px-4 py-8 mx-auto tablet:gap-8 xl:gap-0 tablet:py-12 tablet:grid-cols-12">
    <div class="mr-auto place-self-center tablet:col-span-7">
      <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none tablet:text-5xl xl:text-8xl">Balloons, Novelties, Magic, & More!</h1>
      <p class="max-w-2xl mb-6 font-light text-gray-500 tablet:mb-8 tablet:text-lg tablet:text-xl">With nearly a century of knowledge in balloons, novelties, magic, and more, we empower businesses worldwide to captivate customers and make memorable impacts.</p>
      <LoftusButtonLink to="/all-products" class="bg-primary text-white hover:bg-transparent hover:text-primary hover:border-primary">
        Shop Now
      </LoftusButtonLink>
    </div>
    <div class="hidden tablet:mt-0 tablet:col-span-5 tablet:flex">
      <img src="/images/Hero.png" alt="mockup">
    </div>
  </div>
</section>
</template>

<style lang="scss" scoped>
  .mosaic {
    background: url('/bg/triangle-mosaic.png')
  }
</style>
