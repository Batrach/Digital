<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <List />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import List from '../components/List.vue';

export default defineComponent({
  components: {
    List,
  },
});
</script>