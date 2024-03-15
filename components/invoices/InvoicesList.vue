<script setup lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate'

const { invoices } = storeToRefs(useInvoices())
</script>

<template>
  <div v-auto-animate="{ duration: 300 }" class="flex flex-col gap-4">
    <InvoicesItem
      v-for="invoice in invoices"
      :key="invoice.id"
      :invoice="invoice" />
  </div>
</template>

<style scoped></style>
