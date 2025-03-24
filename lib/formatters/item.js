import { priceFormatter } from './helpers/price.js'
import { mapItemImageAssets } from './helpers/images.js'
import { bulkDiscountFormatter } from './helpers/bulkDiscounts.js'

export const itemFormatter = ({ data, included }) => {
  return {
    ...data.attributes,
    id: data.id,
    type: data.type,
    images: mapItemImageAssets({ assets: data.attributes?.assets, sku: data.attributes?.sku }),
    rating: 4, // TODO: Hook this up, rating system not currently in place
    collection: 'Cannons', // TODO: Hook this up, collection names are too long right now
    ...priceFormatter(data.attributes),
    ...bulkDiscountFormatter({ attributes: data.attributes, relationships: data.relationships, included })
  }
}
