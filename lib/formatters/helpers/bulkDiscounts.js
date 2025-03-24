const calculateDiscounts = ({ discountData, attributes }) => {
  const price = attributes['sale-price'] || attributes.price
  const salesMultiple = attributes['sales-multiple']

  return Object.fromEntries(discountData.map(discount => {
    const quantity = Math.round(discount.quantity / salesMultiple)
    const discountPrice = (price - discount.price) / price

    return [[quantity], discountPrice]
  }))
}

export const bulkDiscountFormatter = ({ attributes, relationships, included }) => {
  if (!relationships['quantity-discounts']?.data) {
    return { quantityDiscounts: null }
  }

  const activeQuantityDiscounts = relationships['quantity-discounts'].data.map(({ id }) => id)
  const discountData = included.filter(({ id }) => activeQuantityDiscounts.includes(id)).map(({ attributes }) => attributes).sort((a, b) => a.level - b.level)

  return {
    quantityDiscounts: calculateDiscounts({ discountData, attributes })
  }
}
