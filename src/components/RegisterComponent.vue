<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label for="username">Username:</label>
        <input id="username" v-model="user.username" type="text" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" v-model="user.password" type="password" required />
      </div>
      <div>
        <label for="confirmPassword">Confirm Password:</label>
        <input
          id="confirmPassword"
          v-model="user.confirmPassword"
          type="password"
          required
        />
      </div>
      <button class="register-btn" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    register() {
      if (this.user.password !== this.user.confirmPassword) {
        toast("passwords do not match!", {
          autoClose: 3000,
        });
        return;
      }

      axios
        .post("http://localhost:8080/register", {
          username: this.user.username,
          password: this.user.password,
        })
        .then(() => {
          this.login();
        })
        .catch((error) => {
          console.error("There was an error registering the user:", error);
          toast("There was an error registering the user!", {
            autoClose: 3000,
          });
        });
    },
    login() {
      axios
        .post("http://localhost:8080/login", {
          username: this.user.username,
          password: this.user.password,
        })
        .then((response) => {
          localStorage.setItem("authToken", response.data.accessToken);

          this.$router.push("/userform");
        })
        .catch((error) => {
          console.error("Login failed:", error);
          toast("Login failed!", {
            autoClose: 3000,
          });
        });
    },
  },
};
</script>

<style scoped>
h2 {
  color: #1f2e6f;
  font-size: 40px;
  font-weight: bold;
}
label {
  color: #5271ff;
  font-weight: bold;
  width: 100px;
  display: block;
}

.register-btn {
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

.register-btn:hover {
  background-color: #4f2ba2;
}

form {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
}
</style>
