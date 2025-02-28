import { IMAGE_URL_BASE_PATH } from '../constants'

const mapItems = (list) => {
  return list.map(collectionItem => {
    return collectionItem.relationships?.item?.data?.id
  })
}

export const collectionFormatter = ({ data, included }) => {
  return {
    id: data.id,
    type: data.type,
    items: mapItems(included)
  }
}
