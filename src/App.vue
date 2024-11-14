<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarMain from './components/NavbarMain.vue'
</script>

<template>
  <header>
    <nav class="flex flex-col items-center justify-center">
      <NavbarMain class="gap-8" />
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
