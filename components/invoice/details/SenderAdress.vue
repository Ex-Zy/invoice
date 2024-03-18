<script setup lang="ts">
interface Props {
  senderAddress: SenderAddress
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col">
    <BodyText v-for="value in props.senderAddress" :text="value" />
  </div>
</template>

<style scoped></style>
