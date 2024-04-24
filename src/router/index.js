import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EmployeePageView from "../views/EmployeePageView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import UserDetailsFormView from "../views/UserDetailsFormView.vue";
import EditContactsView from "../views/EditContactsView.vue";

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/EmployeesView.vue"),
    },
    {
      path: "/employeePage/:id",
      name: "employeePage",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/employeePageView.vue"),
      component: EmployeePageView,
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/employeePageView.vue"),
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/employeePageView.vue"),
      component: RegisterView,
    },
    {
      path: "/userform",
      name: "userform",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/employeePageView.vue"),
      component: UserDetailsFormView,
    },
    {
      path: "/mycontacts",
      name: "mycontacts",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/employeePageView.vue"),
      component: EditContactsView,
    },
  ],
});

export default router;
