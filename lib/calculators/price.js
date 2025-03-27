export const getItemPrice = ({ item, quantity }) => {
  const bulkDiscount = calculateBulkDiscount({ quantity, quantityDiscounts: item.quantityDiscounts })
  return calculatePricePerPack({ price: item.price.sale || item.price.value, salesMultiple: item['sales-multiple'], bulkDiscount })
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

export const calculatePricePerUnit = ({ price, bulkDiscount }) => {
  if (!bulkDiscount) {
    return price
  }

  return price - (price * bulkDiscount)
}

export const calculatePricePerPack = ({ price, salesMultiple = 1, bulkDiscount } = {}) => {
  const perPack = price * salesMultiple

  if (!bulkDiscount) {
    return perPack
  }

  return perPack - (perPack * bulkDiscount)
}
