<template>
    <div class="modal-overlay" @click.self="closeModal">
        <div class="modal-content w-full max-w-[954px]">
            <div class="flex p-10 bg-primory items-center justify-between">
                <h2 class="text-white text-[32px] font-bold">{{ product.text }}</h2>
                <button @click="closeModal" class="text-white text-4xl cursor-pointer">&times;</button>
            </div>
            <div class="flex p-10 gap-10">
                <div class="w-full max-w-[462px]">
                    <img class="w-full h-full object-cover" :src="product.image" alt="Изображение товара" />
                </div>
                <div class="flex flex-col">
                    <div class="mb-3">
                        <div class="text-xl font-medium mb-2 text-[#606462]">Описание</div>
                        <p class="text-2xl font-medium text-primory">{{ product.description }}</p>
                    </div>
                    <div class="mb-3">
                        <div class="text-xl font-medium mb-2 text-[#606462]">Категория:</div>
                        <p class="text-2xl font-medium text-primory">{{ product.category }}</p>
                    </div>
                    <div class="mb-3">
                        <div class="text-xl font-medium mb-2 text-[#606462]">Рейтинг:</div>
                        <p class="text-2xl font-medium text-primory">{{ product.rating }}</p>
                    </div>
                    <div class="mt-auto text-4xl mb-6">
                        <p class="font-bold">{{ product.price }} руб</p>
                    </div>
                    <button @click="buyProduct" class="bg-primory text-white text-center py-4 text-2xl font-medium">Купить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'Modal',
    props: {
        product: {
            type: Object as PropType<{
                text: string;
                image: string;
                description: string;
                category: string;
                rating: number;
                price: number;
            }>,
            required: true,
        },
    },
    setup(props, { emit }) {
        const store = useStore();
        const { product } = toRefs(props)
        const closeModal = () => {
            emit('close');
        };

        const buyProduct = () => {
            store.dispatch('addToCart', {
                text: product.value.text, 
                price: product.value.price,
            });
            alert(`Вы купили ${product.value.text}`);
            closeModal();
        };

        return {
            
            closeModal,
            buyProduct,
        };
    },
});
</script>

<style lang="scss" scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-content {
    background: white;
}
</style>