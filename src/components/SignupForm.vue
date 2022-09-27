<script setup>
  import { ref } from 'vue';
  import useSignUp from '../composables/useSignup';

  // refs
  const displayName = ref('')
  const email = ref('')
  const password = ref('')

  const emit = defineEmits(['signup'])
  
  const { error, signUp } = useSignUp()

  const handleSubmit = async () => {
    await signUp(email.value, password.value, displayName.value)
    if (!error.value) {
      emit('signup')
    }
  }

</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Display name" v-model="displayName">
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Signup</button>
  </form>
</template>

<style>

</style>