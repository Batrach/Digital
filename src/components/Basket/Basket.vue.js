import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import garbage from '../../assets/images/garbage.svg';
export default defineComponent({
    name: 'BasketBlock',
    setup() {
        const store = useStore();
        const cartItems = computed(() => store.getters.cartItems);
        const totalQuantity = computed(() => store.getters.totalQuantity);
        const totalPrice = computed(() => store.getters.totalPrice);
        const removeItem = (item) => {
            store.commit('removeFromCart', item); // Предположим, что у вас есть мутация removeFromCart
        };
        return {
            cartItems,
            totalQuantity,
            totalPrice,
            garbage,
            removeItem,
        };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("container-content ") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-5xl text-center mb-10 mt-10 font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ ...{ class: ("w-full border-2 border-primory mb-[60px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("text-primory text-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("text-primory") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("text-primory") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("text-primory") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.cartItems))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((index)), ...{ class: ("border-t-2 border-primory") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (item.text);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("text-center") }, });
        (item.price);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("text-center") }, });
        (item.quantity);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("text-center") }, });
        (item.price * item.quantity);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.removeItem(item);
                } }, ...{ class: ("cursor-pointer") }, src: ((__VLS_ctx.garbage)), alt: (""), });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.tfoot, __VLS_intrinsicElements.tfoot)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ ...{ class: ("border-t-2 border-primory") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("text-primory") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("text-primory") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("text-primory text-center") }, });
    (__VLS_ctx.totalQuantity);
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("text-primory text-center") }, });
    (__VLS_ctx.totalPrice);
    __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-primory text-white w-[332px] text-center py-4 cursor-pointer text-2xl font-medium ml-auto") }, });
    __VLS_styleScopedClasses['container-content'];
    __VLS_styleScopedClasses['text-5xl'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-10'];
    __VLS_styleScopedClasses['mt-10'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['border-primory'];
    __VLS_styleScopedClasses['mb-[60px]'];
    __VLS_styleScopedClasses['text-primory'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['text-primory'];
    __VLS_styleScopedClasses['text-primory'];
    __VLS_styleScopedClasses['text-primory'];
    __VLS_styleScopedClasses['border-t-2'];
    __VLS_styleScopedClasses['border-primory'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['border-t-2'];
    __VLS_styleScopedClasses['border-primory'];
    __VLS_styleScopedClasses['text-primory'];
    __VLS_styleScopedClasses['text-primory'];
    __VLS_styleScopedClasses['text-primory'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-primory'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['bg-primory'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['w-[332px]'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['ml-auto'];
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
