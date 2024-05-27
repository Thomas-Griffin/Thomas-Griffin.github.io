<template>
  <a :href="link" class="link" rel="noopener">
    <img id="logo" :src="image" :alt="websiteLink">
    <span id="logo-label">{{ text }}</span>
  </a>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps(
    {
      websiteLink: {
        type: String,
        required: true
      },
      imageFile: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      username: {
        type: String,
        required: false,
        default: 'thomas-griffin'
      }
    }
)
const link = computed(() => {
  return props.websiteLink + props.username
});
const image = computed(() => {
  return "/assets/img/logos/" + props.imageFile
});
</script>

<style scoped>
.link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  padding: 16px;
  border-radius: 50px;
  border: solid var(--colour) 2px;
  text-decoration: none;
  transition: transform 250ms;
  background-color: rgb(0, 0, 0);
  max-height: 10px;

}

.link:hover {
  transform: scale(1.1);
}

#logo {
  width: 32px;
  height: 32px;
  display: block;
  margin-left: -10px;
  padding-left: 0;
  margin-right: 15px;
  vertical-align: middle;
  border-radius: 50px;
}

#logo-label {
  text-align: center;
  display: inline;
  margin-left: 0;
  margin-right: 30px;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--colour);
  word-wrap: break-word;
  white-space: nowrap;
  flex-grow: 1;
}
</style>