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
        class="text-primary-gray dark:text-primary-silver mt-0.5 font-sans text-[13px] font-medium leading-4 tracking-tight">
        <span class="md:hidden lg:hidden">7 invoices</span>
        <span class="hidden md:inline">There are 7 total invoices</span>
      </div>
    </div>

    <div class="flex items-center gap-[18px] md:gap-[40px]">
      <!-- Filter by invoice status -->
      <InvoicesFilterByStatus />

      <!-- Create New Invoice button -->
      <UButton
        class="dark:bg-primary-purple dark:hover:bg-primary-purple-light bg-primary-purple hover:bg-primary-purple-light h-[44px] gap-2.5 rounded-full pl-[6px] pr-[15px] text-[15px] leading-none tracking-normal transition-all duration-300 dark:text-white">
        <UIcon name="i-heroicons-plus-circle-20-solid" class="text-[32px]" />
        <span class="md:hidden lg:hidden">New</span>
        <span class="hidden md:inline">New Invoice</span>
      </UButton>
    </div>
  </div>
</template>
