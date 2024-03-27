<template>
    <button class="edit-contacts-btn">
      Edit Contacts
    </button>
  </template>
  
  <script>
  export default {
    name: 'EditContactsButton',
    // You can include additional script logic here
  }
  </script>
  
  <style scoped>
  .edit-contacts-btn {
    background-color: #5271FF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    height: 30px;
  }
  
  .edit-contacts-btn:hover {
    background-color: #5271FF;
  }
  </style>
  