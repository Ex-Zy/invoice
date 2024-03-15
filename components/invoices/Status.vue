<script setup lang="ts">
const props = defineProps<{ status: Status }>()

const isPaid = computed(() => props.status === 'paid')
const isPending = computed(() => props.status === 'pending')
const isDraft = computed(() => props.status === 'draft')

const wrapperClasses = computed(() => ({
  'bg-[#33d69f0d]': isPaid.value,
  'bg-[#ff8f000d]': isPending.value,
  'bg-[#373b530d] dark:bg-[#dfe3fa0d]': isDraft.value,
}))
const textClasses = computed(() => ({
  'text-[#33d69f]': isPaid.value,
  'text-[#ff8f00]': isPending.value,
  'text-[#373b53] dark:text-[#dfe3fa]': isDraft.value,
}))

const circleClasses = computed(() => ({
  'bg-[#33d69f]': isPaid.value,
  'bg-[#ff8f00]': isPending.value,
  'bg-[#373b53] dark:bg-[#dfe3fa0d]': isDraft.value,
}))
</script>

<template>
  <div
    class="flex h-[40px] w-[104px] items-center justify-center gap-2 rounded-md font-sans text-small font-bold capitalize leading-none tracking-normal"
    :class="wrapperClasses">
    <span class="h-2 w-2 rounded-full" :class="circleClasses"></span>
    <span :class="textClasses">
      {{ props.status }}
    </span>
  </div>
</template>
