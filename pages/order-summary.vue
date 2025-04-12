<template>
  <article>
    <client-only>
      <OrderSummary :order="order" />
    </client-only>
  </article>
</template>

<script setup>
  import { computed } from 'vue'

  const order = computed(() => {
    // TODO: Hook this up to the Orders API
    return {
      id: '14034056',
      tracking: '51547878755545848512',
      subtotal: '147.60',
      freight: '47.00',
      tax: '17.43',
      total: '212.03',
      shipping: {
        company: 'Balloon World',
        name: 'Krystal Brown',
        address: '7363 Cynthia Pass',
        address2: null,
        address3: 'Toronto, ON N3Y 4H8'
      },
      items: [
        {
          id: '46154',
          quantity: 1
        },
        {
          id: '46431',
          quantity: 5
        }
      ]
    }
  })
</script>

