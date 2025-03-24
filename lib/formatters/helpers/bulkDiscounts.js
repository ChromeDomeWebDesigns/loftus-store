export const bulkDiscountFormatter = ({ relationships, included }) => {
  if (!relationships['quantity-discounts']?.data) {
    return { quantityDiscounts: null }
  }

  const activeQuantityDiscounts = relationships['quantity-discounts'].data.map(({ id }) => id)
  return {
    quantityDiscounts: included.filter(({ id }) => activeQuantityDiscounts.includes(id)).map(({ attributes }) => attributes),
  }
}
