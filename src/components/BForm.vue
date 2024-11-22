<template>
  <form @submit.prevent="submitForm" class="bg-white p-6 rounded shadow-md">
    <h2 class="text-xl font-bold mb-4">Форма B</h2>
    <input v-model="name" placeholder="Имя" required class="border border-gray-300 p-2 mb-4 w-full rounded" />
    <input v-model="surname" placeholder="Фамилия" required class="border border-gray-300 p-2 mb-4 w-full rounded" />
    <input v-model="patronymic" placeholder="Отчество" required class="border border-gray-300 p-2 mb-4 w-full rounded" />
    <input v-model="birthDate" type="date" required class="border border-gray-300 p-2 mb-4 w-full rounded" />
    <input v-model="login" placeholder="Логин" required class="border border-gray-300 p-2 mb-4 w-full rounded" />
    <input v-model="email" placeholder="Email" required class="border border-gray-300 p-2 mb-4 w-full rounded" />
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
    const surname = ref<string>('');
    const patronymic = ref<string>('');
    const birthDate = ref<string>('');
    const login = ref<string>('');
    const email = ref<string>('');
    const successMessage = ref<string>('');

    const submitForm = () => {
      const id = Date.now().toString(); 
      const message = `Заявка от ${name.value} ${surname.value}`;

      console.log(`Отправка данных на /form/b:`, { id, message });

      formStore.addApplicationB(id, message); 
      successMessage.value = 'Форма успешно отправлена!';

      name.value = '';
      surname.value = '';
      patronymic.value = '';
      birthDate.value = '';
      login.value = '';
      email.value = '';
    };

    return { name, surname, patronymic, birthDate, login, email, submitForm, successMessage };
  },
});
</script>