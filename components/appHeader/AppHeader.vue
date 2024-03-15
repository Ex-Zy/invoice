<script setup lang="ts"></script>

<template>
  <div
    class="flex h-[72px] justify-end overflow-hidden bg-primary-draft md:h-[80px] lg:min-h-screen lg:flex-col lg:rounded-tr-[26px] dark:bg-dark">
    <!-- Logo -->
    <AppLogo v-motion-slide-top />
    <!-- Switch dark/light theme -->
    <SwitchThemeButton v-motion-slide-bottom />

    <!-- Divider -->
    <div class="h-auto w-[1px] bg-[#494E6E] lg:h-[1px] lg:w-auto" />
    <!-- Profile -->
    <ProfileButton v-motion-slide-top />
  </div>
</template>
