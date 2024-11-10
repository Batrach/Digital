<template>
    <section class="container-content ">
        <h2 class="text-5xl text-center mb-10 mt-10 font-bold">Корзина</h2>
        <table class="w-full border-2 border-primory mb-[60px]">
            <thead>
                <tr>
                    <th class="text-primory text-left">Товар</th>
                    <th class="text-primory">Цена, руб</th>
                    <th class="text-primory">Кол-во</th>
                    <th class="text-primory">Сумма, руб</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cartItems" :key="index" class="border-t-2 border-primory">
                    <td>{{ item.text }}</td>
                    <td class="text-center">{{ item.price }} руб</td>
                    <td class="text-center">{{ item.quantity }}</td>
                    <td class="text-center">{{ item.price * item.quantity }} руб</td>
                    <td >
                        <img class="cursor-pointer" :src="garbage" @click="removeItem(item)" alt="">
                    </td>
                </tr>
            </tbody>
            <tfoot >
                <tr class="border-t-2 border-primory">
                    <td class="text-primory">Итог:</td>
                    <td class="text-primory"></td>
                    <td class="text-primory text-center">{{ totalQuantity }}</td>
                    <td class="text-primory text-center">{{ totalPrice }} руб</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
        <div class="bg-primory text-white w-[332px] text-center py-4 cursor-pointer text-2xl font-medium ml-auto">
            Плачу за все!
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import garbage from '../../assets/images/garbage.svg'
import { CartItem } from '../../store/index';

export default defineComponent({
    name: 'BasketBlock',
    setup() {
        const store = useStore();

        const cartItems = computed(() => store.getters.cartItems);
        const totalQuantity = computed(() => store.getters.totalQuantity);
        const totalPrice = computed(() => store.getters.totalPrice);

        const removeItem = (item: CartItem) => {
            store.commit('removeFromCart', item); // Предположим, что у вас есть мутация removeFromCart
        }
        return {
            cartItems,
            totalQuantity,
            totalPrice,
            garbage,
            removeItem,
        };
    },
});
</script>

<style lang='scss' scoped>


table {
    width: 100%;
    border-collapse: collapse;
}
thead th, tfoot td{
    font-size: 22px;
    font-weight: 700;
}
tbody td{
    font-weight: 500;
    font-size: 22px;
}
th, td {
    padding: 20px;

}

</style>