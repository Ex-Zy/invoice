<script setup lang="ts">
const props = defineProps<{ invoice: Invoice }>()
const { invoice } = toRefs(props)
const { $toDate } = useNuxtApp()
</script>

<template>
  <div class="flex">
    <div class="flex w-1/2 flex-col gap-y-8 md:mr-[116px] md:w-auto">
      <div class="flex flex-col gap-y-3">
        <BodyText text="Invoice Date" />
        <HeadingText size="small" :text="$toDate(invoice.createdAt)" />
      </div>
      <div class="flex flex-col gap-y-3">
        <BodyText text="Payment Due" />
        <HeadingText size="small" :text="$toDate(invoice.paymentDue)" />
      </div>
    </div>
    <div class="flex w-1/2 flex-col gap-y-1 md:mr-[116px] md:w-auto">
      <div class="flex flex-col gap-y-3">
        <BodyText text="Bill To" />
        <HeadingText size="small" :text="invoice.clientName" />
      </div>
      <div class="mt-1 flex flex-col">
        <BodyText v-for="value in invoice.clientAddress" :text="value" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
