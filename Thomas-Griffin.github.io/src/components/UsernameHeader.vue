<template>
  <h1 id="username-header">{{ username }}</h1>
</template>

<script setup lang="ts">
defineProps({
  username: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
#username-header {
  width: 100%;
  font-size: 1.75rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  line-height: 1.25;
  display: block;
  color: var(--colour);
  margin: 0;
}
</style>