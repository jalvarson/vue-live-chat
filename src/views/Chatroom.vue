<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import getUser from '../composables/getUser'
import NewChatForm from '../components/NewChatForm.vue';
import ChatWindow from '../components/ChatWindow.vue';

const { user } = getUser()
const router = useRouter()

watch(user, () => {
  if(!user.value) {
    router.push({ name: 'Welcome' })
  }
})

</script>
  
<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>
  
  <style>
  </style>