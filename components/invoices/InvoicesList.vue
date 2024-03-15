<script setup lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate'

const { invoices } = storeToRefs(useInvoices())
</script>

<template>
  <div v-auto-animate="{ duration: 300 }" class="flex flex-col gap-4">
    <template v-for="(invoice, index) in invoices" :key="invoice.id">
      <InvoicesItem v-if="index % 2" v-motion-slide-left :invoice="invoice" />
      <InvoicesItem v-else v-motion-slide-right :invoice="invoice" />
    </template>
  </div>
</template>

<style scoped></style>
