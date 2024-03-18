<script setup lang="ts">
const props = defineProps<{ invoice: Invoice }>()
const { invoice } = toRefs(props)
</script>

<template>
  <div class="flex flex-col gap-8 rounded-lg bg-white p-10 dark:bg-dark">
    <div class="flex flex-col gap-y-8 md:flex-row md:justify-between md:gap-0">
      <InvoiceName :id="invoice.id" :description="invoice.description" />
      <SenderAdress :sender-address="invoice.senderAddress" />
    </div>
    <div class="flex flex-col gap-y-8 md:flex-row">
      <PaymentDetails :invoice="invoice" />
      <div class="flex flex-col gap-y-3">
        <BodyText text="Sent to" />
        <HeadingText size="small" :text="invoice.clientEmail" />
      </div>
    </div>
    <Products :items="invoice.items" :total="invoice.total" />
  </div>
</template>

<style scoped></style>
