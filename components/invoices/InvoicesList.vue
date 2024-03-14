<script setup lang="ts">
const { invoices } = storeToRefs(useInvoices())
const { getInvoices } = useInvoices()

getInvoices()
</script>

<template>
  <div class="flex flex-col gap-4">
    <InvoicesItem
      v-for="invoice in invoices"
      :key="invoice.id"
      :invoice="invoice" />
  </div>
</template>

<style scoped></style>
