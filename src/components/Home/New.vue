<template>
    <section class="container-content">
        <h2 class="text-5xl text-center mx-auto mb-10">Новинки</h2>
        <div class="flex flex-wrap gap-[30px] justify-between">
            <div class="w-full  xs:max-w-[calc(50%-15px)] lg:max-w-[calc(33%-30px)]" @click="openModal(good)" v-for="(good, index) in goods" :key="index">
                <div class="aspect-square mb-4">
                    <img :src="good.image" alt="" class="w-full h-full object-cover">
                </div>
                <div class="font-medium text-2xl mb-4">
                    {{ good.text }}
                </div>
                <div class="w-full border-2 py-3 border-primory text-xl font-medium text-center cursor-pointer hover:bg-primory hover:text-white" @click.stop="buyProduct(good)" >
                    Купить
                </div>
            </div>
        </div>
        <Modal v-if="isModalOpen" :product="selectedProduct" @close="closeModal" />
    </section>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import { useStore } from 'vuex';
import Modal from '../Home/Modal.vue'; 

import one from '../../assets/images/main/1.png';
import two from '../../assets/images/main/2.png';
import three from '../../assets/images/main/3.png';
import four from '../../assets/images/main/4.png';
import five from '../../assets/images/main/5.png';
import six from '../../assets/images/main/6.png';

interface Goods {
    id: number;
    image: string;
    text: string;
    description: string; 
    category: string; 
    rating: number; 
    price: number; 
}

export default defineComponent({
    name: 'NewBlock',
    components: {
        Modal,
    },
    setup() {
        const store = useStore()
        const goods: Goods[] = [
            {
                id: 1,
                image: one,
                text: "Отличная ваза",
                description: "Эта ваза идеально подходит для вашего интерьера.",
                category: "Кухня",
                rating: 4.67,
                price: 1000,
            },
            {
                id: 2,
                image: two,
                text: "Белый дом",
                description: "Миниатюра белого дома для вашего стола.",
                category: "Декор",
                rating: 4.5,
                price: 1200,
            },
            {
                id: 3,
                image: three,
                text: "Кусочек бересты",
                description: "Кусочек бересты, который добавит уюта.",
                category: "Кухня",
                rating: 4.8,
                price: 800,
            },
            {
                id: 4,
                image: four,
                text: "Весёлый куб",
                description: "Игрушка для детей и взрослых.",
                category: "Игрушки",
                rating: 4.3,
                price: 600,
            },
            {
                id: 5,
                image: six,
                text: "Стеклянная призма",
                description: "Эта призма добавит света в ваш дом.",
                category: "Декор",
                rating: 4.9,
                price: 1500,
            },
            {
                id: 6,
                image: five,
                text: "Доска с листьями",
                description: "Главный помощник на кухне, который «подставит вам плечо» в нужный момент.",
                category: "Кухня",
                rating: 4.6,
                price: 900,
            },
        ];

        const isModalOpen = ref(false);
        const selectedProduct = ref<Goods | null>(null);

        const openModal = (good: Goods) => {
            selectedProduct.value = good;
            isModalOpen.value = true;
        };
        const buyProduct = (good: Goods) => {
            // Добавляем товар в корзину через Vuex
            store.dispatch('addToCart', {
                text: good.text,
                image: good.image,
                description: good.description,
                category: good.category,
                rating: good.rating,
                price: good.price,
            });
            alert(`Вы купили ${good.text}`);
        };
        const closeModal = () => {
            isModalOpen.value = false;
            selectedProduct.value = null;
        };

        return {
            goods,
            isModalOpen,
            selectedProduct,
            openModal,
            closeModal,
            buyProduct,
        };
    },
});
</script>

<style lang='scss' scoped>
</style>