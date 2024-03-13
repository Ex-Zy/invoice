<script setup lang="ts">
import invoices from '@/data.json'

console.log(invoices)
</script>

<template>
  <div class="flex flex-col gap-4">
    <InvoicesListItem v-for="invoice in invoices" :key="invoice.id" :invoice />
  </div>
</template>

<style scoped></style>
