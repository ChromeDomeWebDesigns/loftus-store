import { defineStore } from 'pinia'
import { itemFormatter } from '@/lib/formatters/item'

export const useItemsStore = defineStore('items', {
  state: () => ({
    items: [],
  }),
  getters: {
    getItemById: (state) => {
      return (itemId) => state.items.find(({ id }) => id === itemId)
    },
  },
  actions: {
    // Mutations
    UPDATE_LOADING({ itemId, loading }) {
      const record = this.items.find(({ id }) => id === itemId)

      if (record) {
        record.loading = loading
      } else {
        this.items.push({ itemId, loading })
      }

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
   async fetchItemById({ itemId }) {
      if (this.getItemById(itemId)) {
        return
      }

      try {
        this.UPDATE_LOADING({ itemId, loading: true })

        const res = await $fetch(`/api/items/${itemId}`, {
          headers: {
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NDIyNzA2NTMsInN1YiI6MTE0MjZ9.DI8EgGdoXLD4MVwh7IPfAoiRI8mL-ZuQUB0AoOOdbIc'
          }
        })
        this.ADD_ITEM(itemFormatter(res))
      } catch (e) {
        console.error(e.message)
      } finally {
        this.UPDATE_LOADING({ itemId, loading: false })
      }
    },
  },
})
