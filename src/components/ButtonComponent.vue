<template>
  <div class="button-wrapper">
  <button @click="onClick" class="edit-contacts-btn">Edit Contacts</button>
  <button @click="onRegister" class="edit-contacts-btn">Add User</button>
</div>
</template>

<script>
export default {
  name: "EditContactsButton",
  methods: {
    
    onClick() {
      this.$router.push("/mycontacts");
    },

    onRegister(){
      this.$router.push("/register-admin")
    }
  
  },
};
</script>

<style scoped>
.button-wrapper{
  display: flex;
  flex-direction: column;
  gap: 20px;
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
</style>
