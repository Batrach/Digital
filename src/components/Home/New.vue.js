import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import Modal from '../Home/Modal.vue';
import one from '../../assets/images/main/1.png';
import two from '../../assets/images/main/2.png';
import three from '../../assets/images/main/3.png';
import four from '../../assets/images/main/4.png';
import five from '../../assets/images/main/5.png';
import six from '../../assets/images/main/6.png';
export default defineComponent({
    name: 'NewBlock',
    components: {
        Modal,
    },
    setup() {
        const store = useStore();
        const goods = [
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
        const selectedProduct = ref(null);
        const openModal = (good) => {
            selectedProduct.value = good;
            isModalOpen.value = true;
        };
        const buyProduct = (good) => {
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
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            Modal,
        },
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("container-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-5xl text-center mx-auto mb-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap gap-[30px] justify-between") }, });
    for (const [good, index] of __VLS_getVForSourceType((__VLS_ctx.goods))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.openModal(good);
                } }, ...{ class: ("w-full  xs:max-w-[calc(50%-15px)] lg:max-w-[calc(33%-30px)]") }, key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aspect-square mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((good.image)), alt: (""), ...{ class: ("w-full h-full object-cover") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("font-medium text-2xl mb-4") }, });
        (good.text);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.buyProduct(good);
                } }, ...{ class: ("w-full border-2 py-3 border-primory text-xl font-medium text-center cursor-pointer hover:bg-primory hover:text-white") }, });
    }
    if (__VLS_ctx.isModalOpen) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Modal;
        /** @type { [typeof __VLS_components.Modal, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClose': {} }, product: ((__VLS_ctx.selectedProduct)), }));
        const __VLS_2 = __VLS_1({ ...{ 'onClose': {} }, product: ((__VLS_ctx.selectedProduct)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        let __VLS_6;
        const __VLS_7 = {
            onClose: (__VLS_ctx.closeModal)
        };
        let __VLS_3;
        let __VLS_4;
        var __VLS_5;
    }
    __VLS_styleScopedClasses['container-content'];
    __VLS_styleScopedClasses['text-5xl'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['mb-10'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['gap-[30px]'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['xs:max-w-[calc(50%-15px)]'];
    __VLS_styleScopedClasses['lg:max-w-[calc(33%-30px)]'];
    __VLS_styleScopedClasses['aspect-square'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['py-3'];
    __VLS_styleScopedClasses['border-primory'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['hover:bg-primory'];
    __VLS_styleScopedClasses['hover:text-white'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
