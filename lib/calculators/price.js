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

  console.log(bulkDiscount)

  return price - (price * bulkDiscount)
}

export const calculatePricePerUnit = ({ price, salesMultiple = 1 } = {}) => {
  return price / salesMultiple
}
