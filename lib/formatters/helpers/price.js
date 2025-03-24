const calculateValue = (value, multiple) => {
  try {
    return Number(Number(value) * Number(multiple)).toFixed(2)
  } catch(e) {
    console.error(e)
    return null
  }
}

export const priceFormatter = (data) => {
  const price = {
    value: calculateValue(data.price, data['sales-multiple']),
    sale: data['sale-price'] ? calculateValue(data['sale-price'], data['sales-multiple']) : null
  }
  return {
    price,
  }
}
