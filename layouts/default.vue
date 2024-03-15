<template>
  <div class="flex min-h-screen flex-col lg:flex-row">
    <div class="sticky top-0 z-10 h-auto lg:h-screen">
      <AppHeader />
    </div>
    <div
      class="container mx-auto flex max-w-full grow grow flex-col px-6 py-12 md:max-w-[768px] md:px-12 md:py-[60px] lg:max-w-[730px] lg:px-0 lg:py-[76px]">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
