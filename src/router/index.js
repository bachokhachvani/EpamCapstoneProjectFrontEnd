import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EmployeePageView from "../views/EmployeePageView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import UserDetailsFormView from "../views/UserDetailsFormView.vue";
import EditContactsView from "../views/EditContactsView.vue";
import RegisterAdmin from "@/views/RegisterAdmin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/employees",
      name: "employees",
      component: () => import("../views/EmployeesView.vue"),
    },
    {
      path: "/employeePage/:id",
      name: "employeePage",
      component: EmployeePageView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/register-admin",
      name: "registerAdmin",
      component: RegisterAdmin,
    },
    {
      path: "/userform",
      name: "userform",
      component: UserDetailsFormView,
    },
    {
      path: "/mycontacts",
      name: "mycontacts",
      component: EditContactsView,
    },
  ],
});

export default router;
