import { mockPriceGenerator } from '../mocks/price_mock.js'

const mapImageAssets = (assets) => {
  const imageUrls = assets.map(asset => {
    return asset.url?.startsWith('//') ? `https://${asset.url.slice(2)}` : str;
  })

  return imageUrls.filter(url => !url.includes('gif'))
}

export const itemFormatter = ({ data }) => {
  return {
    ...data.attributes,
    id: data.id,
    type: data.type,
    images: mapImageAssets(data.attributes?.assets),
    rating: 4, // TODO: Hook this up, rating system not currently in place
    collection: 'Balloons', // TODO: Hook this up, collection names are too long right now
    ...mockPriceGenerator() // TODO: Hook this up, need to understand how this is calculated
  }
}
