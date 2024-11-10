<!-- src/views/Home.vue -->
<template>
  <div class="home-page">
    <TitleBlock/>
    <NewBlock/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TitleBlock from '../components/Home/TitleBlock.vue'; 
import NewBlock from '../components/Home/New.vue'; 

// import Banner from '../components/Home/Banner.vue'; 

export default defineComponent({
  components: {
    TitleBlock, 
    NewBlock, 
  },
});
</script>

<style scoped>
  .home-page{
    margin-bottom: 100px;
  }
</style>
  