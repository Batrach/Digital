<template>
    <section class="container-content bg-primory pt-9 pb-12 pl-10 pr-9 flex justify-between ">
        <div class="flex flex-col">
            <div class="text-white text-2xl ">
                Смотри внимательно <br class="hidden md:block"> сколько всего у нас есть
            </div>
         <h1 class="text-white mt-auto text-5xl">
            Магазин очень <br class="hidden md:block">нужных штуковин
         </h1>
        </div>
        <div class="mb-[-48px] hidden md:block">
            <img :src="image" alt="">
        </div>
    </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import image from '../../assets/images/main/banner.png'

export default defineComponent({
    name: 'TitleBlock',
    setup() {
        return {
            image,
        };
    },
});
</script>

<style lang='scss' scoped>
section{
    margin-bottom: 60px;
}
</style>