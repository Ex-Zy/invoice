<script setup lang="ts">
const props = defineProps<{ status: Status }>()

const wrapperClasses = computed(() => ({
  'bg-[#33d69f0d]': props.status === 'paid',
  'bg-[#ff8f000d]': props.status === 'pending',
  'bg-[#373b530d]': props.status === 'draft',
}))
const textClasses = computed(() => ({
  'text-[#33d69f]': props.status === 'paid',
  'text-[#ff8f00]': props.status === 'pending',
  'text-[#373b53]': props.status === 'draft',
}))

const circleClasses = computed(() => ({
  'bg-[#33d69f]': props.status === 'paid',
  'bg-[#ff8f00]': props.status === 'pending',
  'bg-[#373b53]': props.status === 'draft',
}))
</script>

<template>
  <div
    class="text-small flex h-[40px] w-[104px] items-center justify-center gap-2 rounded-md font-sans font-bold capitalize leading-none tracking-normal"
    :class="wrapperClasses">
    <span class="h-2 w-2 rounded-full" :class="circleClasses"></span>
    <span :class="textClasses">
      {{ props.status }}
    </span>
  </div>
</template>
