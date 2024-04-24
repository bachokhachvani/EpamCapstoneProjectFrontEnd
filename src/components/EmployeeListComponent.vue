<template>
  <div class="container">
    <div class="box" v-for="employee in employees" :key="employee.id">
      <EmployeeBoxComponent
        :id="employee.id"
        :name="employee.name"
        :position="employee.position.name"
        :department="employee.department.name"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import EmployeeBoxComponent from "./EmployeeBoxComponent.vue";

const employees = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:8080/employee", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        "Content-Type": "application/json",
      },
    });
    employees.value = response.data;
  } catch (error) {
    console.error("Failed to fetch employees:", error);
  }
});
</script>

<style scoped>
.container {
  padding-top: 100px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}
.box {
  margin-bottom: 20px;
}
@media (max-width: 1080px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
