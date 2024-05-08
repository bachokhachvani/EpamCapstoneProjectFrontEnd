<template>
  <div class="edit-form">
    <form class="edit" @submit.prevent="submitForm">
      <!-- Form fields bound to localEmployee -->
      <div class="form" v-for="field in Object.keys(localEmployee)" :key="field">
        <label :for="field"
          >{{
            field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")
          }}:</label
        >
        <input
          :id="field"
          v-model="localEmployee[field]"
          :type="
            field.includes('Email')
              ? 'email'
              : field === 'salary'
              ? 'number'
              : field.includes('Date')
              ? 'date'
              : field.includes('birthday')
              ? 'date'
              : 'text'
          "
        />
      </div>
      <div><button class="edit-contacts-btn" type="submit">Save Changes</button></div>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { toast } from "vue3-toastify";
const router = useRouter();
const route = useRoute();
const id = route.params.id;

const localEmployee = reactive({
  name: "",
  email: "",
  phone: "",
  birthday: "",
  hireDate: "",
  salary: 0,
  department: "",
  position: "",
  managerEmail: "",
  managerName: "",
});

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8080/employee/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        "Content-Type": "application/json",
      },
    });
    Object.assign(localEmployee, response.data);
  } catch (error) {
    console.error("Error fetching employee data:", error);
  }
});

const submitForm = async () => {
  try {
    await axios.patch(`http://localhost:8080/update-employee/${id}`, localEmployee, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        "Content-Type": "application/json",
      },
    });

    router.push("/");
  } catch (error) {
    console.error("Failed to update employee:", error);
    toast("Failed to update employee!", {
      autoClose: 3000,
    });
  }
};
</script>

<style scoped>
.edit-contacts-btn {
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

.edit-contacts-btn:hover {
  background-color: #4f2ba2;
}
.form {
  display: flex;
  gap: 10px;
  width: 500px;
  align-items: center;
  justify-content: space-between;
}
.edit {
  display: flex;
  flex-direction: column;
}
</style>
