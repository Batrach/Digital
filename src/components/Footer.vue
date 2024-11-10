<template>
  <footer class="flex items-center py-[44px] px-6  justify-between container-content bg-primory">
    <div class="text-[32px] font-bold text-white">
      Штуки
    </div>
    <ul class="flex  gap-8">
      <li >
        <router-link to="" class="font-medium text-white text-xl">
          Главная
        </router-link>
        </li>
      <li >
        <router-link to="" class="font-medium text-white text-xl">
          Магазин
        </router-link>
        </li>
    </ul>
    <div class="relative cursor-pointer py-3 px-4 border-white border-2 text-white">
      Напиши нам
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';



export default {
  name: 'Footer',
  setup() {
    

    return {
    };
  }
}
</script>

<style lang='scss' scoped>

</style>