<script setup lang="ts"></script>

<template>
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
</template>

<style scoped></style>
