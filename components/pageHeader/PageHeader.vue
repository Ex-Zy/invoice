<script setup lang="ts">
const { invoices } = storeToRefs(useInvoices())
const total = computed(() => invoices.value.length)
</script>

<template>
  <div class="flex justify-between">
    <!-- Invoice title/amount -->
    <div>
      <h1
        class="font-sans text-2xl font-bold leading-none tracking-tighter text-onyx md:text-4xl dark:text-white">
        Invoices
      </h1>
      <div
        class="mt-0.5 font-sans text-body font-medium leading-4 tracking-tight text-primary-gray dark:text-primary-silver">
        <template v-if="total">
          <span class="md:hidden lg:hidden">{{ total }} invoices</span>
          <span class="hidden md:inline">
            There are {{ total }} total invoices
          </span>
        </template>
        <span v-else>No invoices</span>
      </div>
    </div>

    <div class="flex items-center md:gap-[40px]">
      <!-- Filter by invoice status -->
      <FilterByStatus />

      <!-- Create New Invoice button -->
      <CreateNewInvoiceButton />
    </div>
  </div>
</template>
