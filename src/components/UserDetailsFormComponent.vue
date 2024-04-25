<template>
  <div class="add-employee">
    <h2>Add Employee</h2>
    <form @submit.prevent="submitForm">
      <div class="wrapper">
        <label for="name">Name:</label>
        <input id="name" v-model="employee.name" type="text" required />
      </div>
      <div class="wrapper">
        <label for="phone">Phone:</label>
        <input id="phone" v-model="employee.phone" type="text" required />
      </div>
      <div class="wrapper">
        <label for="birthday">Birthday:</label>
        <input id="birthday" v-model="employee.birthday" type="date" required />
      </div>
      <div class="wrapper">
        <label for="email">Email:</label>
        <input id="email" v-model="employee.email" type="email" required />
      </div>
      <div class="wrapper">
        <label for="hireDate">Hire Date:</label>
        <input id="hireDate" v-model="employee.hireDate" type="date" required />
      </div>
      <div class="wrapper">
        <label for="salary">Salary:</label>
        <input id="salary" v-model="employee.salary" type="number" required />
      </div>
      <div class="wrapper">
        <label for="department">Department:</label>
        <input id="department" v-model="employee.department" type="text" required />
      </div>
      <div class="wrapper">
        <label for="position">Position:</label>
        <input id="position" v-model="employee.position" type="text" required />
      </div>
      <div class="wrapper">
        <label for="managerEmail">Manager Email:</label>
        <input id="managerEmail" v-model="employee.managerEmail" type="email" />
      </div>
      <button class="add-btn" type="submit">Add Employee</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      employee: {
        name: "",
        phone: "",
        birthday: "",
        email: "",
        hireDate: "",
        salary: null,
        department: "",
        position: "",
        managerEmail: "",
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:8080/add-details", this.employee, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          alert("Employee added successfully!");
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Error adding employee:", error);
          alert("Failed to add employee.");
        });
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.add-btn {
  margin-top: 30px;
  background-color: #5271ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 30px;
  width: 30%;
}

.add-btn:hover {
  background-color: #4f2ba2;
}
label {
  color: #5271ff;
  font-weight: bold;
}
h2 {
  display: flex;
  justify-content: center;
  color: #1f2e6f;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30%;
}
</style>
