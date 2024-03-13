<script setup lang="ts"></script>

<template>
  <div class="container flex justify-between">
    <!-- Invoice title/amount -->
    <div>
      <h1
        class="font-sans text-2xl font-bold leading-none tracking-tighter text-onyx lg:text-4xl dark:text-white">
        Invoices
      </h1>
      <div
        class="text-primary-gray dark:text-primary-silver text-body mt-0.5 font-sans font-medium leading-4 tracking-tight">
        <span class="md:hidden lg:hidden">7 invoices</span>
        <span class="hidden md:inline">There are 7 total invoices</span>
      </div>
    </div>

    <div class="flex items-center gap-[18px] md:gap-[40px]">
      <!-- Filter by invoice status -->
      <InvoicesFilterByStatus />

      <!-- Create New Invoice button -->
      <CreateNewInvoiceButton />
    </div>
  </div>
</template>
