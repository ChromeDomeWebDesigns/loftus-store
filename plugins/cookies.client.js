import Cookie from 'js-cookie'
import { CART_COOKIE } from '@/lib/constants'
import { useCartStore } from '@/store/cart'

export default defineNuxtPlugin(() => {
  const cart = Cookie.get(CART_COOKIE)

  if (cart) {
    const CartStore = useCartStore()
    CartStore.loadCartFromCookie(cart)
  }
})

