<template>
  <div class="edit-contact-form">
    <h2>Edit Contact Information</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="phone">Phone:</label>
        <input
          id="phone"
          v-model="contactInfo.phone"
          type="text"
          placeholder="Enter new phone"
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input
          id="email"
          v-model="contactInfo.email"
          type="email"
          placeholder="Enter new email"
        />
      </div>
      <button type="submit">Update Contact Info</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

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
          alert("Contact information updated successfully!");
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Failed to update contact information:", error);
          alert("Failed to update contact information.");
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
</style>
