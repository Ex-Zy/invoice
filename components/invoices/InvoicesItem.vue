<script setup lang="ts">
const props = defineProps<{ invoice: Invoice }>()

const { $toPounds, $toDate } = useNuxtApp()

const paymentDue = computed(() => `Due ${$toDate(props.invoice.paymentDue)}`)
const totalInPounds = computed(() => $toPounds(props.invoice.total))
</script>

<template>
  <NuxtLink :to="`/invoices/${props.invoice.id}`">
    <div
      class="relative flex h-[134px] cursor-pointer justify-between rounded-lg bg-white p-6 outline outline-1 outline-transparent hover:outline-primary-purple md:h-[72px] md:px-6 md:py-4 dark:bg-dark">
      <!-- column 1 -->
      <div
        class="flex flex-col justify-end md:grow md:flex-row md:items-center md:justify-start">
        <!-- id -->
        <span
          class="mb-auto font-sans text-small font-bold md:mb-0 md:w-[80px] dark:text-white">
          <em class="-mr-1 not-italic text-primary-stone">#</em>
          {{ props.invoice.id }}
        </span>

        <!-- payment due-->
        <span
          class="font-sans text-body font-medium tracking-tight text-primary-stone md:w-[130px] md:px-4 lg:w-[150px]">
          {{ paymentDue }}
        </span>

        <!-- Client name -->
        <span
          class="absolute right-6 top-6 font-sans text-body font-medium tracking-tight text-primary-stone md:static md:w-[130px] md:px-4 lg:w-[150px] dark:text-white">
          {{ invoice.clientName }}
        </span>

        <!-- total -->
        <div
          class="mt-2.5 font-sans text-small font-bold leading-none tracking-normal md:mt-0 md:w-[155px] md:px-10 md:text-right dark:text-white">
          {{ totalInPounds }}
        </div>
      </div>
      <!-- column 2 -->
      <div
        class="flex flex-col justify-end md:w-[144px] md:flex-row md:items-center md:gap-4">
        <Status :status="invoice.status" />
        <UIcon
          class="hidden h-6 w-6 text-primary-purple md:block lg:block"
          name="i-heroicons-chevron-right-20-solid" />
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
