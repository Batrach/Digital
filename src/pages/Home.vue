<template>
    <div class="bg-white p-6 rounded shadow-md text-center">
      <h1 class="text-2xl font-bold mb-4">Главная страница</h1>
      <router-link to="/form-a" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Форма A</router-link>
      <router-link to="/form-b" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ml-4">Форма B</router-link>
      <router-link to="/list" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ml-4">Список заявок</router-link>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({});
  </script>
  
  <style scoped>
  </style>