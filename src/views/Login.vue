<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'


const email = ref('')
const password = ref('')
const errorMessage = ref('')

async function handleLogin() {
  try {
    const response = await axios.post('/api/login', {
      email: email.value,
      password: password.value
    })
    localStorage.setItem('token', response.data.token)
    window.location.href = '/dashboard'
  } catch (error) {
    errorMessage.value = "Email ou senha inválidos."
  }
}
</script>

<template>
  
  <div class=" pt-10 min-h-screen flex-col justify-items-center p-1 text-black">
    
    <div class="bg-white p-6 rounded shadow-md w-full max-w-md">
      <h2 class="text-3xl pb-10  font-extrabold">Login</h2>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="p-2 block mb-1 font-semibold" for="email">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="w-full border rounded p-2"
            required
          />
        </div>

        <div class="mb-6">
          <label class="block mb-1 font-semibold" for="password">Senha</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="w-full border rounded p-2"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Entrar
        </button>

        <p v-if="errorMessage" class="mt-4 text-red-500 text-center">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>



