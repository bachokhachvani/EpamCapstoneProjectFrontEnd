<template>
    <table class="employee-table">
      <!-- <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
        </tr>
      </thead> -->
      <tbody>
        <tr v-for="n in 6" :key="n">
          <td>Name</td>
          <td>John Doe</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    name: 'EmployeeTable',
    // Here you could add any additional logic or data properties required for your component
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