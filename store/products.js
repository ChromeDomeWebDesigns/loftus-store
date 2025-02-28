import { defineStore } from 'pinia'
import { http } from '@/lib/https'

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: [],
    loading: false
  }),
  getters: {
    getItemById: (state) => {
      return (itemId) => state.items.find(({ id }) => id === itemId)
    },
  },
  actions: {
    // Mutations
    UPDATE_LOADING(loading) {
      this.loading = loading
    },

    // Actions
   async fetchItemById(itemId) {
      if (this.getItemById(itemId)) {
        return
      }

      try {
        this.UPDATE_LOADING(true)

        const res = await http.get(`/items/${itemId}`)
        // TODO: COORS
        // TODO: Add to store
        // TODO: Formatter
      } catch (e) {
        console.error(e.message)
      } finally {
        this.UPDATE_LOADING(false)
      }
    },
  },
})
