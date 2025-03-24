const IMAGE_CDN = 'https://dkewhs09r9f5z.cloudfront.net'

export const mapItemImageAssets = ({ assets, sku }) => {
  const mainImage = `${IMAGE_CDN}/products/300/${sku}.jpg`

  const imageUrls = assets.map(asset => {
    return asset.url?.startsWith('//') ? `https://${asset.url.slice(2)}` : str;
  })

  return [mainImage].concat(imageUrls.filter(url => !url.includes('gif')))
}
