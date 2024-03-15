<script setup lang="ts">
const { invoices } = storeToRefs(useInvoices())
const { getInvoices } = useInvoices()

getInvoices()
</script>

<template>
  <div class="flex grow flex-col gap-y-[54px]">
    <PageHeader />
    <div class="flex grow flex-col">
      <InvoicesList v-if="invoices.length" />
      <NoInvoicesToDisplay v-else class="m-auto -mt-[-54px]" />
    </div>
  </div>
</template>

<style scoped></style>
