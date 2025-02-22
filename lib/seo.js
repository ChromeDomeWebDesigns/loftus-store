const DEFAULT_TITLE = 'Novelties & Balloons | Loftus International'

const TITLE_META = [
  { hid: 'og:title', name: 'og:title'},
  { hid: 'og:site_name', name: 'og:site_name'},
  { hid: 'twitter:title', name: 'twitter:title'},
]

const DESCRIPTION_META = [
  { hid: 'description', name: 'description'},
  { hid: 'og:description', name: 'og:description'},
  { hid: 'twitter:description', name: 'twitter:description'}
]

const IMAGE_META = [
  { hid: 'og:image', name: 'og:image'},
  { hid: 'twitter:image', name: 'twitter:image'},
]

const SITE_META = [
  { hid: 'og:url', name: 'og:url'},
  { hid: 'twitter:site', name: 'twitter:site'},
]



export const headBuilder = ({ title, description, image, site }) => {
  let meta = []

  if (title) {
    meta = meta.concat(TITLE_META.map(item => { return { ...item, content: title }}))
  }

  if (description) {
    meta = meta.concat(DESCRIPTION_META.map(item => { return { ...item, content: description }}))
  }

  if (image) {
    meta = meta.concat(IMAGE_META.map(item => { return { ...item, content: image }}))
  }

  if (site) {
    meta = meta.concat(SITE_META.map(item => { return { ...item, content: site }}))
  }

  return {
    title: title || DEFAULT_TITLE,
    meta
  }
}
