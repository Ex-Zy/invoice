import data from '@/data.json'
export const useInvoices = defineStore('invoices', () => {
  const invoices = ref<Invoice[]>([])
  const filterByStatus = ref<Status[]>([])

  function getInvoices() {
    invoices.value = (data as Invoice[]).filter((invoice) => {
      if (!filterByStatus.value.length) return invoice
      return filterByStatus.value.includes(invoice.status)
    })
  }

  return {
    invoices,
    filterByStatus,
    getInvoices,
  }
})
