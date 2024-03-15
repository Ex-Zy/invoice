<script setup lang="ts">
const route = useRoute('invoices-id')
const { getInvoiceById } = useInvoices()
const invoice = getInvoiceById(route.params.id)
</script>

<template>
  <div v-if="invoice" class="flex flex-col gap-4">
    <StatusBar v-motion-slide-bottom :status="invoice.status" />
    <InvoiceDescription v-motion-slide-top :invoice="invoice" />
  </div>
</template>

<style scoped></style>
