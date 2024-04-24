<template>
    <table class="employee-table">
      <tbody v-if="employee">
        <tr  v-for="key in Object.keys(employee)" :key="key">
          <td>{{ key }}</td>
          <td>{{ employee[key] || 'N/A' }}</td>
        </tr>
        <tr v-if="Object.keys(employee).length === 0">
        <td colspan="2">Employee data is loading or not available...</td>
      </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'EmployeeTable',
    data() {
    return {
      employee: {}
    };
  },
  created() {
    this.fetchEmployee();
  },
  methods: {
    fetchEmployee() {
      axios.get('http://localhost:8080/my-profile',{
  headers: {
    'Authorization': `Bearer ${localStorage.getItem("authToken")}`, 
    'Content-Type': 'application/json'
  }
})
        .then(response => {
          this.employee = response.data;
        })
        .catch(error => {
          console.error("There was an error fetching the employee data:", error);
          this.employee = {};
        });
    }
  }
  }
  </script>
  
  <style scoped>
  .employee-table {
    width: 60%;
    border-collapse: collapse;
  }
  
  .employee-table th,
  .employee-table td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
    background-color: #ffff;
  }
  
  .employee-table th {
    background-color: #f4f4f4;
  }
  
  /* Add more styling as needed */
  </style>