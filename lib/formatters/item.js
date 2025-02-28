import { IMAGE_URL_BASE_PATH } from '../constants'

export const itemFormatter = ({ data }) => {
  return {
    id: data.id,
    type: data.type,
    imageUrl: `${IMAGE_URL_BASE_PATH}/${data.attributes?.sku}.jpg`,
    ...data.attributes,
  }
}
