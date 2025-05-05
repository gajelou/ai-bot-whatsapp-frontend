<script setup>
import { ref } from 'vue';


const isOpen = ref(false);

function closeMenu() {
  isOpen.value = false;
}
</script>

<template>
  <nav class="relative bg-stone-300 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
    
    <img src="/logo.png" alt="Logo" class="w-10 h-auto rounded-4xl shadow-md"/>


    
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

    
    <ul class="hidden md:flex space-x-6 font-bold">
      <router-link to="/Home">Início</router-link>
      <router-link to="/About">Sobre</router-link>
      <router-link to="/Product">Produto</router-link>
      <router-link to="/Login">Login</router-link>
    </ul>

    
    <ul
      v-if="isOpen"
      class="absolute top-full left-0 w-full bg-white flex flex-col space-y-2 p-4 md:hidden shadow-md z-10"
    >
      <router-link to="/" @click="closeMenu">Início</router-link>
      <router-link to="/About" @click="closeMenu">Sobre</router-link>
      <router-link to="/Product" @click="closeMenu">Produto</router-link>
      <router-link to="/Login" @click="closeMenu">Login</router-link>
    </ul>
  </nav>
</template>
