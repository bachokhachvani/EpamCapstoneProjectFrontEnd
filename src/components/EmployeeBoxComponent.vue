<script>
export default {
  methods: {
    navigateToOtherPage() {
      this.$router.push('/employeePage');
    }
  },
}
</script>

<template>
  <div @click="navigateToOtherPage" class="wrapper">
    <div>John Doe</div>
    <div>Position: Analyst</div>
    <div>Department: Analytics</div>
  </div>
</template>

<style scoped>
.wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #D9D9D9;
    color:#021E42;
    width: 200px;
    border: black solid 2px;
    border-radius: 20px;
    cursor: pointer;
}



</style>
