

<script setup>
defineProps({
  id:Number,
  name: String,
  position: String,
  department: String
});
</script>

<template>
  <div class="wrapper" @click="navigateToOtherPage">
    <div>{{ name }}</div>
    <div>Position: {{ position }}</div>
    <div>Department: {{ department }}</div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToOtherPage() {
      this.$router.push(`/employeePage/${this.id}`);
    }
  }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #D9D9D9;
    color: #021E42;
    width: 200px;
    border: black solid 2px;
    border-radius: 20px;
    cursor: pointer;
}
</style>