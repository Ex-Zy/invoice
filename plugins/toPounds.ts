export default defineNuxtPlugin((nuxtApp) => {
  const { format } = currencyFormat()

  return {
    provide: {
      // format value like 556 => £556.00
      toPounds: (value: number) => format(value),
    },
  }
})
