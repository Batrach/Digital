import { defineStore } from 'pinia';
export const useFormStore = defineStore('formStore', {
    state: () => ({
        applicationsA: [],
        applicationsB: [],
    }),
    actions: {
        addApplicationA(id, message) {
            this.applicationsA.push({ id, message });
        },
        addApplicationB(id, message) {
            this.applicationsB.push({ id, message });
        },
    },
});
