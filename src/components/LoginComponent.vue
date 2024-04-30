<template>
  <div class="container">
    <div>
      <h2>Login</h2>
      <form class="form" @submit.prevent="login">
        <div class="wrapper">
          <label for="username">Username:</label>
          <input id="username" v-model="credentials.username" type="text" required />
        </div>
        <div class="wrapper">
          <label for="password">Password:</label>
          <input id="password" v-model="credentials.password" type="password" required />
        </div>
        <button class="login-btn" type="submit">Login</button>
      </form>
    </div>
    <div class="wrapper">
      <h3>If you don't have account Register here</h3>
      <button class="login-btn" @click="onClick">Register</button>
    </div>
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
          localStorage.setItem("authToken", response.data.accessToken);
          alert("Login successful!");
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Login failed:", error);
          alert("Login failed!");
        });
    },
    onClick() {
      this.$router.push("/register");
    },
  },
};
</script>
<style scoped>
/* .form{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
} */
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-around;
  width: 30%;
}

.login-btn {
  margin-top: 30px;
  background-color: #5271ff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 30px;
}

.login-btn:hover {
  background-color: #4f2ba2;
}
label {
  color: #5271ff;
  font-weight: bold;
}
h2 {
  color: #1f2e6f;
  font-size: 40px;
  font-weight: bold;
}
h3 {
  color: #1f2e6f;
  font-size: 25px;
  font-weight: bold;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
