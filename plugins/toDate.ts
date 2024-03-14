export default defineNuxtPlugin((nuxtApp) => {
  const { format } = dateFormat()
  return {
    provide: {
      // format date 2021-08-19 => 19 Aug 2021
      toDate: (value: string) => format(new Date(value)),
    },
  }
})
