<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <BForm />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import BForm from '../components/BForm.vue';
  
  export default defineComponent({
    components: {
        BForm,
    },
  });
  </script>