<script setup lang="ts"></script>

<template>
  <div
    class="bg-primary-draft flex h-[72px] justify-end md:h-[80px] lg:min-h-screen lg:flex-col lg:rounded-tr-[26px] dark:bg-dark">
    <!-- Logo -->
    <AppLogo />
    <!-- Switch dark/light theme -->
    <SwitchThemeButton />

    <!-- Divider -->
    <div class="h-auto w-[1px] bg-[#494E6E] lg:h-[1px] lg:w-auto" />
    <!-- Profile -->
    <ProfileButton />
  </div>
</template>
