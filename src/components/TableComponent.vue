<template>
  <table class="employee-table">
    <tbody v-if="employee">
      <tr v-for="key in Object.keys(employee)" :key="key">
        <td>{{ key }}</td>
        <td>{{ employee[key] || "N/A" }}</td>
      </tr>
      <tr v-if="Object.keys(employee).length === 0">
        <td colspan="2">Employee data is loading or not available...</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";

export default {
  name: "EmployeeTable",
  props: {
    url: {
      type: String,
      required: true,
      default: "http://localhost:8080/my-profile",
    },
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      employee: {},
    };
  },

  created() {
    this.fetchEmployee();
  },
  methods: {
    fetchEmployee() {
      axios
        .get(this.url + this.id, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          this.employee = response.data;
        })
        .catch((error) => {
          console.error("There was an error fetching the employee data:", error);
          if (error.response.status == 401) {
            this.$router.push("/");
          }
          if (this.url == "http://localhost:8080/my-profile") {
            try {
              this.$router.push("/userform");
            } catch (e) {
              console.error(e);
            }
          }
          toast("you don't have authority to see employee details!", {
            autoClose: 6000,
          });
          this.employee = {};
        });
    },
  },
};
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
</style>
