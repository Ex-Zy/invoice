<script lang="ts" setup>
interface Checkbox {
  label: string
  value: string
}

const { filterByStatus } = storeToRefs(useInvoices())
const { getInvoices } = useInvoices()

const isOpen = ref(false)

const arrowIcon = computed(() =>
  isOpen.value
    ? 'i-heroicons-chevron-up-20-solid'
    : 'i-heroicons-chevron-down-20-solid',
)

const checkboxes = reactive<Checkbox[]>([
  { value: 'draft', label: 'Draft' },
  { value: 'pending', label: 'Pending' },
  { value: 'paid', label: 'Paid' },
])
</script>

<template>
  <UPopover v-model:open="isOpen">
    <UButton
      variant="ghost"
      class="gap-3 px-4 py-3 hover:bg-transparent dark:hover:bg-transparent"
      color="white"
      :trailing-icon="arrowIcon">
      <span class="text-small font-bold leading-none tracking-normal">
        <span class="md:hidden lg:hidden">Filter</span>
        <span class="hidden md:inline">Filter by status</span>
      </span>
    </UButton>

    <template #panel>
      <div class="flex w-[192px] flex-col gap-[15px] p-6">
        <UCheckbox
          v-for="checkbox in checkboxes"
          :key="checkbox.value"
          v-model="filterByStatus"
          :ui="{
            wrapper: 'items-center',
            label:
              'text-small tracking-normal font-bold text-dark leading-none',
          }"
          input-class="dark:text-primary-purple text-primary-purple bg-primary-silver hover:border-primary-purple transition-colors duration-300"
          :value="checkbox.value"
          :label="checkbox.label"
          @change="getInvoices" />
      </div>
    </template>
  </UPopover>
</template>
