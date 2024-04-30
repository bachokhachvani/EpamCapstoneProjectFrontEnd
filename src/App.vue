<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";

const router = useRouter();


const onClick = () => {
  localStorage.clear();
  router.push("/login");
};
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="filler"></div>
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/employees">Employees</RouterLink>
      </nav>
      <button @click="onClick" class="logout-btn">Logout/Login</button>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.nav {
  background-color: #8becfd;
  border: black solid 2px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  margin: 0;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  position: relative;
  text-align: center;
  margin-top: 20px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.logout-btn {
  background-color: #5271ff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: auto;
}

.logout-btn:hover {
  background-color: #4f2ba2;
}
.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.filler {
  width: 33%;
}
</style>
