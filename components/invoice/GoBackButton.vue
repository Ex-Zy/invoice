<template>
  <UButton
    variant="link"
    class="h-[44px] gap-2.5 pl-[6px] pr-[15px] text-small leading-none tracking-normal text-onyx hover:bg-transparent hover:text-onyx md:h-[48px] md:gap-[18px] dark:text-white dark:hover:text-white"
    @click="$router.back()">
    <UIcon name="i-heroicons-chevron-left-20-solid" />
    Go back
  </UButton>
</template>
