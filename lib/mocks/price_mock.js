export const mockPriceGenerator = () => {
  const onSale = (Math.floor(Math.random() * 3) + 1) === 3;
  const price = {
    value: 500,
    sale: onSale ? 400 : null
  }

  const quantityDiscounts = {
    3: .03,
    5: .05
  }

  return {
    onSale,
    price,
    quantityDiscounts
  }
}
