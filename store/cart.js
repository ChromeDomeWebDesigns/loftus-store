import { defineStore } from 'pinia'
import Cookie from 'js-cookie'
import { CART_COOKIE } from '@/lib/constants'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: {}
  }),
  getters: {
    getCart(state) {
      return Object.values(state.cart)
    },
    isCartEmpty(state) {
      return Boolean(Object.values(state.cart).length <= 0)
    },
    getCartSize(state) {
      let size = 0
      Object.values(state.cart).forEach(item => { size += item.quantity })
      return size
    },
  },
  actions: {
    // Mutations
    LOAD_CART_FROM_COOKIE(cart) {
      Object.assign(this.cart, cart)
    },
    UPDATE_CART({ itemId, item }) {
      this.cart[itemId] = item

      Cookie.set(CART_COOKIE, JSON.stringify(this.cart), { expires: 7 })
    },
    REMOVE_FROM_CART(itemId) {
      delete this.cart[itemId]

      Cookie.set(CART_COOKIE, JSON.stringify(this.cart), { expires: 7 })
    },
    CLEAR_CART() {
      Object.assign(this.cart, {})

      Cookie.remove(CART_COOKIE)
    },

    // Actions
    loadCartFromCookie(cart) {
      try {
        this.LOAD_CART_FROM_COOKIE(JSON.parse(cart))
      } catch {
        this.LOAD_CART_FROM_COOKIE({})
      }
    },
    updateCart ({ itemId, item }) {
      this.UPDATE_CART({ itemId, item })
    },
    removeItemFromCart(itemId) {
      this.REMOVE_FROM_CART(itemId)
    },
    clearCart() {
      this.CLEAR_CART()
    },
  },
})
