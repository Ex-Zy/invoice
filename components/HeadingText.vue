<script setup lang="ts">
const props = defineProps<{
  size: 'small' | 'small-variant' | 'medium' | 'large'
  text: string
}>()

const fsClass = computed(() => ({
  'text-large': props.size === 'large',
  'text-medium': props.size === 'medium',
  'text-small': ['small', 'small-variant'].includes(props.size),
}))

const lsClass = computed(() => ({
  'tracking-tightest': props.size === 'large',
  'tracking-tighter': props.size === 'medium',
  'tracking-normal': ['small', 'small-variant'].includes(props.size),
}))

const lhClass = computed(() => ({
  'leading-large': props.size === 'large',
  'leading-medium': props.size === 'medium',
  'leading-small': props.size === 'small',
  'leading-small-variant': props.size === 'small-variant',
}))
</script>

<template>
  <div
    :class="[fsClass, lsClass, lhClass]"
    class="font-sans font-bold text-onyx dark:text-white">
    {{ text }}
  </div>
</template>

<style scoped></style>
