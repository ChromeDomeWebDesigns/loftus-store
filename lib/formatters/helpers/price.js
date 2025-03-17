const calculateValue = (value, multiple) => {
  try {
    return Number(Number(value) * Number(multiple)).toFixed(2)
  } catch(e) {
    console.error(e)
    return null
  }
}

export const priceGenerator = (data) => {
  const onSale = (Math.floor(Math.random() * 3) + 1) === 3;
  const price = {
    value: calculateValue(data.price, data['sales-multiple']),
    sale: data['sale-price'] ? calculateValue(data['sale-price'], data['sales-multiple']) : null
  }

  // TODO: Hook this up
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
