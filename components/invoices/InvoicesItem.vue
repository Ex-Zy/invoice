<script setup lang="ts">
const props = defineProps<{ invoice: Invoice }>()

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

const paymentDue = computed(() => {
  return `Due ${dateFormat.format(new Date(props.invoice.paymentDue))}`
})

const pounds = Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
})

const totalInPounds = computed(() => pounds.format(props.invoice.total))
</script>

<template>
  <div
    class="hover:outline-primary-purple relative flex h-[134px] cursor-pointer justify-between rounded-lg bg-white p-6 outline outline-1 outline-transparent md:h-[72px] md:px-6 md:py-4 dark:bg-dark">
    <!-- column 1 -->
    <div
      class="flex flex-col justify-end md:grow md:flex-row md:items-center md:justify-start">
      <!-- id -->
      <span
        class="text-small mb-auto font-sans font-bold md:mb-0 md:w-[80px] dark:text-white">
        <em class="text-primary-stone -mr-1 not-italic">#</em>
        {{ props.invoice.id }}
      </span>

      <!-- payment due-->
      <span
        class="text-primary-stone text-body font-sans font-medium tracking-tight md:w-[130px] md:px-4 lg:w-[150px]">
        {{ paymentDue }}
      </span>

      <!-- Client name -->
      <span
        class="text-primary-stone text-body absolute right-6 top-6 font-sans font-medium tracking-tight md:static md:w-[130px] md:px-4 lg:w-[150px] dark:text-white">
        {{ invoice.clientName }}
      </span>

      <!-- total -->
      <div
        class="text-small mt-2.5 font-sans font-bold leading-none tracking-normal md:mt-0 md:w-[155px] md:px-10 md:text-right dark:text-white">
        {{ totalInPounds }}
      </div>
    </div>
    <!-- column 2 -->
    <div
      class="flex flex-col justify-end md:w-[144px] md:flex-row md:items-center md:gap-4">
      <Status :status="invoice.status" />
      <UIcon
        class="text-primary-purple hidden h-6 w-6 md:block lg:block"
        name="i-heroicons-chevron-right-20-solid" />
    </div>
  </div>
</template>

<style scoped></style>
