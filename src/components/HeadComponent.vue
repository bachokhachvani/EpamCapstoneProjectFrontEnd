<script setup>
defineProps({
  name: String,
});
</script>

<template>
  <div class="head-component">
    {{ name }}
  </div>
</template>

<style scoped>
.head-component {
  border: black solid 2px;
  border-radius: 30%;
  background-color: #d9d9d9;
  color: #004aad;
  padding: 10px;
}
</style>
