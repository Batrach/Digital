import { defineComponent, toRefs } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
    name: 'Modal',
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    setup(props, { emit }) {
        const store = useStore();
        const { product } = toRefs(props);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.closeModal) }, ...{ class: ("modal-overlay") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-content w-full max-w-[954px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex p-10 bg-primory items-center justify-between") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-white text-[32px] font-bold") }, });
    (__VLS_ctx.product.text);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.closeModal) }, ...{ class: ("text-white text-4xl cursor-pointer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex p-10 gap-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full max-w-[462px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("w-full h-full object-cover") }, src: ((__VLS_ctx.product.image)), alt: ("Изображение товара"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xl font-medium mb-2 text-[#606462]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-2xl font-medium text-primory") }, });
    (__VLS_ctx.product.description);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xl font-medium mb-2 text-[#606462]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-2xl font-medium text-primory") }, });
    (__VLS_ctx.product.category);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xl font-medium mb-2 text-[#606462]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-2xl font-medium text-primory") }, });
    (__VLS_ctx.product.rating);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-auto text-4xl mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-bold") }, });
    (__VLS_ctx.product.price);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.buyProduct) }, ...{ class: ("bg-primory text-white text-center py-4 text-2xl font-medium") }, });
    __VLS_styleScopedClasses['modal-overlay'];
    __VLS_styleScopedClasses['modal-content'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['max-w-[954px]'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['p-10'];
    __VLS_styleScopedClasses['bg-primory'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-[32px]'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['p-10'];
    __VLS_styleScopedClasses['gap-10'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['max-w-[462px]'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-[#606462]'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-primory'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-[#606462]'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-primory'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-[#606462]'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-primory'];
    __VLS_styleScopedClasses['mt-auto'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['bg-primory'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-medium'];
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
