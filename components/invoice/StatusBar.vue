<script setup lang="ts">
const props = defineProps<{ status: Status }>()
</script>

<template>
  <div
    class="flex h-[90px] items-center justify-between rounded-lg bg-white p-10 dark:bg-dark">
    <span class="text-body font-medium tracking-tight text-primary-stone">
      Status
    </span>
    <Status :status="props.status" />
  </div>
</template>

<style scoped></style>
