<template>
  <div class="edit-contact-form">
    <h2>Edit Contact Information</h2>
    <form @submit.prevent="submitForm">
      <div class="wrapper">
        <label for="phone">Phone:</label>
        <input
          id="phone"
          v-model="contactInfo.phone"
          type="text"
          placeholder="Enter new phone"
        />
      </div>
      <div class="wrapper">
        <label for="email">Email:</label>
        <input
          id="email"
          v-model="contactInfo.email"
          type="email"
          placeholder="Enter new email"
        />
      </div>
      <button class="edit-btn" type="submit">Update Contact Info</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import {toast} from "vue3-toastify";

export default {
  data() {
    return {
      contactInfo: {
        phone: null,
        email: null,
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .patch("http://localhost:8080/my-profile", this.contactInfo, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Failed to update contact information:", error);
          toast("Failed to update employee!",{
            autoClose: 3000,
          })
        });
    },
  },
};
</script>

<style scoped>
.edit-contact-form {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.wrapper {
  display: flex;
  justify-content: space-between;
}
.edit-btn {
  margin-top: 30px;
  background-color: #5271ff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 30px;
  margin-left: 50px;
}

.edit-btn:hover {
  background-color: #4f2ba2;
}
</style>
