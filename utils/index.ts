export const dateFormat = () => {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export const currencyFormat = (currency = 'GBP', locales = 'en-GB') => {
  return Intl.NumberFormat(locales, {
    style: 'currency',
    currency,
  })
}
