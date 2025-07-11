import { defineStore } from 'pinia'
import Cookie from 'js-cookie'
import { CART_COOKIE } from '@/lib/constants'
import { useItemsStore } from '@/store/items'
import { getItemPrice } from '@/lib/calculators/price'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: {}
  }),
  getters: {
    getCart(state) {
      return Object.values(state.cart)
    },
    getItemsInCart(state) {
      return Object.keys(state.cart)
    },
    getCartItemPrice: (state) => {
      return (itemId) => {
        const ItemsStore = useItemsStore()
        const item = ItemsStore.getItemById(itemId)

        return item ? getItemPrice({ item, quantity: state.cart[itemId].quantity }) : 0
      }
    },
    getCartSubtotal(state) {
      let subtotal = 0
      Object.values(state.cart).forEach(item => { subtotal += this.getCartItemPrice(item.id) * item.quantity })
      return subtotal
    },
    getCartTotal() {
      return this.getCartSubtotal // TODO: Add freight and tax
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
    UPDATE_CART({ itemId, data }) {
      this.cart[itemId] = data

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

        this.inflateCartItems(Object.keys(this.cart))
      } catch {
        this.LOAD_CART_FROM_COOKIE({})
      }
    },
    updateCart ({ itemId, quantity = 1, mode = 'UPDATE' } = {}) {
      let calculatedQuantity = quantity

      if (mode === 'INCREMENT') {
       calculatedQuantity = this.cart[itemId] ? this.cart[itemId].quantity + quantity : quantity
      }

      this.UPDATE_CART({ itemId, data: { id: itemId, quantity: calculatedQuantity }})
    },
    removeItemFromCart(itemId) {
      this.REMOVE_FROM_CART(itemId)
    },
    clearCart() {
      this.CLEAR_CART()
    },
    async inflateCartItems(items) {
      const ItemsStore = useItemsStore()

      const promises = items.map((itemId => ItemsStore.fetchItemById({ itemId })))

      await Promise.all(promises)
    }
  },
})
