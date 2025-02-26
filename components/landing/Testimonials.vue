<template>
  <section class="relative isolate overflow-hidden bg-white my-12 px-8 tablet:px-12">
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
    <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <figure class="mt-10">
        <blockquote class="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
          <p>“{{ activeTestimonial.quote }}”</p>
        </blockquote>
        <figcaption class="mt-10">
          <img class="mx-auto size-10 rounded-full" :src="activeTestimonial.avatarImage" alt="Avatar image" />
          <div class="mt-4 flex items-center justify-center space-x-3 text-base">
            <div class="font-semibold text-gray-900">{{ activeTestimonial.name }}</div>
            <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <div class="text-gray-600">{{ activeTestimonial.role }}</div>
          </div>
        </figcaption>
      </figure>
    </div>
    <div class="flex w-full justify-center gap-2 py-8">
      <div v-for="(_, index) in testimonials" :key="index" class="w-[12px] h-[12px] bg-gray-300 rounded-full cursor-pointer hover:bg-primary transition-all duration-200" :class="isActive(index) ? 'bg-primary' : ''" @click="setActive(index)" />
    </div>
  </section>
</template>

<script setup>
  import { ref, computed } from 'vue'

  const activeIndex = ref(0)

  const testimonials = [
    {
      name: 'Emily Watkins',
      role: 'Event Coordinator, Radiance Creations',
      quote: 'We\'ve been ordering from Loftus International for over a year, and they never fail to impress. Their balloon selections are always fresh and on trend, which helps our team pull off memorable events for our clients. Plus, their customer service is outstanding! We\'re thrilled to partner with a wholesaler that shares our dedication to quality and reliability.',
      avatarImage: 'https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&dpr=2',
    },
    {
      name: 'Derek Lewis',
      role: 'Store Manager, Magic Emporium',
      quote: 'Our shop specializes in illusions and party tricks, and Loftus International has been an absolute game-changer for our business. Their product variety ensures we can always find new novelties to keep our regulars excited. The quality of the magic supplies has been consistently top-notch, making it easy to recommend them to other industry contacts.',
      avatarImage: 'https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&dpr=2',
    },
    {
      name: 'Nina Torres',
      role: 'Purchasing Director, Celebrate Supply Co.',
      quote: 'Working with Loftus International has significantly simplified our inventory management. Their bulk pricing is competitive, and their fulfillment process runs like clockwork. Thanks to their extensive selection of balloons and themed novelties, we\'ve been able to expand our product lines and cater to more niche events. Highly recommended!',
      avatarImage: 'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&dpr=2',
    },
  ]

  const activeTestimonial = computed(() => {
    return testimonials[activeIndex.value]
  })

  function isActive(index) {
    return index === activeIndex.value
  }

  function setActive(index) {
    activeIndex.value = index
  }
</script>
