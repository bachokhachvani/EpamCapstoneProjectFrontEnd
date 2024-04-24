<script setup>
import HomeComponent from "../components/HomeComponent.vue";
</script>

<template>
  <div class="employees">
    <HomeComponent url="http://localhost:8080/employee" name="Employee" :isMyProfile="false" />
  </div>
</template>

<style></style>
