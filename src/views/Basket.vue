<template>
    <div>
        <BasketBlock/>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import BasketBlock from '../components/Basket/Basket.vue';  
  
  // import Banner from '../components/Home/Banner.vue'; 
  
  export default defineComponent({
    components: {
        BasketBlock, 
    },
  });
  </script>
  
  <style scoped>
    
  </style>