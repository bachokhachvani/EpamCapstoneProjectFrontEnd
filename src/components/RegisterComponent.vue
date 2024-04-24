<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div>
          <label for="username">Username:</label>
          <input id="username" v-model="user.username" type="text" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input id="email" v-model="user.email" type="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input id="password" v-model="user.password" type="password" required>
        </div>
        <div>
          <label for="confirmPassword">Confirm Password:</label>
          <input id="confirmPassword" v-model="user.confirmPassword" type="password" required>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        user: {
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        }
      };
    },
    methods: {
        register() {
      if (this.user.password !== this.user.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      axios.post('http://localhost:8080/register', {
        username: this.user.username,
        password: this.user.password,
        roleName: this.user.roleName
      })
      .then(response => {
        alert('Registration successful!');
        console.log(response.data);
        this.$router.push('/userform');
      })
      .catch(error => {
        console.error('There was an error registering the user:', error);
        alert('Registration failed!');
      });
    }
    }
  };
  </script>