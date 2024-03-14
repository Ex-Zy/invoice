<script setup lang="ts">
const COLORS = {
  paid: '#33d69f',
  pending: '#ff8f00',
  draft: '#373b53',
}

const props = defineProps<{ status: Status }>()

const wrapperClasses = computed(() => addColorClasses('bg', true))
const textClasses = computed(() => addColorClasses('text'))
const circleClasses = computed(() => addColorClasses('bg'))

function addColorClasses(twClass: string, addAlpha = false) {
  const colors = { ...COLORS }

  if (addAlpha) {
    for (const key in colors) {
      colors[key as Status] += `0d`
    }
  }

  return {
    [`${twClass}-[${colors.paid}]`]: props.status === 'paid',
    [`${twClass}-[${colors.pending}]`]: props.status === 'pending',
    [`${twClass}-[${colors.draft}]`]: props.status === 'draft',
  }
}
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
