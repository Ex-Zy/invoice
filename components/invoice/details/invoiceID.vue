<script setup lang="ts">
const props = defineProps<{ id: string }>()
</script>

<template>
  <span class="font-sans text-small font-bold dark:text-white">
    <em class="-mr-1 not-italic text-primary-stone">#</em>
    {{ props.id }}
  </span>
</template>

<style scoped></style>
