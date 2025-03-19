export const getItemPrice = ({ item, quantity }) => {
  const bulkDiscount = calculateBulkDiscount({ quantity, quantityDiscounts: item.quantityDiscounts })
  return calculatePrice({ price: item.price.sale || item.price.value, bulkDiscount })
}

export const calculateBulkDiscount = ({ quantity, quantityDiscounts }) => {
  if (!quantityDiscounts) {
    return null
  }

  const quantities = Object.keys(quantityDiscounts)
  let discountPercentage = 0

  quantities.forEach(q => {
    const percentage = quantityDiscounts[q]

    if (quantity >= q) {
      discountPercentage = percentage
    }
  })

  return discountPercentage
}

export const calculatePrice = ({ price, bulkDiscount }) => {
  if (!bulkDiscount) {
    return price
  }

  return price - (price * bulkDiscount)
}

export const calculatePricePerUnit = ({ price, salesMultiple = 1 } = {}) => {
  return price / salesMultiple
}
