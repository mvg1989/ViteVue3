<template>
  <div class="container-fluid">
    <div class="row">
    <Navbar />
  </div>
    <div class="row">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

</script>

<style scoped>

</style>
