<script setup>
  import useLogin from '../composables/useLogin'
  import { ref } from 'vue';

  // refs
  const email = ref('')
  const password = ref('')

  const emit = defineEmits(['login'])

  const { error, login } = useLogin()

  const handleSubmit = async () => {
    await login(email.value, password.value)
    if (!error.value) {
      emit('login')
    }
  } 

</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <div class="error">
      {{ error }}
    </div>
    <button>Login</button>
  </form>
</template>

<style>
</style>