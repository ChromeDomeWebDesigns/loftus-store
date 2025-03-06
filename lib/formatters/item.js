import { IMAGE_URL_BASE_PATH } from '../constants'

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
  }
}
