<script setup lang="ts">
interface Props {
  id: string
  description: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col">
    <InvoiceID :id="props.id" class="mb-auto md:mb-0" />
    <BodyText :text="props.description" />
  </div>
</template>

<style scoped></style>
