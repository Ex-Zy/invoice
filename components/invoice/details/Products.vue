<script setup lang="ts">
interface Props {
  items: Item[]
  total: number
}
const props = defineProps<Props>()
</script>

<template>
  <div>
    <div class="flex flex-col gap-y-3 rounded-t-lg p-6 dark:bg-denim">
      <div
        v-for="item in props.items"
        :key="item.name"
        class="flex items-center justify-between">
        <div class="flex flex-col">
          <BodyText :text="item.name" />
          <HeadingText
            size="small"
            :text="`${item.quantity} x ${$toPounds(item.total)}`" />
        </div>
        <HeadingText size="small" :text="`${$toPounds(item.total)}`" />
      </div>
    </div>
    <div
      class="flex h-[80px] items-center justify-between rounded-b-lg bg-primary-draft px-6 dark:bg-onyx">
      <BodyText text="Amount Due" class="text-white" />
      <HeadingText
        size="small"
        :text="`${$toPounds(props.total)}`"
        class="text-white" />
    </div>
  </div>
</template>

<style scoped></style>
