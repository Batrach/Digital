<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <AForm />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import AForm from '../components/AForm.vue';
  
  export default defineComponent({
    components: {
        AForm,
    },
  });
  </script>