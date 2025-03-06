import { IMAGE_URL_BASE_PATH } from '../constants'

const mapImageAssets = (assets) => {
  return assets.map(asset => {
    return asset.url?.startsWith('//') ? asset.url.slice(2) : str;
  })
}

export const itemFormatter = ({ data }) => {
  return {
    ...data.attributes,
    id: data.id,
    type: data.type,
    images: [
      `${IMAGE_URL_BASE_PATH}/${data.attributes?.sku}.jpg`,
      ...mapImageAssets(data.attributes?.assets)
    ],
  }
}
