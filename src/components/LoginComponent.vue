<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input id="username" v-model="credentials.username" type="text" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" v-model="credentials.password" type="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      credentials: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:8080/login", {
          username: this.credentials.username,
          password: this.credentials.password,
        })
        .then((response) => {
          // Here you might want to store the token in localStorage or handle it differently
          localStorage.setItem("authToken", response.data.accessToken);
          alert("Login successful!");
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Login failed:", error);
          alert("Login failed!");
        });
    },
  },
};
</script>
