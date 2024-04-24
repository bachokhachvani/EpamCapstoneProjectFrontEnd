<template>
    <div class="add-employee">
      <h2>Add Employee</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input id="name" v-model="employee.name" type="text" required>
        </div>
        <div>
          <label for="phone">Phone:</label>
          <input id="phone" v-model="employee.phone" type="text" required>
        </div>
        <div>
          <label for="birthday">Birthday:</label>
          <input id="birthday" v-model="employee.birthday" type="date" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input id="email" v-model="employee.email" type="email" required>
        </div>
        <div>
          <label for="hireDate">Hire Date:</label>
          <input id="hireDate" v-model="employee.hireDate" type="date" required>
        </div>
        <div>
          <label for="salary">Salary:</label>
          <input id="salary" v-model="employee.salary" type="number" required>
        </div>
        <div>
          <label for="department">Department:</label>
          <input id="department" v-model="employee.department" type="text" required>
        </div>
        <div>
          <label for="position">Position:</label>
          <input id="position" v-model="employee.position" type="text" required>
        </div>
        <div>
          <label for="managerEmail">Manager Email:</label>
          <input id="managerEmail" v-model="employee.managerEmail" type="email">
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        employee: {
          name: '',
          phone: '',
          birthday: '',
          email: '',
          hireDate: '',
          salary: null,
          department: '',
          position: '',
          managerEmail: ''
        }
      };
    },
    methods: {
      submitForm() {
        axios.post('http://localhost:8080/add-details', this.employee, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("authToken")}`,
      'Content-Type': 'application/json'
    }
  })
          .then(response => {
            alert('Employee added successfully!');
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error adding employee:', error);
            alert('Failed to add employee.');
          });
      }
    }
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>