<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

// Função para fechar o menu
function closeMenu() {
  isOpen.value = false;
}
</script>

<template>
  <nav class="relative bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
    <!-- Logo -->
    <div class="text-xl font-bold text-gray-800">Logo</div>

    <!-- Botão Mobile -->
    <button @click="isOpen = !isOpen" class="md:hidden">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <!-- Links desktop -->
    <ul class="hidden md:flex space-x-6">
      <router-link to="/Home">Início</router-link>
      <router-link to="/About">Sobre</router-link>
      <router-link to="/Product">Produto</router-link>
      <router-link to="/Login">Login</router-link>
    </ul>

    <!-- Menu mobile -->
    <ul
      v-if="isOpen"
      class="absolute top-full left-0 w-full bg-white flex flex-col space-y-2 p-4 md:hidden shadow-md z-10"
    >
      <router-link to="/Home" @click="closeMenu">Início</router-link>
      <router-link to="/About" @click="closeMenu">Sobre</router-link>
      <router-link to="/Product" @click="closeMenu">Produto</router-link>
      <router-link to="/Login" @click="closeMenu">Login</router-link>
    </ul>
  </nav>
</template>
