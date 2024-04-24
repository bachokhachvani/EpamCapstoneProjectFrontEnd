<template>
  <button @click="onClick" class="edit-contacts-btn">Edit Contacts</button>
</template>

<script>
export default {
  name: "EditContactsButton",
  methods: {
    
    onClick() {
      this.$router.push("/mycontacts");
    }
  
  },
};
</script>

<style scoped>
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
  background-color: #5271ff;
}
</style>
