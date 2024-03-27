
<script setup>
import EmployeeBoxComponent from './EmployeeBoxComponent.vue';
</script>

<template>
  <div class="container">
    <div class="box"  v-for="n in 6" :key="n">
    <EmployeeBoxComponent/>
</div>
  </div>
</template>

<style scoped>
.container{
    padding-top: 100px;
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
    gap: 10px; 
}
.box{
margin-bottom: 20px;
}
@media (max-width: 1080px) {
    .container {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
