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
  <div
    class="flex h-[72px] justify-end bg-slate md:h-[80px] lg:min-h-screen lg:flex-col lg:rounded-tr-[26px]">
    <!-- Logo -->
    <NuxtLink class="mr-auto lg:mb-auto lg:mr-0" to="/">
      <picture>
        <source srcset="~/assets/logo-md.svg" media="(min-width: 768px)" />
        <source srcset="~/assets/logo-lg.svg" media="(min-width: 1024px)" />
        <img
          class="h-[72px] w-[72px] md:h-[80px] md:w-[80px] lg:h-[102px] lg:w-[102px]"
          src="~/assets/logo-sm.svg"
          alt="Logo small" />
      </picture>
    </NuxtLink>

    <!-- Switch dark/light theme -->
    <UButton
      variant="ghost"
      class="flex justify-center rounded-none bg-transparent px-6 align-middle text-stone transition-colors duration-200 hover:bg-transparent hover:text-silver lg:p-6 dark:text-stone dark:hover:bg-transparent dark:hover:text-silver"
      @click="switchDarkTheme">
      <UIcon :name="iconSwitchName" />
    </UButton>
    <!-- Divider -->
    <div class="h-auto w-[1px] bg-[#494E6E] lg:h-[1px] lg:w-auto" />
    <!-- Profile -->
    <UButton
      variant="ghost"
      class="flex justify-center rounded-none bg-transparent px-6 align-middle transition-colors duration-200 hover:bg-transparent lg:p-6 dark:hover:bg-transparent">
      <img
        src="~/assets/image-avatar.jpg"
        class="h-8 w-8 rounded-full lg:h-10 lg:w-10"
        alt="Avatar" />
    </UButton>
  </div>
</template>
