<template>
  <header class="flex items-center  justify-between py-[13px] px-6 container-content border-primory border-2">
    <div class="text-[32px] font-bold">
      Штуки
    </div>
    <ul class="flex  gap-8">
      <li >
        <router-link to="/" class="font-medium text-xl">
          Главная
        </router-link>
        </li>
      <li >
        <router-link to="" class="font-medium text-xl">
          Магазин
        </router-link>
        </li>
    </ul>
    <router-link to="/basket" class="relative cursor-pointer">
      <img :src="basket" alt="">
      <div class="absolute bg-[#C95103] rounded-full w-4 h-4 flex items-center justify-center text-[10px] text-white  right-0 top-0 translate-x-1/2 translate-y-[-50%] leading-4">
        {{ totalQuantity }}
      </div>
    </router-link >
  </header>
</template>

<script lang="ts">
import { defineComponent, computed} from 'vue';
import basket from '../assets/images/cart.svg'
import { useStore } from 'vuex';


export default defineComponent({
  name: 'Header',
  setup() {
    
    const store = useStore();

  const totalQuantity = computed(() => store.getters.totalQuantity);
    return {
      basket,
      totalQuantity
    };
  }
});
</script>

<style lang="scss" scoped>
header{
  margin-bottom: 12px;
}
</style>