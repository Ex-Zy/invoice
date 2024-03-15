<script setup lang="ts">
const props = defineProps<{ invoice: Invoice }>()
const { invoice } = toRefs(props)
</script>

<template>
  <div class="flex flex-col gap-8 rounded-lg bg-white p-10">
    <div>
      <div>{{ invoice.id }}</div>
      <div>{{ invoice.description }}</div>
    </div>
    <div>
      <div>{{ invoice.id }}</div>
      <div>{{ invoice.description }}</div>
    </div>
    <div>
      <div>{{ invoice.senderAddress.street }}</div>
      <div>{{ invoice.senderAddress.city }}</div>
      <div>{{ invoice.senderAddress.postCode }}</div>
      <div>{{ invoice.senderAddress.country }}</div>
    </div>
    <div>
      <pre>{{ invoice.items }}</pre>
    </div>
  </div>
</template>

<style scoped></style>
