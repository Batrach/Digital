<template>
  <form @submit.prevent="submitForm" class="bg-white p-6 rounded shadow-md">
    <h2 class="text-xl font-bold mb-4">Форма A</h2>
    <input v-model="name" placeholder="Имя" required class="border border-gray-300 p-2 mb-4 w-full rounded" />
    <input v-model="email" placeholder="Email" class="border border-gray-300 p-2 mb-4 w-full rounded" />
    <input v-model="inn" placeholder="ИНН" required class="border border-gray-300 p-2 mb-4 w-full rounded" />
    <input v-model="phone" placeholder="Телефон (+7 (XXX) XXX-XX-XX)" required class="border border-gray-300 p-2 mb-4 w-full rounded" />
    <button type="submit" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Отправить</button>
    <p v-if="successMessage" class="mt-4 text-green-500">{{ successMessage }}</p>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useFormStore } from '../store/formStore';

export default defineComponent({
  setup() {
    const formStore = useFormStore();
    const name = ref<string>('');
    const email = ref<string | null>(null);
    const inn = ref<string>('');
    const phone = ref<string>('');
    const successMessage = ref<string>('');

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
</script>