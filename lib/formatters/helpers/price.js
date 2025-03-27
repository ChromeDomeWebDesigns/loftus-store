const calculateValue = (value, multiple) => {
  try {
    return Number(value).toFixed(2)
  } catch(e) {
    console.error(e)
    return null
  }
}

export const priceFormatter = (data) => {
  const price = {
    value: calculateValue(data.price),
    sale: data['sale-price'] ? calculateValue(data['sale-price']) : null
  }
  return {
    price,
  }
}
