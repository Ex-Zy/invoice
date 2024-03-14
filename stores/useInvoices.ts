import data from '@/data.json'
export const useInvoices = defineStore('invoices', () => {
  const invoices = ref<Invoice[]>([])

  function getInvoices() {
    invoices.value = [...data] as Invoice[]
  }

  return {
    invoices,
    getInvoices,
  }
})
