<template>
  <div class="my-12 lg:grid lg:grid-cols-12 lg:gap-x-8">
    <div class="lg:col-span-4">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customer Reviews</h2>

      <div class="mt-3 flex items-center">
        <div>
          <div class="flex items-center">
            <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[reviews.average > rating ? 'text-primary' : 'text-gray-300', 'size-5 shrink-0']" aria-hidden="true" />
          </div>
          <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
        </div>
        <p class="ml-2 text-sm text-gray-900">Based on {{ reviews.totalCount }} reviews</p>
      </div>

      <div class="mt-6">
        <dl class="space-y-3">
          <div v-for="count in reviews.counts" :key="count.rating" class="flex items-center text-sm">
            <dt class="flex flex-1 items-center">
              <p class="w-3 font-medium text-gray-900">{{ count.rating }}<span class="sr-only"> star reviews</span></p>
              <div aria-hidden="true" class="ml-1 flex flex-1 items-center">
                <StarIcon :class="[count.count > 0 ? 'text-primary' : 'text-gray-300', 'size-5 shrink-0']" aria-hidden="true" />

                <div class="relative ml-3 flex-1">
                  <div class="h-3 rounded-full border border-gray-200 bg-gray-100" />
                  <div v-if="count.count > 0" class="absolute inset-y-0 rounded-full border border-primary bg-primary" :style="{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }" />
                </div>
              </div>
            </dt>
            <dd class="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">{{ Math.round((count.count / reviews.totalCount) * 100) }}%</dd>
          </div>
        </dl>
      </div>

      <div class="mt-10">
        <h3 class="text-lg font-medium text-gray-900">Share your thoughts</h3>
        <p class="mt-1 text-sm text-gray-600">If you've used this product, share your thoughts with other customers</p>

        <LoftusButtonLink href="#" class="mt-6 inline-flex !w-full sm:!w-auto lg:!w-full items-center justify-center border-primary bg-transparent text-primary hover:text-white hover:bg-primary">Write a review</LoftusButtonLink>
      </div>
    </div>

    <div class="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
      <h3 class="sr-only">Recent reviews</h3>

      <div class="flow-root">
        <div class="-my-12 divide-y divide-gray-200">
          <div v-for="review in reviews.featured" :key="review.id" class="py-12">
            <div class="flex items-center">
              <img :src="review.avatarSrc" :alt="`${review.author}.`" class="size-12 rounded-full" />
              <div class="ml-4">
                <h4 class="text-sm font-bold text-gray-900">{{ review.author }}</h4>
                <div class="mt-1 flex items-center">
                  <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[review.rating > rating ? 'text-primary' : 'text-gray-300', 'size-5 shrink-0']" aria-hidden="true" />
                </div>
                <p class="sr-only">{{ review.rating }} out of 5 stars</p>
              </div>
            </div>

            <p class="mt-4 space-y-6 text-base italic text-gray-600">{{ review.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/20/solid'

const reviews = {
  average: 4,
  totalCount: 21,
  counts: [
    { rating: 5, count: 10 },
    { rating: 4, count: 7 },
    { rating: 3, count: 2 },
    { rating: 2, count: 1 },
    { rating: 1, count: 1 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      author: 'Emily Watkins',
      content: 'These balloons are fantastic! The rich blue color really stands out, and they stayed inflated longer than expected. Great quality and value—would absolutely order again!',
      avatarSrc: 'https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&dpr=2',
    },
    {
      id: 2,
      rating: 4,
      author: 'Derek Lewis',
      content: 'Overall, these balloons were great and the color was exactly as advertised. A few seemed slightly less shiny, but they still performed well. I\'d definitely buy them again.',
      avatarSrc: 'https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&dpr=2',
    },
    {
      id: 3,
      rating: 5,
      author: 'Nina Torres',
      content: 'I was impressed with how durable these foil balloons were. They made our event décor look professional, and none of them popped prematurely. Highly recommend for all your party needs!',
      avatarSrc: 'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&dpr=2',
    },
  ],
}
</script>
