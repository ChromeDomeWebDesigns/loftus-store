export const prettyNumber = (num, digits = 2) => {
  return Number(num).toLocaleString(undefined, { minimumFractionDigits: digits, maximumFractionDigits: digits })
}
