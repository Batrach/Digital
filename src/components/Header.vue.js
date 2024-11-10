import { defineComponent, computed } from 'vue';
import basket from '../assets/images/cart.svg';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("flex items-center  justify-between py-[13px] px-6 container-content border-primory border-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-[32px] font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("flex  gap-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), ...{ class: ("font-medium text-xl") }, }));
    const __VLS_2 = __VLS_1({ to: ("/"), ...{ class: ("font-medium text-xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: (""), ...{ class: ("font-medium text-xl") }, }));
    const __VLS_8 = __VLS_7({ to: (""), ...{ class: ("font-medium text-xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/basket"), ...{ class: ("relative cursor-pointer") }, }));
    const __VLS_14 = __VLS_13({ to: ("/basket"), ...{ class: ("relative cursor-pointer") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.basket)), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute bg-[#C95103] rounded-full w-4 h-4 flex items-center justify-center text-[10px] text-white  right-0 top-0 translate-x-1/2 translate-y-[-50%] leading-4") }, });
    (__VLS_ctx.totalQuantity);
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['py-[13px]'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['container-content'];
    __VLS_styleScopedClasses['border-primory'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['text-[32px]'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['gap-8'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['bg-[#C95103]'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['text-[10px]'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['right-0'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['translate-x-1/2'];
    __VLS_styleScopedClasses['translate-y-[-50%]'];
    __VLS_styleScopedClasses['leading-4'];
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
