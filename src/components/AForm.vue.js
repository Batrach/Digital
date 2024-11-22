import { defineComponent, ref } from 'vue';
import { useFormStore } from '../store/formStore';
export default defineComponent({
    setup() {
        const formStore = useFormStore();
        const name = ref('');
        const email = ref(null);
        const inn = ref('');
        const phone = ref('');
        const successMessage = ref('');
        const submitForm = () => {
            const id = Date.now().toString();
            const message = `Заявка от ${name.value}`;
            console.log(`Отправка данных на /form/a:`, { id, message });
            formStore.addApplicationA(id, message);
            successMessage.value = 'Форма успешно отправлена!';
            name.value = '';
            email.value = null;
            inn.value = '';
            phone.value = '';
        };
        return { name, email, inn, phone, submitForm, successMessage };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.submitForm) }, ...{ class: ("bg-white p-6 rounded shadow-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-xl font-bold mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("Имя"), required: (true), ...{ class: ("border border-gray-300 p-2 mb-4 w-full rounded") }, });
    (__VLS_ctx.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("Email"), ...{ class: ("border border-gray-300 p-2 mb-4 w-full rounded") }, });
    (__VLS_ctx.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("ИНН"), required: (true), ...{ class: ("border border-gray-300 p-2 mb-4 w-full rounded") }, });
    (__VLS_ctx.inn);
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("Телефон (+7 (XXX) XXX-XX-XX)"), required: (true), ...{ class: ("border border-gray-300 p-2 mb-4 w-full rounded") }, });
    (__VLS_ctx.phone);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("bg-blue-500 text-white p-2 rounded hover:bg-blue-600") }, });
    if (__VLS_ctx.successMessage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-4 text-green-500") }, });
        (__VLS_ctx.successMessage);
    }
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['shadow-md'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['hover:bg-blue-600'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['text-green-500'];
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
