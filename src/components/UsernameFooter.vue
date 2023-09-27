<template>
  <footer>{{ username }}</footer>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  username: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fuggles&display=swap');
footer {
  font-family: 'Fuggles', cursive;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  padding-bottom: 20px;
}
</style>