<template>
  <main class="relative lg:min-h-full">
    <div>
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">
        <div>
          <h1 class="text-sm font-medium text-primary">Payment successful</h1>
          <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Thanks for ordering</p>
          <p class="mt-2 text-base text-gray-500">Your order #{{ order.id }} as been received! We're currently processing it. So hang tight and we'll send you confirmation very soon!</p>

          <dl class="mt-16 text-sm font-medium">
            <dt class="text-gray-900">Tracking number</dt>
            <dd class="mt-2 text-primary">{{ order.tracking }}</dd>
          </dl>

          <CheckoutItemList :cart="order.items" class="mt-6" />

          <dl class="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
            <div class="flex justify-between">
              <dt>Subtotal</dt>
              <dd class="text-gray-900">${{ formatNumber(order.subtotal) }}</dd>
            </div>

            <div class="flex justify-between">
              <dt>Freight</dt>
              <dd class="text-gray-900">${{ formatNumber(order.freight) }}</dd>
            </div>

            <div class="flex justify-between">
              <dt>Tax</dt>
              <dd class="text-gray-900">${{ formatNumber(order.tax) }}</dd>
            </div>

            <div class="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
              <dt class="text-base">Total</dt>
              <dd class="text-base">${{ formatNumber(order.total) }}</dd>
            </div>
          </dl>

          <dl class="mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600">
            <div>
              <dt class="font-medium text-gray-900">Shipping Address</dt>
              <dd class="mt-2">
                <address class="not-italic">
                  <span class="block">{{ order.shipping.company }}</span>
                  <span class="block">{{ order.shipping.name }}</span>
                  <span class="block">{{ order.shipping.address }}</span>
                  <span class="block">{{ order.shipping.address3 }}</span>
                </address>
              </dd>
            </div>
            <div>
              <dt class="font-medium text-gray-900">Payment Information</dt>
              <dd class="mt-2 space-y-2 sm:flex sm:space-x-4 sm:space-y-0">
                <div class="flex-none">
                  <svg aria-hidden="true" width="36" height="24" viewBox="0 0 36 24" class="h-6 w-auto">
                    <rect width="36" height="24" rx="4" fill="#224DBA" />
                    <path d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z" fill="#fff" />
                  </svg>
                </div>
                <div class="flex-auto">
                  <p class="text-gray-900">Ending with 4242</p>
                  <p>Expires 12 / 21</p>
                </div>
              </dd>
            </div>
          </dl>

          <div class="mt-16 border-t border-gray-200 py-6 text-right">
            <LoftusLink to="/" class="text-primary hover:text-primary-dark">
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </LoftusLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import { prettyNumber } from '@/lib/utils'
  const { order } = defineProps(['order'])



  function formatNumber(val) {
    return prettyNumber(val, 2)
  }
</script>
