import { defineStore } from 'pinia';

interface Application {
  id: string;
  message: string;
}

interface FormStoreState {
  applicationsA: Application[]; 
  applicationsB: Application[];
}

export const useFormStore = defineStore('formStore', {
  state: (): FormStoreState => ({
    applicationsA: [], 
    applicationsB: [], 
  }),
  actions: {
    addApplicationA(id: string, message: string) {
      this.applicationsA.push({ id, message }); 
    },
    addApplicationB(id: string, message: string) {
      this.applicationsB.push({ id, message }); 
    },
  },
});