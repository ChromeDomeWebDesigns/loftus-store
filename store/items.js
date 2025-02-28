import { defineStore } from 'pinia'
// import { http } from '@/lib/https'
import { items as mockItems } from '@/lib/mock-data/items'
import { itemFormatter } from '@/lib/formatters/item'

export const useItemsStore = defineStore('items', {
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
    ADD_ITEM(item) {
      this.items.push(item)
    },
    LOAD_ITEMS(items) {
      this.items = items
    },
    LOAD_MORE_ITEMS(items) {
      this.items = this.items.concat(items)
    },

    // Actions
   async fetchItemById(itemId) {
      if (this.getItemById(itemId)) {
        return
      }

      try {
        this.UPDATE_LOADING(true)

        // const res = await http.get(`/api/items/${itemId}`)
        const res = mockItems[itemId]
        this.ADD_ITEM(itemFormatter(res))
      } catch (e) {
        console.error(e.message)
      } finally {
        this.UPDATE_LOADING(false)
      }
    },
  },
})
