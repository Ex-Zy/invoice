<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const iconSwitchName = computed(() =>
  isDark.value ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid',
)
function switchDarkTheme() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <UButton
    variant="ghost"
    class="hover:text-primary-silver dark:hover:text-primary-silver text-primary-stone flex justify-center rounded-none bg-transparent px-6 align-middle text-xl transition-colors duration-200 hover:bg-transparent md:p-8 dark:text-stone dark:hover:bg-transparent"
    @click="switchDarkTheme">
    <UIcon :name="iconSwitchName" />
  </UButton>
</template>

<style scoped></style>
