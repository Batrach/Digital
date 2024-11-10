import { createStore } from 'vuex';
const store = createStore({
    state: {
        cartItems: JSON.parse(sessionStorage.getItem('cartItems') || '[]'),
    },
    mutations: {
        addToCart(state, product) {
            const existingItem = state.cartItems.find(item => item.text === product.text);
            if (existingItem) {
                existingItem.quantity++;
            }
            else {
                state.cartItems.push({ ...product, quantity: 1 });
            }
            sessionStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeFromCart(state, item) {
            const index = state.cartItems.findIndex(i => i.text === item.text);
            if (index !== -1) {
                state.cartItems.splice(index, 1);
                sessionStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            }
        },
        clearCart(state) {
            state.cartItems = [];
        },
    },
    actions: {
        addToCart({ commit }, product) {
            commit('addToCart', product);
        },
        removeFromCart({ commit }, item) {
            commit('removeFromCart', item);
        }
    },
    getters: {
        cartItems: (state) => state.cartItems,
        totalQuantity: (state) => {
            return state.cartItems.reduce((total, item) => total + item.quantity, 0);
        },
        totalPrice: (state) => {
            return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        },
    },
});
export default store;
