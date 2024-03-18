<script setup lang="ts">
const props = defineProps<{ text: string }>()
</script>

<template>
  <span
    class="font-sans text-body font-medium tracking-tight text-primary-stone">
    {{ props.text }}
  </span>
</template>

<style scoped></style>
