<script setup>
import ButtonComponent from "./ButtonComponent.vue";
import TableComponent from "./TableComponent.vue";
import HeadComponent from './HeadComponent.vue';
</script>
//should get props//

<template>

  <div>
    <div class="head-wrapper">
      <HeadComponent/>
    </div>
    <div class="wrapper">
    <TableComponent/>
    <ButtonComponent/>
    </div>
  </div>
</template>

<style scoped>
.wrapper{
  display: flex;
  justify-content:space-around;
  align-items: center;
}
.head-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}


</style>