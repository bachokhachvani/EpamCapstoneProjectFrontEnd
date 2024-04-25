<script setup>
import ButtonComponent from "./ButtonComponent.vue";
import TableComponent from "./TableComponent.vue";
import HeadComponent from "./HeadComponent.vue";
import EditEmployeeComponent from "./EditEmployeeComponent.vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { ref, onMounted } from "vue";

const props = defineProps({
  name: String,
  url: String,
  isMyProfile: Boolean,
});

onMounted(() => {
  fetchEmployee();
});

const employee = ref({});

const fetchEmployee = () => {
  axios
    .get(`${props.url}${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      employee.value = response.data;
      console.log(employee);
    })
    .catch((error) => {
      console.error("There was an error fetching the employee data:", error);
      employee.value = {};
    });
};

const isEditMode = ref(false);

const route = useRoute();
const id = route.params.id ? "/" + route.params.id : "";

const onEdit = () => {
  isEditMode.value = true;
};

const onCancel = () => {
  isEditMode.value = false;
};

const onDelete = async () => {
  try {
    const response = await axios.delete(`http://localhost:8080/employee${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    alert("Employee deleted successfully");
    console.log(response);
    this.$router.push("/");
  } catch (error) {
    console.error("Failed to delete employee:", error);
    alert("Failed to delete employee");
  }
};
</script>

<template>
  <div>
    <div class="head-wrapper">
      <HeadComponent :name="name" />
    </div>
    <div class="wrapper">
      <TableComponent v-if="!isEditMode" :url="url" :id="id" />
      <EditEmployeeComponent v-if="isEditMode" />
      <div class="cancel-button">
        <button v-if="isEditMode" @click="onCancel" class="edit-contacts-btn">
          Cancel
        </button>
      </div>
      <div v-if="isMyProfile"><ButtonComponent /></div>
      <div v-if="!isMyProfile" class="button-container">
        <button v-if="!isEditMode" @click="onEdit" class="edit-contacts-btn">
          Edit Employee</button
        ><button @click="onDelete" v-if="!isEditMode" class="edit-contacts-btn">
          Delete Employee
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.head-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
.button-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.edit-contacts-btn {
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
.cancel-button {
  position: relative;
  top: 130px;
  right: 200px;
}
</style>
