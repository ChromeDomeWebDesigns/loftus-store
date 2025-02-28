import { defineStore } from 'pinia'
import { collectionFormatter } from '@/lib/formatters/collection'
import { useItemsStore } from '@/store/items'

export const useCollectionsStore = defineStore('collections', {
  state: () => ({
    collections: [],
    loading: false
  }),
  getters: {
    getCollectionById: (state) => {
      return (collectionId) => state.collections.find(({ id }) => id === collectionId)
    },
  },
  actions: {
    // Mutations
    UPDATE_LOADING(loading) {
      this.loading = loading
    },
    ADD_COLLECTION(collection) {
      this.collections.push(collection)
    },
    LOAD_COLLECTIONS(collections) {
      this.collections = collections
    },
    LOAD_MORE_COLLECTIONS(collections) {
      this.collections = this.collections.concat(collections)
    },

    // Actions
   async fetchCollectionById({ collectionId, inflate }) {
      if (this.getCollectionById(collectionId)) {
        return
      }

      try {
        this.UPDATE_LOADING(true)

        const res = await $fetch(`/api/collections/${collectionId}`)
        const collection = collectionFormatter(res)
        this.ADD_COLLECTION(collection)

        if (inflate) {
          this.inflateCollectionItems(collection)
        }
      } catch (e) {
        console.error(e.message)
      } finally {
        this.UPDATE_LOADING(false)
      }
    },
    inflateCollectionItems({ items }) {
      const ItemsStore = useItemsStore()

      items.forEach(itemId => {
        ItemsStore.fetchItemById(itemId)
      })
    }
  },
})
